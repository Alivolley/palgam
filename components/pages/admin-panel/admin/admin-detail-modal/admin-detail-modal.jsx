import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button, Dialog } from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';

// Assets
import userProfile from '@/assets/images/adminPanel/userProfile.png';

// Components
import ConfirmModal from '@/components/templates/confirm-modal/confirm-modal';

// Apis
import useBanUnbanAdmin from '@/apis/adminPanel/admin/useBanUnbanAdmin';
import useDeleteAdmin from '@/apis/adminPanel/admin/useDeleteAdmin';

const buttonStyle = {
   borderRadius: '12px',
   height: '56px',
   flex: '1 0 0',
   fontSize: '12px',
   fontFamily: 'poppinsSemibold',
};

function AdminDetailModal({ onClose, open, adminsDataMutate, detail }) {
   const [showBanModal, setShowBanModal] = useState(false);
   const [showDeleteModal, setShowDeleteModal] = useState(false);

   const { trigger: banUnbanAdminTrigger, isMutating: banUnbanAdminIsMutating } = useBanUnbanAdmin();
   const { trigger: deleteAdminTrigger, isMutating: deleteAdminIsMutating } = useDeleteAdmin();

   const accessArray = Object.keys(detail?.access).filter(key => detail?.access[key]);

   const banUnbanHandler = () => {
      const newData = {
         id: detail?.id,
         is_ban: !detail?.is_ban,
      };

      banUnbanAdminTrigger(newData, {
         onSuccess: () => {
            adminsDataMutate();
            setShowBanModal(false);
         },
      });
   };

   const deleteAdminHandler = () => {
      deleteAdminTrigger(detail?.id, {
         onSuccess: () => {
            setShowDeleteModal(false);
            onClose();
            adminsDataMutate();
         },
      });
   };

   return (
      <Dialog open={open} onClose={onClose} fullWidth sx={{ backdropFilter: 'blur(12px)' }} maxWidth="md">
         <div
            className="bg-[#080609] p-7 font-poppinsRegular"
            style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}
         >
            <div className="flex items-center justify-between">
               <p className="font-poppinsMedium text-[28px] leading-10">Admin information</p>
               <Button className="rounded-full" onClick={onClose}>
                  <IoIosCloseCircleOutline fontSize="30px" color="white" />
               </Button>
            </div>
            <div className="mt-8">
               <div className="flex items-center gap-4">
                  <div className="relative size-14">
                     <Image
                        src={detail?.profile || userProfile}
                        alt="profile"
                        fill
                        className="rounded-full object-cover"
                     />
                  </div>
                  <div className="space-y-1">
                     <p className="font-poppinsSemibold text-base text-white">{detail?.username}</p>
                     <p className="text-[#ffffffb3]">{detail?.phone_number}</p>
                  </div>
               </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
               <Button
                  sx={{
                     ...buttonStyle,
                     backgroundColor: '#ffffff0d',
                     color: 'white',
                     ':hover': { backgroundColor: '#ffffff26' },
                  }}
                  fullWidth
                  variant="contained"
                  //   onClick={() => setEditHandler(detail)}
               >
                  Edit information
               </Button>
               <Button
                  sx={{
                     ...buttonStyle,
                     ...(detail?.is_ban
                        ? {
                             backgroundColor: '#4ade801f',
                             color: '#4ade80',
                             ':hover': { backgroundColor: '#4ade800d' },
                          }
                        : {
                             backgroundColor: '#ffc7001f',
                             color: '#FFC700',
                             ':hover': { backgroundColor: '#ffc7000d' },
                          }),
                  }}
                  fullWidth
                  variant="contained"
                  onClick={() => setShowBanModal(true)}
               >
                  {detail?.is_ban ? 'Unban admin' : 'Ban admin'}
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
                  onClick={() => setShowDeleteModal(true)}
               >
                  Delete blog
               </Button>
            </div>

            <div className="mt-6 space-y-6">
               <div className="flex items-center gap-4 text-sm">
                  <p>Email</p>
                  <div className="flex-1 border-t border-dashed border-[#ffffff26]" />
                  <p>{detail?.email}</p>
               </div>
               <div className="flex items-center gap-4 text-sm">
                  <p>Username</p>
                  <div className="flex-1 border-t border-dashed border-[#ffffff26]" />
                  <p>{detail?.username}</p>
               </div>
               <div className="flex items-center gap-4 text-sm">
                  <p>Phone number</p>
                  <div className="flex-1 border-t border-dashed border-[#ffffff26]" />
                  <p>{detail?.phone_number}</p>
               </div>
               <div className="flex items-center gap-4 text-sm">
                  <p>Last login</p>
                  <div className="flex-1 border-t border-dashed border-[#ffffff26]" />
                  <p>{detail?.last_login}</p>
               </div>
               <div className="flex items-center gap-4 text-sm">
                  <p>Last update</p>
                  <div className="flex-1 border-t border-dashed border-[#ffffff26]" />
                  <p>{detail?.last_update}</p>
               </div>
            </div>

            <div className="mt-8 border-t border-solid border-[#ffffff26] pt-8">
               <p className="font-poppinsLight text-2xl">Dashboard access</p>
               <div className="mt-4 flex flex-wrap items-center gap-6">
                  {accessArray?.map(item => (
                     <p
                        className="flex h-[52px] items-center justify-center rounded-xl bg-[#ffffff0d] px-6 font-poppinsMedium capitalize"
                        key={item}
                     >
                        {item}
                     </p>
                  ))}
               </div>
            </div>

            <ConfirmModal
               closeModal={() => setShowDeleteModal(false)}
               title="Are you sure about deleting this admin ?"
               confirmHandler={deleteAdminHandler}
               open={showDeleteModal}
               confirmLoading={deleteAdminIsMutating}
            />

            <ConfirmModal
               closeModal={() => setShowBanModal(false)}
               title={detail?.is_ban ? `Are you sure about unbanning this user?` : `Are you sure to ban this user?`}
               confirmHandler={banUnbanHandler}
               open={showBanModal}
               confirmLoading={banUnbanAdminIsMutating}
            />
         </div>
      </Dialog>
   );
}

export default AdminDetailModal;
