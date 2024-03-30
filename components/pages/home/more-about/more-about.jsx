import { useRef } from 'react';
import Image from 'next/image';

// Assets
import MoreAboutStyle from './more-about.style';
import moreAboutPic from '@/assets/images/moreAboutPic.png';
import moreAboutPic1 from '@/assets/images/moreAboutPic1.png';
import moreAboutPic2 from '@/assets/images/moreAboutPic2.png';
import moreAboutPic3 from '@/assets/images/moreAboutPic3.png';
import moreAboutPic4 from '@/assets/images/moreAboutPic4.png';
import moreAboutPic5 from '@/assets/images/moreAboutPic5.png';

function MoreAbout({ homePageData }) {
   const wrapperRef = useRef();
   const cart1Ref = useRef();
   const cart2Ref = useRef();
   const cart3Ref = useRef();
   const cart4Ref = useRef();
   const cart5Ref = useRef();

   const pauseAnimation = () => {
      wrapperRef.current.style.animationPlayState = 'paused';
      cart1Ref.current.style.animationPlayState = 'paused';
      cart2Ref.current.style.animationPlayState = 'paused';
      cart3Ref.current.style.animationPlayState = 'paused';
      cart4Ref.current.style.animationPlayState = 'paused';
      cart5Ref.current.style.animationPlayState = 'paused';
   };

   const playAnimation = () => {
      wrapperRef.current.style.animationPlayState = 'running';
      cart1Ref.current.style.animationPlayState = 'running';
      cart2Ref.current.style.animationPlayState = 'running';
      cart3Ref.current.style.animationPlayState = 'running';
      cart4Ref.current.style.animationPlayState = 'running';
      cart5Ref.current.style.animationPlayState = 'running';
   };

   return (
      <MoreAboutStyle
         className="relative mt-40 h-[805px] overflow-hidden"
         onMouseDown={pauseAnimation}
         onTouchStart={pauseAnimation}
         onMouseUp={playAnimation}
         onTouchEnd={playAnimation}
      >
         <div className="absolute inset-0" id="line">
            <Image src={moreAboutPic} alt="line" className="size-full scale-[2] object-cover" />
         </div>
         <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(9, 7, 10, 0.00) 0%, #09070A 100%)' }}
         />

         <div className="flex size-full items-center justify-center">
            <div className="size-[306px] rounded-[306px] bg-[#0A080B] opacity-[0.7] blur-[120px]" />
         </div>

         <div className="absolute inset-0">
            <div className="flex size-full flex-col items-center justify-center">
               <p className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
                  {homePageData?.data?.section4?.title}
               </p>
               <pre className="max-w-[892px] whitespace-pre-line text-center font-poppinsLight text-xs leading-[24px] text-[#ffffffb3] customMd:text-[18px] customMd:leading-[32px]">
                  {homePageData?.data?.section4?.description}
               </pre>
            </div>
         </div>

         <div
            className="absolute inset-x-0 flex flex-col gap-10 px-4 customMd:gap-0 customMd:px-[173px]"
            id="wrapper"
            ref={wrapperRef}
         >
            <div
               className="flex w-fit flex-col items-center rounded-[32px] bg-[#ffffff1a] p-4 backdrop-blur-[13.7px] transition-all duration-700"
               id="cart1"
               ref={cart1Ref}
            >
               <div className="mb-6 h-[200px] w-[336px] customMd:w-[440px]">
                  <Image src={moreAboutPic2} alt="cart" className="size-full rounded-[28px] object-cover" />
               </div>
               <p className="mb-1 font-poppinsExtraBold text-xl leading-7 text-white customMd:text-2xl customMd:leading-8">
                  Backgammon
               </p>
               <p className="font-poppinsExtraLight text-xs leading-6 text-[#ffffff99] customMd:text-[18px] customMd:leading-8">
                  Master the Board!
               </p>
            </div>

            <div
               className="flex w-fit flex-col items-center rounded-[32px] bg-[#ffffff1a] p-4 backdrop-blur-[13.7px] transition-all duration-700 customMd:ml-auto"
               id="cart2"
               ref={cart2Ref}
            >
               <div className="mb-6 h-[472px] w-[218px] customMd:h-[544px] customMd:w-[256px]">
                  <Image src={moreAboutPic3} alt="cart" className="size-full rounded-[28px] object-cover" />
               </div>
               <p className="mb-1 font-poppinsExtraBold text-xl leading-7 text-white customMd:text-2xl customMd:leading-8">
                  Table Soccer
               </p>
               <p className="font-poppinsExtraLight text-xs leading-6 text-[#ffffff99] customMd:text-[18px] customMd:leading-8">
                  Play Safe or Risk It All?
               </p>
            </div>

            <div
               className="flex w-fit flex-col items-center rounded-[32px] bg-[#ffffff1a] p-4 backdrop-blur-[13.7px] transition-all duration-700"
               id="cart4"
               ref={cart4Ref}
            >
               <div className="mb-6 h-[200px] w-[336px] customMd:w-[440px]">
                  <Image src={moreAboutPic4} alt="cart" className="size-full rounded-[28px] object-cover" />
               </div>
               <p className="mb-1 font-poppinsExtraBold text-xl leading-7 text-white customMd:text-2xl customMd:leading-8">
                  8 Ball
               </p>
               <p className="font-poppinsExtraLight text-xs leading-6 text-[#ffffff99] customMd:text-[18px] customMd:leading-8">
                  Break Hard, Clear Fast!
               </p>
            </div>

            <div
               className="flex w-fit flex-col items-center rounded-[32px] bg-[#ffffff1a] p-4 backdrop-blur-[13.7px] transition-all duration-700 customMd:ml-auto"
               id="cart3"
               ref={cart3Ref}
            >
               <div className="mb-6 h-[472px] w-[218px] customMd:h-[544px] customMd:w-[256px]">
                  <Image src={moreAboutPic5} alt="cart" className="size-full rounded-[28px] object-cover" />
               </div>
               <p className="mb-1 font-poppinsExtraBold text-xl leading-7 text-white customMd:text-2xl customMd:leading-8">
                  Hokm
               </p>
               <p className="font-poppinsExtraLight text-xs leading-6 text-[#ffffff99] customMd:text-[18px] customMd:leading-8">
                  Fold? Nah, Go All-In!
               </p>
            </div>

            <div
               className="flex w-fit flex-col items-center rounded-[32px] bg-[#ffffff1a] p-4 backdrop-blur-[13.7px] transition-all duration-700"
               id="cart5"
               ref={cart5Ref}
            >
               <div className="mb-6 h-[200px] w-[336px] customMd:w-[440px]">
                  <Image src={moreAboutPic1} alt="cart" className="size-full rounded-[28px] object-cover" />
               </div>
               <p className="mb-1 font-poppinsExtraBold text-xl leading-7 text-white customMd:text-2xl customMd:leading-8">
                  8 Ball
               </p>
               <p className="font-poppinsExtraLight text-xs leading-6 text-[#ffffff99] customMd:text-[18px] customMd:leading-8">
                  Break Hard, Clear Fast!
               </p>
            </div>
         </div>
      </MoreAboutStyle>
   );
}

export default MoreAbout;
