import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetTickets = pageStatus =>
   useSWR(`ticket/list?page=${pageStatus}`, url => axiosInstance(url).then(res => res.data));

export default useGetTickets;
