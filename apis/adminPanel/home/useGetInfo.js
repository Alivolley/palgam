import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetInfo = () => useSWR('account/verify', url => axiosInstance(url).then(res => res.data));

export default useGetInfo;
