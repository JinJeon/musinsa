import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

type TGoods = {
	goodsNo: number;
	goodsName: string;
	price: number;
	brandName: string;
	imageUrl: string;
	linkUrl: string;
	brandLinkUrl: string;
	normalPrice: number;
	isSale: boolean;
	saleRate: number;
	isSoldOut: boolean;
	isExclusive: boolean;
};

type TGoodsApiParams = {
	order: number;
	goodsKeywords: Set<string>;
};

const lastPageLength = 4;

const useInfiniteGoods = (enabled: boolean = true) => {
	const defaultPageParam = { order: 0, goodsKeywords: new Set() };

	const goodsApi = async ({ order, goodsKeywords }: TGoodsApiParams) => {
		const baseURL = `https://static.msscdn.net/musinsaUI/homework/data/goods${order}.json`;
		const client = axios.create({ baseURL });
		const { data } = await client.get('');
		const goodsDataList: TGoods[] = data?.data.list;
		const newGoodsKeywords = new Set(goodsKeywords);
		goodsDataList.forEach(({ brandName, goodsName }) => {
			brandName.split(' ').forEach((word) => newGoodsKeywords.add(word));
			goodsName.split(' ').forEach((word) => newGoodsKeywords.add(word));
		});
		return { goodsDataList, order, newGoodsKeywords };
	};

	const { data, isSuccess, fetchNextPage, isError, isFetching } =
		useInfiniteQuery(
			'goods',
			({ pageParam = defaultPageParam }) => goodsApi(pageParam),
			{
				retry: 2,
				refetchOnWindowFocus: false,
				enabled,
				getNextPageParam: ({ order, newGoodsKeywords }) => {
					return { order: order + 1, goodsKeywords: newGoodsKeywords };
				},
			}
		);

	const goodsDataListPages = data?.pages;

	return {
		goodsDataListPages,
		isSuccess,
		isError,
		fetchNextPage,
		isFetching,
	};
};

export default useInfiniteGoods;
export { lastPageLength };
export type { TGoods };
