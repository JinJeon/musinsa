import { useEffect, useState, useContext, useRef, ReactElement } from 'react';

import { FiltersContext, TFilterOption } from 'Context/FiltersContext';
import useInfiniteGoods, { TGoods, lastPageLength } from 'Hooks/useGoods';
import Goods from 'Components/Goods';
import Notification, { TNotificationProps } from 'Components/Notification';
import { StyledMain, StyledGoodsList, StyledMainNoti } from './Main.styled';

type TFilterDataParams = {
	goodsData: TGoods;
	options: Set<TFilterOption>;
	words: Set<string>;
};

const EMPTY_RESULT = '검색 결과가 없습니다';
const ERROR_RESULT = '상품을 불러오지 못했습니다';
const LAST_PAGE_RESULT = '불러올 상품이 없습니다';

const filterData = ({ goodsData, options, words }: TFilterDataParams) => {
	const isFilters = !!options.size || !!words.size;
	let isFiltered = !goodsData.isSoldOut || options.has('includeSoldOut');
	if (!isFilters) return isFiltered;

	options.forEach((option) => {
		if (option === 'includeSoldOut') return;
		isFiltered = isFiltered && goodsData[option];
	});

	words.forEach((word) => {
		const { brandName, goodsName } = goodsData;
		const isIncludeWord = brandName.includes(word) || goodsName.includes(word);
		isFiltered = isFiltered && isIncludeWord;
	});

	return isFiltered;
};

const Main = () => {
	const { goodsDataListPages, fetchNextPage, isError, isFetching } =
		useInfiniteGoods();
	const bottomRef = useRef(null);
	const { options, words } = useContext(FiltersContext);
	const [isNoti, setIsNoti] = useState(false);
	const [mainContent, setMainContent] = useState<ReactElement[]>([]);
	const [notiProps, setNotiProps] = useState<TNotificationProps>({
		mention: undefined,
		icon: undefined,
	});
	const { mention, icon } = notiProps;

	const showNoti = (showedNotiProps: TNotificationProps) => {
		setNotiProps(showedNotiProps);
		setIsNoti(true);
	};

	const getFilteredList = () => {
		if (!goodsDataListPages) return [];

		const filteredList: TGoods[] = [];
		goodsDataListPages.forEach((page) =>
			page.goodsDataList.forEach((goodsData) => {
				if (!filterData({ goodsData, options, words })) return;
				filteredList.push(goodsData);
			})
		);

		return filteredList;
	};

	const setNewMainContent = (list: TGoods[]) => {
		if (!list.length) {
			setMainContent([]);
			showNoti({ mention: EMPTY_RESULT, icon: 'warning' });
			return;
		}

		let key = 0; // 상품 번호가 중복되는 제품들에 대한 키값 처리
		const newGoodsList = list.map((goodsData, index, array) => {
			key += 1;
			const goodsKey = goodsData.goodsNo + key;
			const lastRef = !array[index + 1] ? bottomRef : null;

			return <Goods key={goodsKey} goodsData={goodsData} lastRef={lastRef} />;
		});

		setIsNoti(false);
		setMainContent(newGoodsList);
	};

	useEffect(() => {
		const filteredList = getFilteredList();
		setNewMainContent(filteredList);
	}, [goodsDataListPages, options, words]);

	useEffect(() => {
		const isLastPage = goodsDataListPages?.length === lastPageLength;
		if (isLastPage && !!mainContent.length && !isError)
			return showNoti({ mention: LAST_PAGE_RESULT });

		const bottomObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) fetchNextPage();
			},
			{ threshold: 0.5 }
		);
		const target = bottomRef.current;

		if (target) bottomObserver.observe(target);
		if (isError) bottomObserver.disconnect();

		return () => bottomObserver.disconnect();
	}, [mainContent, isError]);

	useEffect(() => {
		if (!isError || goodsDataListPages) return;
		showNoti({ mention: ERROR_RESULT, icon: 'warning' });
	}, [isError]);

	return (
		<StyledMain>
			<StyledGoodsList>{mainContent}</StyledGoodsList>
			<StyledMainNoti>
				{isFetching && <Notification />}
				{isNoti && !isFetching && (
					<Notification mention={mention} icon={icon} />
				)}
			</StyledMainNoti>
		</StyledMain>
	);
};

export default Main;
