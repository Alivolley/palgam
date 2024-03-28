import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useDeleteCategory = () =>
   useSWRMutation('blog/categories/admin', (url, data) =>
      axiosInstance.delete(`${url}?id=${data?.arg}`).then(res => res.data)
   );

export default useDeleteCategory;
