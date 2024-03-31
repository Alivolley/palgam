import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useEditStep = () =>
   useSWRMutation(`page/iosAdmin`, (url, data) => axiosInstance.patch(url, data.arg).then(res => res.data));

export default useEditStep;
