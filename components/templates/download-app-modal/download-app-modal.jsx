import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button, Drawer, useMediaQuery } from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';

// Styles
import DownloadAppModalStyle from './download-app-modal.style';

// Assets
import googlePlayPic from '@/assets/images/GooglePlayPic.png';
import appStorePic from '@/assets/images/appStorePic.png';
import googlePlayPicDesktop from '@/assets/images/GooglePlayPicDesktop.png';
import appStorePicDesktop from '@/assets/images/appStorePicDesktop.png';
import AppStoreModal from '../app-store-modal/app-store-modal';

function DownloadAppModal({ open, onClose }) {
   const [showAppStoreModal, setShowAppStoreModal] = useState(false);

   const isDesktop = useMediaQuery(`(min-width: 500px)`);

   return (
      <Drawer
         anchor="bottom"
         open={open}
         onClose={onClose}
         sx={{
            '.MuiPaper-root': { backgroundColor: 'transparent' },
            '.MuiBackdrop-root': { backgroundColor: 'transparent' },
         }}
      >
         <DownloadAppModalStyle
            className="flex max-h-screen min-h-screen flex-col items-center justify-center
          overflow-auto bg-[#00000099] p-[16px] backdrop-blur-[12px]"
         >
            <div className="fixed right-8 top-8">
               <Button className="rounded-full" onClick={onClose}>
                  <IoIosCloseCircleOutline fontSize="32px" color="white" />
               </Button>
            </div>
            <div className="w-full max-w-[600px]">
               <div className="flex h-[136px] items-start justify-end rounded-t-3xl" id="header">
                  <Button className="mr-4 mt-4 hidden rounded-full customMd:flex" onClick={onClose}>
                     <IoIosCloseCircleOutline fontSize="32px" color="white" />
                  </Button>
               </div>
               <div className="flex h-[266px] w-full gap-4 rounded-b-3xl bg-[#070508] px-4 pb-4 pt-6 custom500:gap-6 custom500:px-8">
                  <div className="flex-1 rounded-2xl bg-[#ffffff0a] p-2">
                     <div className="h-[152px] custom500:h-[160px]">
                        <Image
                           src={isDesktop ? googlePlayPicDesktop : googlePlayPic}
                           alt="google play"
                           className="size-full rounded-xl object-cover"
                        />
                     </div>
                     <Button
                        fullWidth
                        className="mt-[10px] h-[48px] !rounded-xl !border !border-solid !border-[#ffffff80] !font-poppinsRegular text-xs !text-white custom500:text-sm"
                     >
                        Download
                     </Button>
                  </div>
                  <div className="flex-1 rounded-2xl bg-[#ffffff0a] p-2">
                     <div className="h-[152px] custom500:h-[160px]">
                        <Image
                           src={isDesktop ? appStorePicDesktop : appStorePic}
                           alt="app store"
                           className="size-full rounded-xl object-cover"
                        />
                     </div>
                     <Button
                        fullWidth
                        className="mt-[10px] h-[48px] !rounded-xl !border !border-solid !border-[#ffffff80] !font-poppinsRegular text-xs !text-white custom500:text-sm"
                        onClick={() => setShowAppStoreModal(true)}
                     >
                        Download
                     </Button>
                  </div>
               </div>
            </div>
         </DownloadAppModalStyle>
         <AppStoreModal open={showAppStoreModal} onClose={() => setShowAppStoreModal(false)} />
      </Drawer>
   );
}

export default DownloadAppModal;
