import useSWRMutation from 'swr/mutation';
import axiosInstance from '@/configs/axiosInstance';

const useShowHideBlog = () =>
   useSWRMutation('blog/edit', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useShowHideBlog;
