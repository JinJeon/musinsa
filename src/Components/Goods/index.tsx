import { useEffect, useState, MutableRefObject } from 'react';

import emptyImg from 'static/images/empty.jpg';
import useImage from 'Hooks/useImage';
import { getPriceType, getDiscountedPrice } from 'Util';
import { TGoods } from 'Hooks/useGoods';
import LoadingAnimation from 'Components/Loading';
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
	lastRef: MutableRefObject<null> | null;
};

const EXCLUSIVE = '단독';
const SOLD_OUT = 'SOLD OUT';

const Goods = ({
	goodsData: {
		goodsNo,
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
	lastRef,
}: TGoodsProps) => {
	const { isSuccess, url, isFetching } = useImage({ goodsNo, imageUrl });
	const [goodsImg, setGoodsImg] = useState(emptyImg);
	const resultPrice = isSale
		? getDiscountedPrice({ price, discountRate: saleRate })
		: price;
	const showedPrice = getPriceType({ price: resultPrice, isUnit: true });
	const showedOriginPrice = getPriceType({ price, isUnit: true });

	const handleClickLink = (link: string) => {
		window.location.href = link;
	};

	useEffect(() => {
		if (isSuccess) setGoodsImg(url);
	}, [isSuccess]);

	return (
		<StyledGoods ref={lastRef}>
			<StyledGoodsImgWrapper onClick={() => handleClickLink(linkUrl)}>
				{isSoldOut && <StyledSoldOutLabel>{SOLD_OUT}</StyledSoldOutLabel>}
				{isFetching && (
					<StyledSoldOutLabel>
						<LoadingAnimation color="grey7" size={30} border={5} />
					</StyledSoldOutLabel>
				)}
				<StyledGoodsImg
					src={goodsImg}
					alt="goodsImg"
					isSoldOut={isSoldOut}
					isFetching={isFetching}
				/>
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
