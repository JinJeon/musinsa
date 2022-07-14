import { useContext } from 'react';

import { GoodsContext } from 'Context';
import Goods from 'Components/Goods';
import { StyledMain, StyledGoodsList } from './Main.styled';

const Main = () => {
	const goodsDataList = useContext(GoodsContext);
	const isGoods = goodsDataList.length;
	const goodsList = goodsDataList.map((goodsData) => (
		<Goods key={goodsData.goodsNo} goodsData={goodsData} />
	));
	const mainContent = isGoods ? (
		<StyledGoodsList>{goodsList}</StyledGoodsList>
	) : (
		'LOADING'
	);

	return <StyledMain>{mainContent}</StyledMain>;
};

export default Main;
