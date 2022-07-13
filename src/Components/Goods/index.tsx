import { useEffect, useState } from 'react';

import api from 'Api';
import { getPriceType, getDiscountedPrice } from 'Util';
import emptyImg from 'static/images/empty.jpg';
import { TGoods } from 'Context';
import {
	StyledGoods,
	StyledGoodsImg,
	StyledGoodsInfo,
	StyledExclusiveLogo,
	StyledBrandName,
	StyledGoodsName,
	StyledGoodsPriceWrapper,
	StyledGoodsOriginPrice,
} from './Goods.styled';

type TGoodsProps = {
	goodsData: TGoods;
};

const EXCLUSIVE = '단독';

const Goods = ({
	goodsData: {
		goodsName,
		imageUrl,
		brandName,
		price,
		saleRate,
		isSale,
		isExclusive,
	},
}: TGoodsProps) => {
	const [goodsImg, setGoodsImg] = useState(emptyImg);
	const resultPrice = isSale
		? getDiscountedPrice({ price, discountRate: saleRate })
		: price;
	const showedPrice = getPriceType({ price: resultPrice, isUnit: true });
	const showedOriginPrice = getPriceType({ price, isUnit: true });

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
				{isExclusive && <StyledExclusiveLogo>{EXCLUSIVE}</StyledExclusiveLogo>}
				<StyledBrandName>{brandName}</StyledBrandName>
				<StyledGoodsName>{goodsName}</StyledGoodsName>
				<StyledGoodsPriceWrapper>
					<div>{showedPrice}</div>
					{isSale && <div>{saleRate}%</div>}
				</StyledGoodsPriceWrapper>
				<StyledGoodsOriginPrice>
					{isSale && showedOriginPrice}
				</StyledGoodsOriginPrice>
			</StyledGoodsInfo>
		</StyledGoods>
	);
};

export default Goods;
