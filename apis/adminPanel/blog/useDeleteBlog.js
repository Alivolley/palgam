import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useDeleteBlog = () =>
   useSWRMutation('blog/delete', (url, data) => axiosInstance.delete(`${url}?id=${data?.arg}`).then(res => res.data));

export default useDeleteBlog;
