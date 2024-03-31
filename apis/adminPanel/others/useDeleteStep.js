import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useDeleteStep = () =>
   useSWRMutation('page/iosAdmin', (url, data) =>
      axiosInstance.delete(`${url}?step=${data?.arg}`).then(res => res.data)
   );

export default useDeleteStep;
