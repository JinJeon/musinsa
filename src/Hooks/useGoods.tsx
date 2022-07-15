import { useState } from 'react';
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

type TSuccessResponse = {
	data: {
		list: TGoods[];
	};
};

const useGoods = (order?: number) => {
	const [goodsDataList, setGoodsDataList] = useState<TGoods[]>([]);
	const baseURL = `https://static.msscdn.net/musinsaUI/homework/data/goods${order}.json`;
	const client = axios.create({ baseURL });

	const setNewGoods = (successResponse: TSuccessResponse) => {
		const { list } = successResponse.data;
		setGoodsDataList(list);
	};

	const goodsApi = async () => {
		const { data } = await client.get('');
		return data;
	};

	const { isError, isSuccess } = useQuery(['users', order], goodsApi, {
		retry: 2,
		onSuccess: setNewGoods,
	});

	return { goodsDataList, isError, isSuccess };
};

export default useGoods;
