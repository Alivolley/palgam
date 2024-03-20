import Image from 'next/image';

// MUI
import { LinearProgress } from '@mui/material';

// Assets
import loginLogo from '@/assets/images/loginLogo.png';

function LoadingComponent() {
   return (
      <div className="rounded-10 bg-[#ffffff2a] p-5">
         <div className="h-[180px]">
            <Image src={loginLogo} alt="logo" className="size-full" />
         </div>
         <div className="mt-3">
            <LinearProgress sx={{ height: '6px', borderRadius: '10px' }} color="secondary" />
         </div>
      </div>
   );
}

export default LoadingComponent;
