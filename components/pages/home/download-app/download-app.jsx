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

function DownloadApp() {
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   return (
      <DownloadAppStyle className="relative mt-[150px] overflow-hidden px-4 customMd:px-20">
         <div>
            <div className="relative h-[640px] w-full overflow-hidden customMd:h-[488px]">
               <Image
                  src={isDesktop ? downloadAppDesktop : downloadAppMobile}
                  alt="desktop"
                  className="size-full rounded-3xl object-cover"
               />

               <div className="absolute inset-0 z-[1] h-[488px] w-screen" id="vector">
                  <Image src={downloadAppVectorBackground} alt="vector" className="size-full object-cover" />
               </div>
            </div>

            <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-4">
               <p
                  className="rounded-2xl bg-[#ffffff1a] px-6 py-2 text-center font-poppinsExtraLight text-xs
                   leading-[24px] text-white backdrop-blur-[12px] customMd:text-[18px] customMd:leading-[32px]"
               >
                  What are you waiting for?
               </p>
               <div className="mt-6 text-center font-arimaBold text-[44px] leading-[50px] text-white customMd:text-[72px] customMd:leading-[80px]">
                  <p>Are You Ready?</p>
                  <p>Download Palgam Now!</p>
               </div>

               <div className="mt-4 flex flex-col items-center justify-center gap-4 customMd:flex-row customMd:gap-6">
                  <Button className="h-[72px] w-[191px] overflow-hidden !rounded-2xl bg-[#ffffff1a] !text-white backdrop-blur-[12px] customMd:h-[80px] customMd:w-[240px]">
                     <div className="flex size-full items-center justify-center gap-4" id="btnApp">
                        <div className="size-[32px] lg:size-[34px]">
                           <Image src={appleLogo} alt="app store" className="size-full" />
                        </div>
                        <div className="flex flex-col items-start transition-all duration-200" id="wrapper">
                           <p
                              className="font-poppinsExtraLight text-10 transition-all duration-200 lg:text-xs"
                              id="firstLine"
                           >
                              Download on the
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
                  <Button className="h-[72px] w-[191px] overflow-hidden !rounded-2xl bg-[#ffffff1a] !text-white backdrop-blur-[12px] customMd:h-[80px] customMd:w-[240px]">
                     <div className="flex size-full items-center justify-center gap-4" id="btnApp">
                        <div className="size-[32px] lg:size-[34px]">
                           <Image src={googlePlayLogo} alt="google play" className="size-full" />
                        </div>
                        <div className="flex flex-col items-start transition-all duration-200" id="wrapper">
                           <p
                              className="font-poppinsExtraLight text-10 transition-all duration-200 lg:text-xs"
                              id="firstLine"
                           >
                              Get In On
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
      </DownloadAppStyle>
   );
}

export default DownloadApp;
