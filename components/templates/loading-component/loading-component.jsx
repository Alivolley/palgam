// MUI
import { LinearProgress } from '@mui/material';

function LoadingComponent() {
   return (
      <div className="rounded-10 bg-[#000000a2] p-5">
         <LinearProgress sx={{ height: '6px' }} />
      </div>
   );
}

export default LoadingComponent;
