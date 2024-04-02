import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGenerateTOTP = open =>
   useSWR(open ? `account/generateTOTP` : null, url => axiosInstance(url).then(res => res.data), {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
   });

export default useGenerateTOTP;
