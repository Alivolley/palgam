import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useAddBlog = () =>
   useSWRMutation('blog/add', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useAddBlog;
