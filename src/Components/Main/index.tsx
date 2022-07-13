import { useContext } from 'react';

import { GoodsContext } from 'Context';
import Goods from 'Components/Goods';
import StyledMain from './Main.styled';

const Main = () => {
	const goodsDataList = useContext(GoodsContext);
	const isGoods = goodsDataList.length;
	const goodsList = goodsDataList.map((goodsData) => (
		<Goods key={goodsData.goodsNo} goodsData={goodsData} />
	));
	const mainContent = isGoods ? goodsList : 'LOADING';

	return <StyledMain>{mainContent}</StyledMain>;
};

export default Main;
