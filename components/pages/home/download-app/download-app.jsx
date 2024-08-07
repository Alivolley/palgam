import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Button, useMediaQuery } from '@mui/material';

// Assets
import DownloadAppStyle from './download-app.style';
import downloadAppMobile from '@/assets/images/downloadAppMobile.png';
import downloadAppVectorBackground from '@/assets/images/downloadAppVectorBackground.png';
import downloadAppDesktop from '@/assets/images/downloadAppDesktop.png';
import appleLogo from '@/assets/icons/appleLogo.svg';
import googlePlayLogo from '@/assets/icons/googlePlayLogo.svg';

// Components
import AppStoreModal from '@/components/templates/app-store-modal/app-store-modal';

// Apis
import useGetStoreLink from '@/apis/adminPanel/home/useGetStoreLink';

function DownloadApp({ homePageData }) {
   const [showAppStoreModal, setShowAppStoreModal] = useState(false);

   const { data: storeLinkData } = useGetStoreLink();

   const t = useTranslations('home');
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   const downloadGoogleHandler = () => {
      window.location.href = storeLinkData?.google_play_link;
   };

   return (
      <DownloadAppStyle className="relative mt-[30px] overflow-hidden px-4 customMd:px-20">
         <div>
            <div className="relative h-[640px] w-full overflow-hidden customMd:h-[488px]">
               <Image
                  src={isDesktop ? downloadAppDesktop : downloadAppMobile}
                  alt="desktop"
                  className="size-full rounded-3xl object-cover"
               />

               <div className="absolute inset-0 z-[1] h-[488px] w-screen scale-[1.8]" id="vector">
                  <Image src={downloadAppVectorBackground} alt="vector" className="size-full object-cover" />
               </div>
            </div>

            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-4">
               <p
                  className="rounded-2xl bg-[#ffffff1a] px-6 py-2 text-center font-poppinsExtraLight text-xs
                   leading-[24px] text-white backdrop-blur-[12px] customMd:text-[18px] customMd:leading-[32px]"
               >
                  {homePageData?.data?.section7?.label}
               </p>
               <pre className="mt-6 whitespace-pre-line text-center font-arimaBold text-[44px] leading-[50px] text-white customMd:text-[72px] customMd:leading-[80px]">
                  {homePageData?.data?.section7?.title}
               </pre>

               <div className="mt-4 flex flex-col items-center justify-center gap-4 customMd:flex-row customMd:gap-6">
                  <Button
                     className="h-[72px] w-[191px] overflow-hidden !rounded-2xl bg-[#ffffff1a]
                   !text-white backdrop-blur-[12px] customMd:h-[80px] customMd:w-[240px]"
                     onClick={() => setShowAppStoreModal(true)}
                  >
                     <div className="flex size-full items-center justify-center gap-4" id="btnApp">
                        <div className="size-[32px] lg:size-[34px]">
                           <Image src={appleLogo} alt="app store" className="size-full" />
                        </div>
                        <div className="flex flex-col items-start transition-all duration-200" id="wrapper">
                           <p
                              className="font-poppinsExtraLight text-10 transition-all duration-200 lg:text-xs"
                              id="firstLine"
                           >
                              {t('Download on')}
                           </p>
                           <p
                              className="font-poppinsBold text-sm leading-6 transition-all duration-200 lg:text-[18px]"
                              id="secondLine"
                           >
                              App Store
                           </p>
                        </div>
                     </div>
                  </Button>
                  <Button
                     className="h-[72px] w-[191px] overflow-hidden !rounded-2xl bg-[#ffffff1a] !text-white backdrop-blur-[12px] customMd:h-[80px] customMd:w-[240px]"
                     onClick={downloadGoogleHandler}
                  >
                     <div className="flex size-full items-center justify-center gap-4" id="btnApp">
                        <div className="size-[32px] lg:size-[34px]">
                           <Image src={googlePlayLogo} alt="google play" className="size-full" />
                        </div>
                        <div className="flex flex-col items-start transition-all duration-200" id="wrapper">
                           <p
                              className="font-poppinsExtraLight text-10 transition-all duration-200 lg:text-xs"
                              id="firstLine"
                           >
                              {t('Download on')}
                           </p>
                           <p
                              className="font-poppinsBold text-sm leading-6 transition-all duration-200 lg:text-[18px]"
                              id="secondLine"
                           >
                              Google Play
                           </p>
                        </div>
                     </div>
                  </Button>
               </div>
            </div>
         </div>
         <AppStoreModal open={showAppStoreModal} onClose={() => setShowAppStoreModal(false)} />
      </DownloadAppStyle>
   );
}

export default DownloadApp;
