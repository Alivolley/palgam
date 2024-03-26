import Cookies from 'js-cookie';
import { useState } from 'react';

// MUI
import { LoadingButton } from '@mui/lab';
import { Button, Dialog, Divider } from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';

function LogoutModal({ show, onClose }) {
   const [loading, setLoading] = useState(false);

   const logoutFuncHandler = () => {
      setLoading(true);
      Cookies.remove('palgam_accessToken');
      Cookies.remove('palgam_refreshToken');
      Cookies.remove('palgam_isLogin');
      window.location.href = '/login';
   };

   return (
      <Dialog open={show} onClose={onClose} fullWidth>
         <div className="bg-[#080609] p-10" style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}>
            <div className="flex items-center justify-between">
               <p className="font-poppinsRegular text-[28px]">Logout</p>
               <Button className="rounded-full" onClick={onClose}>
                  <IoIosCloseCircleOutline fontSize="26px" color="white" />
               </Button>
            </div>

            <Divider className="my-8" />

            <p className="font-poppinsLight text-2xl">Are you sure about logging out ?</p>

            <div className="mt-14 flex items-center gap-6">
               <Button
                  variant="contained"
                  fullWidth
                  onClick={onClose}
                  sx={{
                     fontFamily: 'poppinsSemibold',
                     height: '72px',
                     borderRadius: '12px',
                     color: 'white',
                     backgroundColor: '#ffffff0d',
                     ':hover': { backgroundColor: '#ffffff26' },
                  }}
               >
                  No
               </Button>
               <LoadingButton
                  variant="contained"
                  fullWidth
                  onClick={logoutFuncHandler}
                  loading={loading}
                  sx={{
                     fontFamily: 'poppinsSemibold',
                     height: '72px',
                     borderRadius: '12px',
                     color: 'white',
                     backgroundColor: '#F23645',
                     ':hover': { backgroundColor: '#f2364657' },
                  }}
               >
                  Yes
               </LoadingButton>
            </div>
         </div>
      </Dialog>
   );
}

export default LogoutModal;
