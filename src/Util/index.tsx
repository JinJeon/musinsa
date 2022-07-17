type TGetPriceTypeParams = {
	price?: number;
	isUnit?: boolean;
};

type TGetDiscountedPriceParams = {
	price: number;
	discountRate: number;
};

const UNIT = '원';
const englishTyping = 'rRseEfaqQtTdwWczxvgkoiOjpuPhynbml';
const koreanTyping =
	'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ';

const getPriceType = ({ price, isUnit }: TGetPriceTypeParams) => {
	const unit = isUnit ? UNIT : '';
	const stringifiedPrice = price ? price.toLocaleString('ko-KR') : 0;
	return stringifiedPrice + unit;
};

const getDiscountedPrice = ({
	price,
	discountRate,
}: TGetDiscountedPriceParams) => {
	const calculatedPrice = (price * (100 - discountRate)) / 100;
	const discountedPrice = Math.ceil(calculatedPrice / 10) * 10;
	return discountedPrice;
};

export { getPriceType, getDiscountedPrice, englishTyping, koreanTyping };
