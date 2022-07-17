import { useQuery } from 'react-query';
import axios from 'axios';

type TUseImageParams = {
	goodsNo: number;
	imageUrl: string;
};

const useImage = ({ goodsNo, imageUrl }: TUseImageParams) => {
	const client = axios.create({ baseURL: imageUrl });

	const goodsApi = async () => {
		const { data } = await client.get('', { responseType: 'blob' });
		return data;
	};

	const {
		isError,
		isSuccess,
		data: imageData,
		isFetching,
	} = useQuery(['image', goodsNo], goodsApi, {
		retry: 2,
		refetchOnWindowFocus: false,
	});

	const url = window.URL.createObjectURL(new Blob([imageData]));

	return { imageData, isError, isSuccess, url, isFetching };
};

export default useImage;
