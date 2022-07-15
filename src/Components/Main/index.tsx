import { useEffect, useState, useContext } from 'react';

import { FiltersContext } from 'Context/FiltersContext';
import useGoods, { TGoods } from 'Hooks/useGoods';
import Goods from 'Components/Goods';
import Notification from './Notification';
import { StyledMain, StyledGoodsList } from './Main.styled';

const EMPTY_RESULT = '검색 결과 없음';
const ERROR_RESULT = '상품을 불러오지 못함';

const Main = () => {
	const { goodsDataList, isError, isSuccess } = useGoods(1);
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

		const goodsList = filteredGoodsDataList.map((goodsData) => (
			<Goods key={goodsData.goodsNo} goodsData={goodsData} />
		));
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

	return <StyledMain>{mainContent}</StyledMain>;
};

export default Main;
