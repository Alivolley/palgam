import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetCategoryDetail = id =>
   useSWR(id ? `blog/categories/detail?id=${id}` : null, url => axiosInstance(url).then(res => res.data));

export default useGetCategoryDetail;
