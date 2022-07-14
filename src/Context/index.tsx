import { useState, ReactNode, createContext, useEffect } from 'react';
import api from 'Api';

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

const GoodsContext = createContext<TGoods[]>([]);

const GoodsProvider = ({ children }: { children: ReactNode }) => {
	const [goods, setGoods] = useState<TGoods[]>([]);

	const fetchGoods = async () => {
		const goodsData = await api.goodsApi.getGoods();
		const goodsList = goodsData.list;
		setGoods(goodsList);
	};

	useEffect(() => {
		fetchGoods();
	}, []);

	return (
		<GoodsContext.Provider value={goods}>{children}</GoodsContext.Provider>
	);
};

export { GoodsProvider, GoodsContext };
export type { TGoods };
