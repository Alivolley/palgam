import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useChangeLogo = () =>
   useSWRMutation('page/editOther', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useChangeLogo;
