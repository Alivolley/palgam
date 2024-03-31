import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useAddStep = () =>
   useSWRMutation('page/iosAdmin', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useAddStep;
