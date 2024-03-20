import useSWRMutation from 'swr/mutation';
import Cookies from 'js-cookie';

import axiosInstance from '@/configs/axiosInstance';

const useLogin = () =>
   useSWRMutation('account/login', (url, data) =>
      axiosInstance.post(url, data.arg).then(res => {
         console.log(res);
         Cookies.set('palgam_accessToken', res?.data?.access, { expires: 365 });
         Cookies.set('palgam_refreshToken', res?.data?.refresh, { expires: 365 });
         Cookies.set('palgam_isLogin', true, { expires: 365 });
      })
   );

export default useLogin;
