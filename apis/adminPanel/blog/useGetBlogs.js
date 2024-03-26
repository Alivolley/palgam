import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetBlogs = pageStatus =>
   useSWR(`blog/list?page=${pageStatus}`, url => axiosInstance(url).then(res => res.data));

export default useGetBlogs;
