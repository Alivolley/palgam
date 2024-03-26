// MUI
import { Button } from '@mui/material';

// Icons
import { FaUser } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';

const buttonStyle = {
   borderRadius: '12px',
   height: '56px',
   flex: '1 0 0',
   fontSize: '12px',
   fontFamily: 'poppinsSemibold',
};

function BlogCart({ detail }) {
   return (
      <div className="rounded-xl border border-solid border-[#ffffff26] p-6">
         <div className="flex items-center justify-between">
            <div className="space-y-2">
               <p className="flex items-center gap-2 font-poppinsExtraLight text-sm leading-6 text-[#ffffffb3]">
                  <FaUser size="18px" /> by {detail?.author}
               </p>
               <p className="flex items-center gap-2 font-poppinsExtraLight text-sm leading-6 text-[#ffffffb3]">
                  <MdDateRange size="20px" /> {detail?.created_at}
               </p>
            </div>
            <div className="flex items-center gap-2">
               {detail?.categories?.map(item => (
                  <p
                     key={crypto.randomUUID()}
                     className="flex h-14 items-center justify-center rounded-xl bg-[#ffffff26] px-6 font-poppinsLight text-xs text-[#ffffff80]"
                  >
                     {item}
                  </p>
               ))}
            </div>
         </div>

         <div className="mt-8">
            <p className="font-poppinsExtraBold text-[18px] leading-6">{detail?.title}</p>
            <p className="mt-2 font-poppinsExtraLight text-base">{detail?.summary}</p>
         </div>

         <div className="mt-8 flex items-center gap-2">
            <Button
               sx={{
                  ...buttonStyle,
                  backgroundColor: '#221C34',
                  color: '#D9D0F5',
                  ':hover': { backgroundColor: '#221c347b' },
               }}
               fullWidth
               variant="contained"
            >
               Edit blog
            </Button>
            <Button
               sx={{
                  ...buttonStyle,
                  backgroundColor: '#ffc7001f',
                  color: '#FFC700',
                  ':hover': { backgroundColor: '#ffc7000d' },
               }}
               fullWidth
               variant="contained"
            >
               Hide blog
            </Button>
            <Button
               sx={{
                  ...buttonStyle,
                  backgroundColor: '#f236451f',
                  color: '#F23645',
                  ':hover': { backgroundColor: '#f236450d' },
               }}
               fullWidth
               variant="contained"
            >
               Delete blog
            </Button>
         </div>
      </div>
   );
}

export default BlogCart;
