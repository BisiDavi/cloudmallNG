import useSWR from 'swr';
import { axiosInstance } from '../axios';

const useGetProducts = path => {
  if (!path) {
    throw new Error('path is required');
  }
  const fetcher = url =>
    axiosInstance.post(url, { crossdomain: true }).then(res => res.data);

  const { data: result, error, loading } = useSWR(path, fetcher);
  console.log('result from GetProduct', result);

  // const { products } = result;

  return { result, error, loading };
};

export default useGetProducts;
