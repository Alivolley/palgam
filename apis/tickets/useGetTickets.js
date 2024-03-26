import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetTickets = () => useSWR('ticket/list', url => axiosInstance(url).then(res => res.data));

export default useGetTickets;
