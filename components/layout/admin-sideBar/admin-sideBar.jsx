import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// MUI
import { Button } from '@mui/material';

// Icons
import { HiMiniHome } from 'react-icons/hi2';
import { PiNotepadFill, PiCirclesThreeFill } from 'react-icons/pi';
import { LiaPagerSolid } from 'react-icons/lia';
import { RiShieldUserFill } from 'react-icons/ri';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { IoLogOut } from 'react-icons/io5';

// Components
import LogoutModal from '@/components/templates/logout-modal/logout-modal';

// Apis
import useGetInfo from '@/apis/adminPanel/home/useGetInfo';
import useGetTicketsCount from '@/apis/adminPanel/tickets/useGetTicketsCount';

function AdminSideBar() {
   const [showLogoutModal, setShowLogoutModal] = useState(false);
   const { pathname } = useRouter();

   const { data: infoData, isLoading: infoDataIsLoading } = useGetInfo();
   const { data: ticketsData } = useGetTicketsCount();

   return (
      <aside className="sticky top-0 h-fit w-[360px] shrink-0 px-6 pt-8 text-white">
         <div>
            <p className="font-poppinsExtraBold text-[32px] leading-[44px]">Welcome</p>
            <p>
               <span className="font-poppinsExtraBold text-[32px] leading-[44px]">Back,</span>{' '}
               <span className="font-poppinsLight text-[32px] leading-[44px]">{infoData?.username}</span>
            </p>
            <p className="mt-2 font-poppinsExtraLight text-sm leading-6">Last Update, {infoData?.last_update}</p>
         </div>

         {infoDataIsLoading ? (
            <div className="mt-10 flex flex-col gap-2 ">
               <div className="h-[62px] animate-pulse rounded-xl bg-[#ffffff1a]" />
               <div className="h-[62px] animate-pulse rounded-xl bg-[#ffffff1a]" />
               <div className="h-[62px] animate-pulse rounded-xl bg-[#ffffff1a]" />
               <div className="h-[62px] animate-pulse rounded-xl bg-[#ffffff1a]" />
               <div className="h-[62px] animate-pulse rounded-xl bg-[#ffffff1a]" />
               <div className="h-[62px] animate-pulse rounded-xl bg-[#ffffff1a]" />
               <div className="h-[62px] animate-pulse rounded-xl bg-[#ffffff1a]" />
            </div>
         ) : (
            <div className="mt-10 flex flex-col gap-2 font-poppinsRegular">
               {infoData?.access?.home && (
                  <Link
                     href="/admin-panel/home"
                     className={`flex items-center gap-2 rounded-xl border border-solid border-transparent
                px-4 py-[18px] transition-all duration-200 hover:border-[#ffffff59] hover:bg-[#ffffff1a] hover:text-white ${
                   pathname === '/admin-panel/home' ? '!border-[#ffffff59] bg-[#ffffff1a]' : 'text-[#ffffff4d]'
                }`}
                  >
                     <HiMiniHome size="24px" /> Home
                  </Link>
               )}

               {infoData?.access?.blog && (
                  <Link
                     href="/admin-panel/blog"
                     className={`flex items-center gap-2 rounded-xl border border-solid border-transparent
                px-4 py-[18px] transition-all duration-200 hover:border-[#ffffff59] hover:bg-[#ffffff1a] hover:text-white ${
                   pathname === '/admin-panel/blog' ? '!border-[#ffffff59] bg-[#ffffff1a]' : 'text-[#ffffff4d]'
                }`}
                  >
                     <PiNotepadFill size="24px" /> Blog
                  </Link>
               )}

               {infoData?.access?.page && (
                  <Link
                     href="/admin-panel/page-edit"
                     className={`flex items-center gap-2 rounded-xl border border-solid border-transparent
                px-4 py-[18px] transition-all duration-200 hover:border-[#ffffff59] hover:bg-[#ffffff1a] hover:text-white ${
                   pathname === '/admin-panel/page-edit' ? '!border-[#ffffff59] bg-[#ffffff1a]' : 'text-[#ffffff4d]'
                }`}
                  >
                     <LiaPagerSolid size="24px" /> Page edit
                  </Link>
               )}

               {infoData?.access?.admin && (
                  <Link
                     href="/admin-panel/admin"
                     className={`flex items-center gap-2 rounded-xl border border-solid border-transparent
                px-4 py-[18px] transition-all duration-200 hover:border-[#ffffff59] hover:bg-[#ffffff1a] hover:text-white ${
                   pathname === '/admin-panel/admin' ? '!border-[#ffffff59] bg-[#ffffff1a]' : 'text-[#ffffff4d]'
                }`}
                  >
                     <RiShieldUserFill size="24px" /> Admin
                  </Link>
               )}
               <Link
                  href="/admin-panel/security"
                  className={`flex items-center gap-2 rounded-xl border border-solid border-transparent
               px-4 py-[18px] transition-all duration-200 hover:border-[#ffffff59] hover:bg-[#ffffff1a] hover:text-white ${
                  pathname === '/admin-panel/security' ? '!border-[#ffffff59] bg-[#ffffff1a]' : 'text-[#ffffff4d]'
               }`}
               >
                  <BsShieldFillCheck size="24px" /> Security
               </Link>

               {infoData?.access?.ticket && (
                  <Link
                     href="/admin-panel/tickets"
                     className={`relative flex items-center gap-2 rounded-xl border border-solid border-transparent
               px-4 py-[18px] transition-all duration-200 hover:border-[#ffffff59] hover:bg-[#ffffff1a] hover:text-white ${
                  pathname === '/admin-panel/tickets' ? '!border-[#ffffff59] bg-[#ffffff1a]' : 'text-[#ffffff4d]'
               }`}
                  >
                     <BiSolidMessageDetail size="24px" /> Tickets
                     {ticketsData?.has_new_ticket && (
                        <div className="absolute right-4 flex size-8 items-center justify-center rounded-full bg-[#F23645] text-sm text-white">
                           {ticketsData?.new_ticket_count}
                        </div>
                     )}
                  </Link>
               )}

               {infoData?.access?.others && (
                  <Link
                     href="/admin-panel/others"
                     className={`flex items-center gap-2 rounded-xl border border-solid border-transparent
               px-4 py-[18px] transition-all duration-200 hover:border-[#ffffff59] hover:bg-[#ffffff1a] hover:text-white ${
                  pathname === '/admin-panel/others' ? '!border-[#ffffff59] bg-[#ffffff1a]' : 'text-[#ffffff4d]'
               }`}
                  >
                     <PiCirclesThreeFill size="24px" /> Others
                  </Link>
               )}
            </div>
         )}

         <div className="mt-[61px]">
            <Button
               className="font-poppinsRegular"
               sx={{
                  fontSize: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f236451a',
                  color: '#F23645',
                  ':hover': {
                     backgroundColor: '#f2364533',
                     color: '#ee6f79',
                  },
               }}
               fullWidth
               onClick={() => setShowLogoutModal(true)}
            >
               <div className="flex w-full items-center gap-2 px-4 py-[18px]">
                  <IoLogOut className="rotate-180" size="24px" /> Log Out
               </div>
            </Button>
         </div>

         <LogoutModal show={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
      </aside>
   );
}

export default AdminSideBar;
