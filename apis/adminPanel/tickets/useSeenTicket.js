import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useSeenTicket = () =>
   useSWRMutation('ticket/seen', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useSeenTicket;
