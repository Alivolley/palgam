import { useState } from 'react';
import Image from 'next/image';

// Assets
import userProfile from '@/assets/images/adminPanel/userProfile.png';

// Components
import AdminDetailModal from '../admin-detail-modal/admin-detail-modal';

function AdminUserRow({ detail, row, adminsMutate }) {
   const [showDetailModal, setShowDetailModal] = useState(false);
   const accessArray = Object.values(detail?.access);
   const accessCount = accessArray?.filter(value => value === true)?.length;

   return (
      <>
         <tr
            className="border-b border-solid border-[#ffffff26] font-poppinsLight text-xs
          leading-5 text-[#ffffffb3] transition-all duration-150 hover:bg-[#ffffff0d]"
            onClick={() => setShowDetailModal(true)}
         >
            <td className="py-6 text-center align-middle">{row}</td>
            <td className="py-6 align-middle">
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
                     <p>{detail?.phone_number}</p>
                  </div>
               </div>
            </td>
            <td className="py-6 text-center align-middle">{detail?.last_update}</td>
            <td className="py-6 text-center align-middle">{detail?.last_login}</td>
            <td className="align-middle">
               <p
                  className={`mx-auto flex h-[52px] w-[220px] items-center justify-center rounded-xl
               font-poppinsMedium text-base ${
                  accessCount === 6
                     ? 'bg-[#19c2951f] text-[#19C295]'
                     : accessCount === 0
                       ? 'bg-[#f236451f] text-[#F23645]'
                       : `bg-[#ffffff0d] text-white`
               }`}
               >
                  {accessCount === 6 ? 'Full access' : accessCount === 0 ? 'No access' : `${accessCount} item access`}
               </p>
            </td>
         </tr>
         {showDetailModal && (
            <AdminDetailModal
               onClose={() => setShowDetailModal(false)}
               open={showDetailModal}
               adminsDataMutate={adminsMutate}
               detail={detail}
            />
         )}
      </>
   );
}

export default AdminUserRow;
