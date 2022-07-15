import { useInfiniteQuery, useQuery } from 'react-query';
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

const useGoods = (order?: number) => {
	const baseURL = `https://static.msscdn.net/musinsaUI/homework/data/goods${order}.json`;
	const client = axios.create({ baseURL });

	const goodsApi = async () => {
		const { data } = await client.get('');
		return data;
	};

	const { isError, isSuccess, data } = useQuery(['goods', order], goodsApi, {
		retry: 2,
		refetchOnWindowFocus: false,
	});
	const goodsDataList: TGoods[] = data?.data.list;

	return { goodsDataList, isError, isSuccess };
};

const useInfiniteGoods = () => {
	const goodsApi = async (order: number) => {
		const baseURL = `https://static.msscdn.net/musinsaUI/homework/data/goods${order}.json`;
		const client = axios.create({ baseURL });
		const { data } = await client.get('');
		const goodsDataList: TGoods[] = data?.data.list;
		return { goodsDataList, order };
	};

	const { data, isSuccess, fetchNextPage, isError, isFetching } =
		useInfiniteQuery('goods', ({ pageParam = 0 }) => goodsApi(pageParam), {
			getNextPageParam: ({ order }) => order + 1,
			retry: 2,
			refetchOnWindowFocus: false,
		});
	const goodsDataListPages = data?.pages;

	return { goodsDataListPages, isSuccess, isError, fetchNextPage, isFetching };
};

export default useGoods;
export { useInfiniteGoods };
export type { TGoods };
