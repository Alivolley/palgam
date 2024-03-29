import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetPagesData = () => useSWR('page/all', url => axiosInstance(url).then(res => res.data));

export default useGetPagesData;
