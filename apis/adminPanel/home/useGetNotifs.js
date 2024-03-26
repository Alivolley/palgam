import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetNotifs = () => useSWR('notification/', url => axiosInstance(url).then(res => res.data));

export default useGetNotifs;
