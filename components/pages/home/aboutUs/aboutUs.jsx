import { useEffect, useState } from 'react';
import Image from 'next/image';

// MUI
import { useMediaQuery } from '@mui/material';

// Assets
import AboutUsStyle from './aboutUs.style';
import aboutUsBlock1Icon from '@/assets/images/aboutUsBlock1Icon.png';
import aboutUsBlock2Icon from '@/assets/images/aboutUsBlock2Icon.png';
import aboutUsBlock3Icon from '@/assets/images/aboutUsBlock3Icon.png';
import aboutUsBlock1Background from '@/assets/images/aboutUsBlock1Background.png';
import aboutUsBlock2Background from '@/assets/images/aboutUsBlock2Background.png';
import aboutUsBlock3Background from '@/assets/images/aboutUsBlock3Background.png';
import aboutUsBlock1BackgroundMobile from '@/assets/images/aboutUsBlock1BackgroundMobile.png';
import aboutUsBlock2BackgroundMobile from '@/assets/images/aboutUsBlock2BackgroundMobile.png';
import aboutUsBlock3BackgroundMobile from '@/assets/images/aboutUsBlock3BackgroundMobile.png';
import aboutUsButtonBackground from '@/assets/images/aboutUsButtonBackground.png';

function AboutUs({ homePageData }) {
   const [activeBlock, setActiveBlock] = useState(3);
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   useEffect(() => {
      setInterval(() => {
         setActiveBlock(prev => {
            if (prev === 3) {
               return 1;
            }
            return prev + 1;
         });
      }, 7000);
   }, []);

   return (
      <AboutUsStyle className="relative mt-[150px] overflow-hidden px-4 pb-[850px] pt-[200px] customMd:px-20 customMd:pb-[700px] customMd:pt-[373px]">
         <div className="mx-auto max-w-[880px] text-center">
            <p className="font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
               {homePageData?.data?.section6?.title}
            </p>
            <pre className="whitespace-pre-line font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
               {homePageData?.data?.section6?.description}
            </pre>
         </div>
         <div className="mt-[120px] flex items-center gap-6">
            <div
               className={`relative overflow-hidden flex items-center justify-center gap-4 rounded-3xl
             border border-solid border-[#ffffff80] bg-[#080609] transition-all duration-700 ${
                activeBlock === 1 ? 'h-[120px] flex-[1.3]' : 'h-[104px] flex-1'
             }`}
            >
               <div
                  className={`absolute inset-0 ${
                     activeBlock === 1 ? 'visible translate-x-0 opacity-100' : 'invisible translate-x-[-100%] opacity-0'
                  }`}
                  id="block"
               >
                  <Image src={aboutUsButtonBackground} alt="background" className="size-full object-cover" />
               </div>
               <div className="size-[56px] customMd:size-[48px]">
                  <Image src={aboutUsBlock1Icon} alt="icon" className="size-full" />
               </div>
               <div className="hidden customMd:block">
                  <p className="font-poppinsExtraBold text-2xl leading-8 text-white">
                     {homePageData?.data?.section6?.story1?.boxTitle}
                  </p>
                  <p className="font-poppinsExtraLight leading-6 text-[#ffffffb3]">
                     {homePageData?.data?.section6?.story1?.boxText}
                  </p>
               </div>
            </div>
            <div
               className={`relative flex items-center overflow-hidden justify-center gap-4 rounded-3xl
             border border-solid border-[#ffffff80] bg-[#080609] transition-all duration-700 ${
                activeBlock === 2 ? 'h-[120px] flex-[1.3]' : 'h-[104px] flex-1'
             }`}
            >
               <div
                  className={`absolute inset-0 ${
                     activeBlock === 2 ? 'visible translate-x-0 opacity-100' : 'invisible translate-x-[-100%] opacity-0'
                  }`}
                  id="block"
               >
                  <Image src={aboutUsButtonBackground} alt="background" className="size-full object-cover" />
               </div>
               <div className="size-[56px] customMd:size-[48px]">
                  <Image src={aboutUsBlock2Icon} alt="icon" className="size-full" />
               </div>
               <div className="hidden customMd:block">
                  <p className="font-poppinsExtraBold text-2xl leading-8 text-white">
                     {homePageData?.data?.section6?.story2?.boxTitle}
                  </p>
                  <p className="font-poppinsExtraLight leading-6 text-[#ffffffb3]">
                     {homePageData?.data?.section6?.story2?.boxText}
                  </p>
               </div>
            </div>
            <div
               className={`flex relative overflow-hidden items-center justify-center gap-4 rounded-3xl
             border border-solid border-[#ffffff80] bg-[#080609] transition-all duration-700 ${
                activeBlock === 3 ? 'h-[120px] flex-[1.3]' : 'h-[104px] flex-1'
             }`}
            >
               <div
                  className={`absolute inset-0 ${
                     activeBlock === 3 ? 'visible translate-x-0 opacity-100' : 'invisible translate-x-[-100%] opacity-0'
                  }`}
                  id="block"
               >
                  <Image src={aboutUsButtonBackground} alt="background" className="size-full object-cover" />
               </div>
               <div className="size-[56px] customMd:size-[48px]">
                  <Image src={aboutUsBlock3Icon} alt="icon" className="size-full" />
               </div>
               <div className="hidden customMd:block">
                  <p className="font-poppinsExtraBold text-2xl leading-8 text-white">
                     {homePageData?.data?.section6?.story3?.boxTitle}
                  </p>
                  <p className="font-poppinsExtraLight leading-6 text-[#ffffffb3]">
                     {homePageData?.data?.section6?.story3?.boxText}
                  </p>
               </div>
            </div>
         </div>

         <div className="relative mt-[56px]">
            <div
               className={`absolute inset-x-0 top-0 overflow-hidden rounded-3xl bg-[#080609] px-6 py-8 transition-all duration-700 customMd:p-16 ${
                  activeBlock === 1 ? 'visible opacity-100' : 'invisible opacity-0'
               }`}
            >
               <div className="absolute inset-0">
                  <Image
                     src={isDesktop ? aboutUsBlock1Background : aboutUsBlock1BackgroundMobile}
                     alt="background"
                     className="size-full object-cover object-right-bottom"
                  />
               </div>
               <p className="relative font-arimaBold text-[40px] leading-[56px] text-white customMd:text-[48px] customMd:leading-[70px]">
                  {homePageData?.data?.section6?.story1?.title}
               </p>
               <pre className="relative mt-[32px] whitespace-pre-line font-poppinsExtraLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                  {homePageData?.data?.section6?.story1?.description}
               </pre>
            </div>
            <div
               className={`absolute inset-x-0 top-0 overflow-hidden rounded-3xl bg-[#080609] px-6 py-8 transition-all duration-700 customMd:p-16 ${
                  activeBlock === 2 ? 'visible opacity-100' : 'invisible opacity-0'
               }`}
            >
               <div className="absolute inset-0">
                  <Image
                     src={isDesktop ? aboutUsBlock2Background : aboutUsBlock2BackgroundMobile}
                     alt="background"
                     className="size-full object-cover object-right-bottom"
                  />
               </div>
               <p className="relative font-arimaBold text-[40px] leading-[56px] text-white customMd:text-[48px] customMd:leading-[70px]">
                  {homePageData?.data?.section6?.story2?.title}
               </p>
               <pre className="relative mt-[32px] whitespace-pre-line font-poppinsExtraLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                  {homePageData?.data?.section6?.story2?.description}
               </pre>
            </div>
            <div
               className={`absolute inset-x-0 top-0 overflow-hidden rounded-3xl bg-[#080609] px-6 py-8 transition-all duration-700 customMd:p-16 ${
                  activeBlock === 3 ? 'visible opacity-100' : 'invisible opacity-0'
               }`}
            >
               <div className="absolute inset-0">
                  <Image
                     src={isDesktop ? aboutUsBlock3Background : aboutUsBlock3BackgroundMobile}
                     alt="background"
                     className="size-full object-cover object-right-bottom"
                  />
               </div>
               <p className="relative font-arimaBold text-[40px] leading-[56px] text-white customMd:text-[48px] customMd:leading-[70px]">
                  {homePageData?.data?.section6?.story3?.title}
               </p>
               <pre className="relative mt-[32px] whitespace-pre-line font-poppinsExtraLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                  {homePageData?.data?.section6?.story3?.description}
               </pre>
            </div>
         </div>
      </AboutUsStyle>
   );
}

export default AboutUs;
