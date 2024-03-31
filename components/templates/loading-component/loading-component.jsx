import Image from 'next/image';

// MUI
import { LinearProgress } from '@mui/material';

// Apis
import useGetOthers from '@/apis/adminPanel/others/useGetOthers';

function LoadingComponent() {
   const { data: othersData, isLoading: othersIsLoading } = useGetOthers();

   return (
      <div className="rounded-10 bg-[#ffffff2a] p-5">
         <div className="relative size-[180px]">
            {othersIsLoading ? (
               <div className="size-full animate-pulse rounded-full bg-[#ffffff23]" />
            ) : (
               <Image src={othersData?.logo || ''} alt="logo" fill />
            )}
         </div>
         <div className="mt-3">
            <LinearProgress sx={{ height: '6px', borderRadius: '10px' }} color="secondary" />
         </div>
      </div>
   );
}

export default LoadingComponent;
