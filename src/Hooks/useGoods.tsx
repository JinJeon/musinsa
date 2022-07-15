import { useQuery } from 'react-query';
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

	const { isError, isSuccess, data } = useQuery(['users', order], goodsApi, {
		retry: 2,
		refetchOnWindowFocus: false,
	});
	const goodsDataList: TGoods[] = data?.data.list;

	return { goodsDataList, isError, isSuccess };
};

export default useGoods;
export type { TGoods };
