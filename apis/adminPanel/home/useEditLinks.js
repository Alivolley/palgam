import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useEditLinks = () =>
   useSWRMutation('link/edit', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useEditLinks;
