import axios from 'axios';

const client = axios.create({}); // 추후 image 링크 변경 시 적용

const imageApi = {
	getImageStatus: async (url: string) => {
		try {
			const response = await client.get(url);
			return response.status;
		} catch (error) {
			return error;
		}
	},
};

export default imageApi;
