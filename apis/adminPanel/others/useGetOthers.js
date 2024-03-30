import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetOthers = () => useSWR(`page/other`, url => axiosInstance(url).then(res => res.data));

export default useGetOthers;
