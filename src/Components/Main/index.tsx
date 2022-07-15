import { useEffect, useState, useContext, useRef } from 'react';

import { FiltersContext } from 'Context/FiltersContext';
import { TGoods, useInfiniteGoods } from 'Hooks/useGoods';
import Goods from 'Components/Goods';
import Notification from './Notification';
import { StyledMain, StyledGoodsList } from './Main.styled';

const EMPTY_RESULT = '검색 결과 없음';
const ERROR_RESULT = '상품을 불러오지 못함';

const Main = () => {
	const { goodsDataListPages, fetchNextPage, isError } = useInfiniteGoods();
	const BottomRef = useRef(null);
	const { options } = useContext(FiltersContext);
	const [isLast, setIsLast] = useState(false);
	const [mainContent, setMainContent] = useState([<Notification key={1} />]);
	const [notiType, setNotiType] = useState<string | undefined>(undefined);
	const [goodsList, setGoodsList] = useState<TGoods[]>([]);

	const filterWithOptions = (goodsData: TGoods) => {
		const isOptions = !!options.size;
		let isFiltered = !goodsData.isSoldOut || options.has('includeSoldOut');
		if (!isOptions) return isFiltered;

		options.forEach((option) => {
			if (option === 'includeSoldOut') return;
			isFiltered = isFiltered && goodsData[option];
		});
		return isFiltered;
	};

	const setNewMainContent = (list: TGoods[], isFiltering: boolean = false) => {
		let key = 0;

		const newGoodsList = list.map((goodsData, index, array) => {
			const lastRef = index === array.length - 1 ? BottomRef : null;
			key += 1;
			return (
				<Goods
					key={goodsData.goodsNo + key}
					goodsData={goodsData}
					lastRef={lastRef}
				/>
			);
		});

		setMainContent((prevContent) => {
			const prevList =
				goodsDataListPages?.length === 1 || isFiltering ? [] : prevContent;
			return [...prevList, ...newGoodsList];
		});
	};

	useEffect(() => {
		if (!isError) return;
		if (!goodsDataListPages) {
			setNotiType(ERROR_RESULT);
			return;
		}
		setIsLast(true);
	}, [isError]);

	useEffect(() => {
		if (!goodsDataListPages) return;

		const { goodsDataList } = goodsDataListPages[goodsDataListPages.length - 1];
		const filteredGoodsDataList = goodsDataList.filter((goodsData) =>
			filterWithOptions(goodsData)
		);
		const isGoods = filteredGoodsDataList.length;

		if (!isGoods) {
			setNotiType(EMPTY_RESULT);
			return;
		}

		setGoodsList((prevGoods) => [...prevGoods, ...goodsDataList]);
		setNewMainContent(filteredGoodsDataList);
	}, [goodsDataListPages]);

	useEffect(() => {
		if (!goodsDataListPages) return;

		const filteredGoodsDataList = goodsList.filter((goodsData) =>
			filterWithOptions(goodsData)
		);
		console.log(filteredGoodsDataList);
		const isGoods = filteredGoodsDataList.length;

		if (!isGoods) {
			setNotiType(EMPTY_RESULT);
			return;
		}

		setNewMainContent(filteredGoodsDataList, true);
		BottomRef.current = null;
	}, [options]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) fetchNextPage();
			},
			{ threshold: 0.3 }
		);
		const target = BottomRef.current;
		if (target) observer.observe(target);

		return () => observer.disconnect();
	}, [mainContent]);

	console.log(BottomRef);

	return (
		<StyledMain>
			{!notiType ? (
				<StyledGoodsList>{mainContent}</StyledGoodsList>
			) : (
				<Notification mention={notiType} icon="warning" />
			)}
			{isLast && <div>리스트 끝</div>}
		</StyledMain>
	);
};

export default Main;
