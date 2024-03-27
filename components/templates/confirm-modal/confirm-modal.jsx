// MUI
import { LoadingButton } from '@mui/lab';
import { Button, Dialog } from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';

function ConfirmModal({ closeModal, title, confirmHandler, open, confirmLoading = false }) {
   return (
      <Dialog open={open} onClose={closeModal} fullWidth>
         <div className="bg-[#080609] p-7" style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}>
            <div className="flex items-center justify-end">
               <Button className="rounded-full" onClick={closeModal}>
                  <IoIosCloseCircleOutline fontSize="30px" color="white" />
               </Button>
            </div>

            <p className="mt-4 font-poppinsLight text-xl">{title}</p>

            <div className="mt-10 flex items-center gap-6">
               <Button
                  variant="contained"
                  fullWidth
                  onClick={closeModal}
                  sx={{
                     fontFamily: 'poppinsSemibold',
                     height: '56px',
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
                  onClick={confirmHandler}
                  loading={confirmLoading}
                  sx={{
                     fontFamily: 'poppinsSemibold',
                     height: '56px',
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

export default ConfirmModal;
