import { useEffect, useState } from 'react';

import useGoods from 'Hooks/useGoods';
import Goods from 'Components/Goods';
import Notification from './Notification';
import { StyledMain, StyledGoodsList } from './Main.styled';

const EMPTY_RESULT = '검색 결과 없음';
const ERROR_RESULT = '상품을 불러오지 못함';

const Main = () => {
	const { goodsDataList, isError, isSuccess } = useGoods(0);
	const [mainContent, setMainContent] = useState(<Notification />);

	const setNewMainContent = () => {
		const goodsList = goodsDataList.map((goodsData) => (
			<Goods key={goodsData.goodsNo} goodsData={goodsData} />
		));
		const isGoods = goodsDataList.length;
		const goodsListComponent = <StyledGoodsList>{goodsList}</StyledGoodsList>;
		const emptyListComponent = (
			<Notification mention={EMPTY_RESULT} icon="warning" />
		);
		const newMainContent = isGoods ? goodsListComponent : emptyListComponent;
		setMainContent(newMainContent);
	};

	useEffect(() => {
		if (!isSuccess) return;
		setNewMainContent();
	}, [isSuccess]);

	useEffect(() => {
		if (!isError) return;
		setMainContent(<Notification mention={ERROR_RESULT} icon="warning" />);
	}, [isError]);

	return <StyledMain>{mainContent}</StyledMain>;
};

export default Main;
