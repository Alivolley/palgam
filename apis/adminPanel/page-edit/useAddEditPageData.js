import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useAddEditPageData = () =>
   useSWRMutation('page/edit', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useAddEditPageData;
