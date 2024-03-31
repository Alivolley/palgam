import useSWR from 'swr';

// Configs
import axiosInstance from '@/configs/axiosInstance';

const useGetSteps = chosenLang =>
   useSWR(`page/ios?lang=${chosenLang}`, url => axiosInstance(url).then(res => res.data));

export default useGetSteps;
