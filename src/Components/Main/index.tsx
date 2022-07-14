import { useContext } from 'react';

import { GoodsContext } from 'Context';
import icons from 'static/icons';
import Goods from 'Components/Goods';
import { StyledMain, StyledGoodsList, StyledEmptyResult } from './Main.styled';

const EMPTY_RESULT = '검색 결과 없음';
const { warning } = icons;

const Main = () => {
	const goodsDataList = useContext(GoodsContext);
	const isGoods = goodsDataList.length;
	const goodsList = goodsDataList.map((goodsData) => (
		<Goods key={goodsData.goodsNo} goodsData={goodsData} />
	));

	const mainContent = isGoods ? (
		<StyledGoodsList>{goodsList}</StyledGoodsList>
	) : (
		<StyledEmptyResult>
			{warning}
			{EMPTY_RESULT}
		</StyledEmptyResult>
	);

	return <StyledMain>{mainContent}</StyledMain>;
};

export default Main;
