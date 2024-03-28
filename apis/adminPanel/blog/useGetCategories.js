import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetCategories = open =>
   useSWR(open ? `blog/categories` : null, url => axiosInstance(url).then(res => res.data));

export default useGetCategories;
