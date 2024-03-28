import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useEditCategory = id =>
   useSWRMutation(`blog/categories/admin?id=${id}`, (url, data) =>
      axiosInstance.patch(url, data.arg).then(res => res.data)
   );

export default useEditCategory;
