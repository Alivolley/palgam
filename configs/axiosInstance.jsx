/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
   baseURL,
});

axiosInstance.interceptors.request.use(
   config => {
      const accessToken = Cookies.get('palgam_accessToken');
      const lang = Cookies.get('NEXT_LOCALE');

      if (accessToken) {
         config.headers.Authorization = `Bearer ${accessToken}`;
      }

      if (lang) {
         config.params = { ...config.params, lang };
      }

      return config;
   },
   error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
   res => {
      if (res?.data?.detail) {
         toast.success(res?.data?.detail);
      }

      return res;
   },
   async error => {
      console.log(error);
      const refreshToken = Cookies.get('palgam_refreshToken');
      const originalReq = error.config;

      if (error?.response?.data?.detail === 'Given token not valid for any token type') {
         // access expired
         if (refreshToken) {
            const res = await axiosInstance.post('accounts/token/refresh/', {
               refresh: refreshToken,
            });
            Cookies.set('palgam_accessToken', res.data.access, { expires: 365 });
            originalReq.headers.Authorization = `Bearer ${res.data.access}`;
            return axiosInstance(originalReq);
         }
         Cookies.remove('palgam_accessToken');
         Cookies.remove('palgam_refreshToken');
         Cookies.remove('palgam_isLogin');
         location.href = '/login';
      } else if (error?.response?.data?.detail === 'Token is invalid or expired') {
         // refresh expired
         Cookies.remove('palgam_accessToken');
         Cookies.remove('palgam_refreshToken');
         Cookies.remove('palgam_isLogin');
         location.href = '/login';
      } else if (error?.response?.data?.message) {
         toast.error(error?.response?.data?.message);
      }

      return Promise.reject(error);
   }
);

export default axiosInstance;
