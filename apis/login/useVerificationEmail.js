import useSWRMutation from 'swr/mutation';

import axiosInstance from '@/configs/axiosInstance';

const useVerificationEmail = () =>
   useSWRMutation('account/login/', (url, data) => axiosInstance.post(url, data.arg).then(res => res.data));

export default useVerificationEmail;
