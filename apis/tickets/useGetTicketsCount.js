import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetTicketsCount = () => useSWR('ticket/new', url => axiosInstance(url).then(res => res.data));

export default useGetTicketsCount;
