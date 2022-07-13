import { useEffect, useState } from 'react';

import api from 'Api';
import emptyImg from 'static/images/empty.jpg';
import { TGoods } from 'Context';
import { StyledGoods, StyledGoodsImg } from './Goods.styled';

type TGoodsProps = {
	goodsData: TGoods;
};

const Goods = ({ goodsData: { goodsName, imageUrl } }: TGoodsProps) => {
	const [goodsImg, setGoodsImg] = useState(emptyImg);

	const fetchImg = async () => {
		const imgStatus = await api.imageApi.getImageStatus(imageUrl);
		if (imgStatus === 200) setGoodsImg(imageUrl);
	};

	useEffect(() => {
		fetchImg();
	}, []);

	return (
		<StyledGoods>
			<StyledGoodsImg src={goodsImg} alt="goodsImg" />
			{goodsName}
		</StyledGoods>
	);
};

export default Goods;
