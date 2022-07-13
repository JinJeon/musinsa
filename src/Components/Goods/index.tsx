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
			<StyledGoodsImg
				src={goodsImg}
				alt="goodsImg"
				onClick={() => handleClickLink(linkUrl)}
			/>
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
