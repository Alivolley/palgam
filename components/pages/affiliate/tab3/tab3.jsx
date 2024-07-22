import { useEffect, useRef, useState } from 'react';

// Assets
import Image from 'next/image';
import Tab3Style from './tab3.style';
import tab3Icon1 from '@/assets/images/affiliate/tab3Icon1.png';
import tab3Icon2 from '@/assets/images/affiliate/tab3Icon2.png';
import tab3Icon3 from '@/assets/images/affiliate/tab3Icon3.png';
import tab3Icon4 from '@/assets/images/affiliate/tab3Icon4.png';
import tab3Icon5 from '@/assets/images/affiliate/tab3Icon5.png';
import tab3Icon6 from '@/assets/images/affiliate/tab3Icon6.png';
import tab3Icon7 from '@/assets/images/affiliate/tab3Icon7.png';
import tab3Icon8 from '@/assets/images/affiliate/tab3Icon8.png';
import tab3Icon9 from '@/assets/images/affiliate/tab3Icon9.png';
import tab3Icon10 from '@/assets/images/affiliate/tab3Icon10.png';
import tab3Icon11 from '@/assets/images/affiliate/tab3Icon11.png';

function Tab3({ affiliateData }) {
   const [activeAnimation, setActiveAnimation] = useState(false);
   const wrapperRef = useRef(null);

   useEffect(() => {
      const options = {
         root: null,
         rootMargin: '0px',
         threshold: 1,
      };

      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               setActiveAnimation(true);
            } else {
               setActiveAnimation(false);
            }
         });
      }, options);

      if (wrapperRef.current) {
         observer.observe(wrapperRef.current);
      }

      return () => {
         if (wrapperRef.current) {
            observer.unobserve(wrapperRef.current);
         }
      };
   }, []);

   return (
      <Tab3Style
         className="relative -mb-12 overflow-hidden px-4 pb-12 pt-14 customMd:px-20"
         activeAnimation={activeAnimation}
      >
         <div>
            <p
               className="mx-auto mb-12 w-fit rounded-2xl bg-[#ffffff1a] px-6 py-2 text-center font-poppinsLight text-xs
                   leading-[24px] text-white backdrop-blur-[12px] customMd:text-[18px] customMd:leading-[32px]"
            >
               {affiliateData?.data?.section4?.label}
            </p>
            <p className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
               {affiliateData?.data?.section4?.title}
            </p>
            <p className="text-center font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
               {affiliateData?.data?.section4?.description}
            </p>
         </div>

         <div className="relative mt-[88px] h-[684px] rounded-[32px] border border-solid border-[#ffffff26] p-10 pl-0 customLg:h-[615px] customLg:pl-10">
            <div
               style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
               className="absolute inset-x-0 top-[-50%] h-[523px] opacity-[0.15] blur-[200px]"
            />

            <div
               style={{ background: 'linear-gradient(180deg, #19C295 0%, #87F2FC 100%)' }}
               className="absolute inset-x-0 bottom-[-70%] h-[523px] opacity-[0.1] blur-[200px]"
            />
            <div className="relative h-full" id="wrapper">
               <div className="absolute left-[11px] top-[120px] flex flex-col items-center customLg:left-1/2 customLg:-translate-x-1/2">
                  <div className="flex size-[34px] items-center justify-center rounded-full border border-solid border-white bg-[#ffffff26] customLg:size-11">
                     <div className="size-[10px] rounded-full bg-white customLg:size-3" />
                  </div>
                  <div className="h-[700px] w-px bg-white customLg:h-[370px]" />
                  <div className="flex size-[34px] items-center justify-center rounded-full border border-solid border-white bg-[#ffffff26] customLg:size-11">
                     <div className="size-[10px] rounded-full bg-white customLg:size-3" />
                  </div>
                  <div className="h-[800px] w-px bg-white customLg:h-[280px]" />
                  <div className="flex size-[34px] items-center justify-center rounded-full border border-solid border-white bg-[#ffffff26] customLg:size-11">
                     <div className="size-[10px] rounded-full bg-white customLg:size-3" />
                  </div>
               </div>
               <div
                  className="flex flex-col items-center gap-[60px] pl-[72px] customLg:flex-row customLg:gap-[120px] customLg:pl-0"
                  id="wrapperBlock"
               >
                  <div className="mt-[59px] flex-1 customLg:text-center">
                     <p
                        className="font-poppinsExtraBold text-[32px] leading-[48px] text-white customMd:text-[40px] customMd:leading-[64px]"
                        id="blockText"
                     >
                        {affiliateData?.data?.section4?.block1?.title}
                     </p>
                     <p className="font-poppinsLight text-xs leading-[24px] text-[#ffffffb3] customMd:text-[18px] customMd:leading-[32px]">
                        {affiliateData?.data?.section4?.block1?.description}
                     </p>
                  </div>

                  <div className="flex-1">
                     <div className="flex items-center justify-between gap-2">
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                           style={{ animationDelay: `${Math.random() * 10}s` }}
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon1} alt="icon" className="size-full" />
                           </div>
                        </div>
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon2} alt="icon" className="size-full" />
                           </div>
                        </div>
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                           style={{ animationDelay: `${Math.random() * 10}s` }}
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon3} alt="icon" className="size-full" />
                           </div>
                        </div>
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon4} alt="icon" className="size-full" />
                           </div>
                        </div>
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                           style={{ animationDelay: `${Math.random() * 10}s` }}
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon5} alt="icon" className="size-full" />
                           </div>
                        </div>
                     </div>
                     <div className="mt-8 flex items-center justify-between gap-2">
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon6} alt="icon" className="size-full" />
                           </div>
                        </div>
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                           style={{ animationDelay: `${Math.random() * 10}s` }}
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon7} alt="icon" className="size-full" />
                           </div>
                        </div>
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon8} alt="icon" className="size-full" />
                           </div>
                        </div>
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                           style={{ animationDelay: `${Math.random() * 10}s` }}
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon9} alt="icon" className="size-full" />
                           </div>
                        </div>
                        <div
                           className="flex size-[48px] items-center justify-center rounded-2xl bg-[#8c72e24d] customMd:size-[88px]"
                           id="iconBlock"
                        >
                           <div className="size-8 customMd:size-14">
                              <Image src={tab3Icon10} alt="icon" className="size-full" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div
                  className="mt-[160px] flex flex-col-reverse gap-0 pl-[72px] customLg:flex-row customLg:items-center customLg:gap-[120px] customLg:pl-0"
                  id="wrapperBlock"
               >
                  <div
                     className="mb-[30px] mt-[-60px] flex flex-1 items-center justify-center customLg:mt-0"
                     ref={wrapperRef}
                  >
                     <div className="rounded-[200px] p-5" id="shadow1">
                        <div className="rounded-[200px] p-5" id="shadow2">
                           <div className="rounded-[200px] p-5" id="shadow3">
                              <div className="rounded-[200px] p-5" id="shadow4">
                                 <div className="rounded-[200px] p-5" id="shadow5">
                                    <div
                                       className="rounded-[200px] px-6 py-[64px] customLg:px-[84px] customLg:py-6"
                                       id="shadow6"
                                    >
                                       <div className="size-[72px]">
                                          <Image src={tab3Icon11} alt="icon" className="size-full" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="mb-[84px] flex-1 customMd:text-center">
                     <p
                        className="font-poppinsExtraBold text-[32px] leading-[48px] text-white customMd:text-[40px] customMd:leading-[64px]"
                        id="blockText"
                     >
                        {affiliateData?.data?.section4?.block2?.title}
                     </p>
                     <p className="font-poppinsLight text-xs leading-[24px] text-[#ffffffb3] customMd:text-[18px] customMd:leading-[32px]">
                        {affiliateData?.data?.section4?.block2?.description}
                     </p>
                  </div>
               </div>

               <div
                  className="gap-[120px] py-16 pl-[72px] text-white customLg:mt-[120px] customLg:pl-0"
                  id="wrapperBlock"
               >
                  <p className="font-poppinsExtraBold text-[32px] leading-[48px] customLg:text-center customLg:text-[40px] customLg:leading-[64px]">
                     {affiliateData?.data?.section4?.block3?.title}
                  </p>
                  <div className="mt-16 space-y-8 font-poppinsBold text-xl customLg:text-2xl">
                     <p>{affiliateData?.data?.section4?.block3?.line1}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line2}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line3}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line4}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line5}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line6}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line7}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line8}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line9}</p>
                     <p>{affiliateData?.data?.section4?.block3?.line10}</p>
                  </div>
               </div>
            </div>
         </div>
      </Tab3Style>
   );
}

export default Tab3;
