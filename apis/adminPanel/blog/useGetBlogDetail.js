import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetBlogDetail = id =>
   useSWR(id ? `blog/detailAdmin?id=${id}` : null, url => axiosInstance(url).then(res => res.data));

export default useGetBlogDetail;
