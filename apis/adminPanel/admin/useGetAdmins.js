import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetAdmins = () => useSWR(`account/list`, url => axiosInstance(url).then(res => res.data));

export default useGetAdmins;
