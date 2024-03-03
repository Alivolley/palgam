import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Assets
import homeBannerPic from '@/assets/images/homeBannerImage.png';
import homeBannerPicMobile from '@/assets/images/homeBannerGradientMobile.png';
import homeBannerGradientPic from '@/assets/images/homeBannerGradient.png';
import appleLogo from '@/assets/icons/appleLogo.svg';
import googlePlayLogo from '@/assets/icons/googlePlayLogo.svg';

// Style
import HomeBannerStyle from './home-banner.style';

function HomeBanner() {
   return (
      <HomeBannerStyle className="relative overflow-hidden bg-[#080609] lg:ps-20">
         <div className="relative z-[2] flex flex-col justify-between lg:flex-row">
            <div className="mt-[140px] px-4 lg:mt-[241px] lg:max-w-[578px] lg:px-0">
               <h1
                  className="text-center font-arimaExtraLight text-[40px] leading-[56px] text-white lg:text-start lg:text-[72px] lg:leading-[88px]"
                  data-aos="fade-up"
               >
                  <span className="font-arimaBold" id="palgamWord">
                     PALGAM
                  </span>{' '}
                  is the <span className="font-arimaBold">BEST</span> way to{' '}
                  <span className="font-arimaBold">PLAY</span> and <span className="font-arimaBold">EARN MONEY</span>
               </h1>
               <p
                  className="mt-4 text-center font-arimaExtraLight text-sm leading-[24px] text-white lg:text-start lg:text-[18px] lg:leading-[32px]"
                  data-aos="zoom-in"
                  data-aos-delay="300"
               >
                  Palgam in the first the Play to Earn mobile app with its unique blockchain-based gaming system,
                  offering fun, crypto gains & betting against real players, as well as a secure, decentralized
                  financial system, now available on iOS and Android.
               </p>
               <div
                  className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-offset="-100"
               >
                  <Button
                     className="h-[72px] w-[191px] overflow-hidden !rounded-2xl !border !border-solid !border-[#ffffff80]
                    !text-white customMd:h-[80px] customMd:w-[240px]"
                  >
                     <div className="flex size-full items-center justify-center gap-4" id="btnApp">
                        <div className="size-[32px] lg:size-[34px]">
                           <Image src={appleLogo} alt="app store" className="size-full" />
                        </div>
                        <div className="flex flex-col items-start gap-1 transition-all duration-200" id="wrapper">
                           <p className="text-10 transition-all duration-200 lg:text-xs" id="firstLine">
                              Download on the
                           </p>
                           <p
                              className="font-arimaBold text-sm leading-6 transition-all duration-200 lg:text-[18px]"
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
                  >
                     <div className="flex size-full items-center justify-center gap-4" id="btnApp">
                        <div className="size-[32px] lg:size-[34px]">
                           <Image src={googlePlayLogo} alt="google play" className="size-full" />
                        </div>
                        <div className="flex flex-col items-start gap-1 transition-all duration-200" id="wrapper">
                           <p className="text-10 transition-all duration-200 lg:text-xs" id="firstLine">
                              Get In On
                           </p>
                           <p
                              className="font-arimaBold text-sm leading-6 transition-all duration-200 lg:text-[18px]"
                              id="secondLine"
                           >
                              Google Play
                           </p>
                        </div>
                     </div>
                  </Button>
               </div>
            </div>
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" className="lg:hidden">
               <Image
                  src={homeBannerPicMobile}
                  alt="homeBanner"
                  className="size-full object-cover customLg:object-contain"
               />
            </div>
            <div
               data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="900"
               className="hidden lg:block"
            >
               <Image src={homeBannerPic} alt="homeBanner" className="size-full object-cover customLg:object-contain" />
            </div>
         </div>
         <Image
            src={homeBannerGradientPic}
            alt="gradient"
            className="absolute left-0 top-0 z-[1]"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1000"
         />
      </HomeBannerStyle>
   );
}

export default HomeBanner;
