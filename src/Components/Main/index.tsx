import { useEffect, useState, useContext, useRef } from 'react';

import { FiltersContext } from 'Context/FiltersContext';
import useGoods, { TGoods } from 'Hooks/useGoods';
import Goods from 'Components/Goods';
import Notification from './Notification';
import { StyledMain, StyledGoodsList } from './Main.styled';

const EMPTY_RESULT = '검색 결과 없음';
const ERROR_RESULT = '상품을 불러오지 못함';

const Main = () => {
	const BottomRef = useRef(null);
	const [page, setPage] = useState(0);
	const { goodsDataList, isError, isSuccess } = useGoods(page);
	const [mainContent, setMainContent] = useState(<Notification />);
	const { options } = useContext(FiltersContext);

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

	const setNewMainContent = () => {
		const filteredGoodsDataList = goodsDataList.filter((goodsData) =>
			filterWithOptions(goodsData)
		);
		const isGoods = filteredGoodsDataList.length;
		if (!isGoods) {
			setMainContent(<Notification mention={EMPTY_RESULT} icon="warning" />);
			return;
		}

		const goodsList = filteredGoodsDataList.map((goodsData, index, array) => {
			const lastRef = index === array.length - 1 ? BottomRef : null;
			return (
				<Goods
					key={goodsData.goodsNo}
					goodsData={goodsData}
					lastRef={lastRef}
				/>
			);
		});
		const goodsListComponent = <StyledGoodsList>{goodsList}</StyledGoodsList>;
		setMainContent(goodsListComponent);
	};

	useEffect(() => {
		if (!isSuccess) return;
		setNewMainContent();
	}, [isSuccess, options]);

	useEffect(() => {
		if (!isError) return;
		setMainContent(<Notification mention={ERROR_RESULT} icon="warning" />);
	}, [isError]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setPage(page + 1);
			},
			{
				threshold: 0.3,
			}
		);
		if (BottomRef.current) observer.observe(BottomRef.current);

		return () => observer.disconnect();
	}, [mainContent]);

	return <StyledMain>{mainContent}</StyledMain>;
};

export default Main;
