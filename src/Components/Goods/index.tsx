import { useEffect, useState } from 'react';

import api from 'Api';
import emptyImg from 'static/images/empty.jpg';
import { TGoods } from 'Context';
import {
	StyledGoods,
	StyledGoodsImg,
	StyledGoodsInfo,
	StyledBrandName,
	StyledGoodsName,
} from './Goods.styled';

type TGoodsProps = {
	goodsData: TGoods;
};

const Goods = ({
	goodsData: { goodsName, imageUrl, brandName },
}: TGoodsProps) => {
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
			<StyledGoodsInfo>
				<StyledBrandName>{brandName}</StyledBrandName>
				<StyledGoodsName>{goodsName}</StyledGoodsName>
			</StyledGoodsInfo>
		</StyledGoods>
	);
};

export default Goods;
