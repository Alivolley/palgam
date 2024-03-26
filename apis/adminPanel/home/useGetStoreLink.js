import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetStoreLink = () => useSWR('link/storeLink', url => axiosInstance(url).then(res => res.data));

export default useGetStoreLink;
