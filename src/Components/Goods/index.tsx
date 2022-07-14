import { useEffect, useState } from 'react';

import api from 'Api';
import { getPriceType, getDiscountedPrice } from 'Util';
import emptyImg from 'static/images/empty.jpg';
import { TGoods } from 'Context';
import {
	StyledGoods,
	StyledGoodsImgWrapper,
	StyledGoodsImg,
	StyledSoldOutLabel,
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
const SOLD_OUT = 'SOLD OUT';

const Goods = ({
	goodsData: {
		goodsName,
		imageUrl,
		brandName,
		price,
		saleRate,
		isSoldOut,
		isSale,
		isExclusive,
		linkUrl,
		brandLinkUrl,
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

	const handleClickLink = (link: string) => {
		window.location.href = link;
	};

	useEffect(() => {
		fetchImg();
	}, []);

	return (
		<StyledGoods>
			<StyledGoodsImgWrapper onClick={() => handleClickLink(linkUrl)}>
				{isSoldOut && <StyledSoldOutLabel>{SOLD_OUT}</StyledSoldOutLabel>}
				<StyledGoodsImg src={goodsImg} alt="goodsImg" isSoldOut={isSoldOut} />
			</StyledGoodsImgWrapper>
			<StyledGoodsInfo>
				{isExclusive && <StyledExclusiveLogo>{EXCLUSIVE}</StyledExclusiveLogo>}
				<StyledBrandName onClick={() => handleClickLink(brandLinkUrl)}>
					{brandName}
				</StyledBrandName>
				<StyledGoodsName onClick={() => handleClickLink(linkUrl)}>
					{goodsName}
				</StyledGoodsName>
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
