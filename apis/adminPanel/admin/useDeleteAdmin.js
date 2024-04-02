import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useDeleteAdmin = () =>
   useSWRMutation('account/delete', (url, data) =>
      axiosInstance.delete(`${url}?id=${data?.arg}`).then(res => res.data)
   );

export default useDeleteAdmin;
