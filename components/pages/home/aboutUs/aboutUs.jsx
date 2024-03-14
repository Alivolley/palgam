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

function AboutUs() {
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
               AboutUs
            </p>
            <p className="font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
               At Palgam, we deeply value every member of our gaming community, setting our sights on delivering the
               best blockchain-based mobile gaming experience. We take pride in every player s victory, driven by a
               commitment to make cryptocurrency earnings accessible to all players.
            </p>
         </div>
         <div className="mt-[120px] flex items-center gap-6">
            <div
               className={`relative overflow-hidden flex items-center justify-center gap-4 rounded-3xl
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
                  <Image src={aboutUsBlock1Icon} alt="icon" className="size-full" />
               </div>
               <div className="hidden customMd:block">
                  <p className="font-poppinsExtraBold text-2xl leading-8 text-white">Our Mission</p>
                  <p className="font-poppinsExtraLight leading-6 text-[#ffffffb3]">Redefine Mobile Gaming</p>
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
                  <p className="font-poppinsExtraBold text-2xl leading-8 text-white">Our Vision</p>
                  <p className="font-poppinsExtraLight leading-6 text-[#ffffffb3]">The most played &Trusted</p>
               </div>
            </div>
            <div
               className={`flex relative overflow-hidden items-center justify-center gap-4 rounded-3xl
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
                  <Image src={aboutUsBlock3Icon} alt="icon" className="size-full" />
               </div>
               <div className="hidden customMd:block">
                  <p className="font-poppinsExtraBold text-2xl leading-8 text-white">Our Values</p>
                  <p className="font-poppinsExtraLight leading-6 text-[#ffffffb3]">Transparency $ Security</p>
               </div>
            </div>
         </div>

         <div className="relative mt-[56px]">
            <div
               className={`absolute inset-x-0 top-0 overflow-hidden rounded-3xl bg-[#080609] px-6 py-8 transition-all duration-700 customMd:p-16 ${
                  activeBlock === 3 ? 'visible opacity-100' : 'invisible opacity-0'
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
                  Redefine Mobile Gaming. A Blend of Fun,Earnings, and Trust.
               </p>
               <p className="relative mt-[32px] font-poppinsExtraLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                  At Palgam, our mission is to revolutionize the mobile gamingexperience by seamlessly integrating the
                  play-to-earn modelwith exceptional gameplay and graphics. We re committed toexpanding the horizons of
                  gaming, providing a modern avenuefor not just entertainment, but also additional income. Centralto our
                  mission is the establishment of trust – we aim to be themost reliable and secure platform in the
                  play-to-earn gamingsphere. By continually adding a diverse range of games, resonatingwith various
                  cultural preferences, Palgam is dedicated tobecoming a global household name in mobile gaming –
                  aplatform where fun, earnings, and integrity coexistharmoniously.
               </p>
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
                  most played app of Play-to-Earn Gaming
               </p>
               <p className="relative mt-[32px] font-poppinsExtraLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                  Our vision at Palgam is to lead the evolution of mobile gaming into a universally embraced model of
                  entertainment and earning. We aspire to broaden the scope of gaming experiences, offering players from
                  all cultural backgrounds a platform that not only entertains but also enriches. By innovating and
                  expanding our game portfolio, we aim to cater to a wide array of tastes and preferences, making Palgam
                  synonymous with diverse, high-quality, and trustable mobile gaming worldwide.
               </p>
            </div>
            <div
               className={`absolute inset-x-0 top-0 overflow-hidden rounded-3xl bg-[#080609] px-6 py-8 transition-all duration-700 customMd:p-16 ${
                  activeBlock === 1 ? 'visible opacity-100' : 'invisible opacity-0'
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
                  Lorem Ipsum is simply dummy text of the printing.
               </p>
               <p className="relative mt-[32px] font-poppinsExtraLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum paer took a galley of type and scrambled it to make
                  a typees, and more recently with desktop publishing software like Aldus PageMaker including versions
                  of Lorem Ipsum.
               </p>
            </div>
         </div>
      </AboutUsStyle>
   );
}

export default AboutUs;
