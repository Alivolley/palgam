import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useEditStoreLinks = () =>
   useSWRMutation('/link/storeLinkAdmin', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useEditStoreLinks;
