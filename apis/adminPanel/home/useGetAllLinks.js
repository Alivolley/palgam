import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetAllLinks = () => useSWR('link/', url => axiosInstance(url).then(res => res.data));

export default useGetAllLinks;
