import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useSeenNotifs = () => useSWRMutation('notification/seen', url => axiosInstance.get(url).then(res => res.data));

export default useSeenNotifs;
