import axios from 'axios';

const baseURL = 'https://static.msscdn.net/musinsaUI/homework/data/goods0.json';
const client = axios.create({ baseURL });

const goodsApi = {
	getGoods: async () => {
		try {
			const response = await client.get('');
			return response.data?.data;
		} catch (error) {
			return error;
		}
	},
};

export default goodsApi;
