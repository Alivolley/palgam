/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import homeBannerGradientPic from '@/assets/images/homeBannerGradient.png';
import appleLogo from '@/assets/icons/appleLogo.svg';
import googlePlayLogo from '@/assets/icons/googlePlayLogo.svg';

// Style
import HomeBannerStyle from './home-banner.style';

// Components
import AppStoreModal from '@/components/templates/app-store-modal/app-store-modal';

// Apis
import useGetStoreLink from '@/apis/adminPanel/home/useGetStoreLink';

function HomeBanner({ homePageData }) {
   const [showAppStoreModal, setShowAppStoreModal] = useState(false);

   const { data: storeLinkData } = useGetStoreLink();

   const video1Ref = useRef();
   const video2Ref = useRef();

   useEffect(() => {
      if (video1Ref.current) {
         video1Ref.current.play();
      }
      if (video2Ref.current) {
         video2Ref.current.play();
      }
   }, [video1Ref, video2Ref]);

   const downloadGoogleHandler = () => {
      window.location.href = storeLinkData?.google_play_link;
   };

   return (
      <HomeBannerStyle className="relative overflow-hidden customMd:overflow-visible lg:ps-20">
         <div className="relative z-[2] flex flex-col justify-between lg:flex-row">
            <div className="relative z-[3] mt-[140px] px-4 lg:mt-[241px] lg:max-w-[578px] lg:px-0">
               <div
                  className="absolute left-[-50%] top-0 h-[524px] w-[436px] rounded-[524px] opacity-[0.4] blur-[150px] customMd:hidden"
                  style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
               />
               <h1
                  className="text-center font-arimaExtraLight text-[40px] leading-[56px] text-white lg:text-start lg:text-[72px] lg:leading-[88px]"
                  data-aos="fade-up"
               >
                  <span className="font-arimaBold" id="palgamWord">
                     PALGAM
                  </span>{' '}
                  <span className="font-arimaBold">{homePageData?.data?.section1?.title}</span>
               </h1>
               <pre
                  className="mt-4 whitespace-pre-line text-center font-poppinsThin text-sm leading-[24px] text-white lg:text-start lg:text-[18px] lg:leading-[32px]"
                  data-aos="zoom-in"
                  data-aos-delay="300"
               >
                  {homePageData?.data?.section1?.description}
               </pre>
               <div
                  className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-offset="-100"
               >
                  <Button
                     className="h-[72px] w-[191px] overflow-hidden !rounded-2xl !border !border-solid !border-[#ffffff80]
                    !text-white customMd:h-[80px] customMd:w-[240px]"
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
                  <Button
                     className="h-[72px] w-[191px] overflow-hidden !rounded-2xl !border !border-solid !border-[#ffffff80]
                    !text-white customMd:h-[80px] customMd:w-[240px]"
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
            <div className="relative lg:hidden">
               <video
                  src="/video1.mp4"
                  className="size-full object-cover customLg:object-contain"
                  loop
                  muted
                  ref={video1Ref}
               />

               <div
                  className="absolute inset-0"
                  style={{
                     background: 'linear-gradient(1deg, #080609 0.52%, rgba(8, 6, 9, 0.20) 51.01%, #080609 99.53%)',
                  }}
               />
            </div>
            <div
               data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="900"
               className="relative hidden lg:block customXl:min-w-[800px] customXl:max-w-[880px]"
            >
               {/* <Image src={homeBannerPic} alt="homeBanner" className="size-full object-cover customLg:object-contain" /> */}

               <video
                  src="/video2.mp4"
                  className="size-full object-cover customLg:object-contain"
                  loop
                  muted
                  ref={video2Ref}
               />

               <div
                  className="absolute inset-0"
                  style={{
                     background: 'linear-gradient(271deg, rgba(8, 6, 9, 0.00) 0.83%, #080609 99.32%)',
                  }}
               />
               <div
                  className="absolute inset-x-0 bottom-0 h-[260px]"
                  style={{
                     background:
                        'linear-gradient(180deg, rgba(10, 8, 11, 0.00) 0%, rgba(10, 8, 11, 0.90) 63%, #0A080B 100%)',
                  }}
               />
            </div>
         </div>
         <Image
            src={homeBannerGradientPic}
            alt="gradient"
            className="absolute left-0 top-0 z-[1] hidden customMd:block"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1000"
         />

         <AppStoreModal open={showAppStoreModal} onClose={() => setShowAppStoreModal(false)} />
      </HomeBannerStyle>
   );
}

export default HomeBanner;
