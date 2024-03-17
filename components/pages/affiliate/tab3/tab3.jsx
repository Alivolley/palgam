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

function Tab3() {
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
               Currency and Transactions
            </p>
            <p className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
               Earnings, Profits and Commissions
            </p>
            <p className="text-center font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
               Users balances are calculated in Tether (USDT). Any cryptocurrency or fiat currency deposited is
               converted to Tether. Users can use their balance for play to earn in games.
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
                        How Profits are Calculated?
                     </p>
                     <p className="font-poppinsThin text-xs leading-[24px] text-[#ffffffb3] customMd:text-[18px] customMd:leading-[32px]">
                        Earn a 25% commission, which can increase up to 40% based on conditions, from the profits
                        generated by users who register using your referral code.
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
                        Commission Increase Conditions
                     </p>
                     <p className="font-poppinsThin text-xs leading-[24px] text-[#ffffffb3] customMd:text-[18px] customMd:leading-[32px]">
                        Commission rates increase based on the total wins of referred users, with thresholds at
                        $100,000, $200,000, and $500,000.
                     </p>
                  </div>
               </div>

               <div
                  className="gap-[120px] py-16 pl-[72px] text-white customLg:mt-[120px] customLg:pl-0"
                  id="wrapperBlock"
               >
                  <p className="font-poppinsExtraBold text-[32px] leading-[48px] customLg:text-center customLg:text-[40px] customLg:leading-[64px]">
                     Up To 40% More Profit
                  </p>
                  <div className="mt-16 space-y-8 font-poppinsBold text-xl customLg:text-2xl">
                     <p>Suppose a user registers with your referral code; they are permanently under your referral.</p>
                     <p>
                        You earn 25% of any profit Palgam makes from this user, which can increase to 40% under certain
                        conditions.
                     </p>
                     <p>
                        For example, if a user wins $1000 in the Palgam application, 3% of this money, i.e., $30, is
                        Palgam s profit.
                     </p>
                     <p>
                        But since you introduced this user to Palgam, Palgam shares its profit with you, and 25% of this
                        $30, i.e., $7.5, is added to your account in the application.
                     </p>
                     <p>
                        However, according to conditions written in the smart contract (a transparent, decentralized,
                        and fair contract), your profit can increase up to 40%.
                     </p>
                     <p>The conditions for increasing your commission are as follows:</p>
                     <p>
                        If the total wins of players who have registered with your referral code exceed $100,000, your
                        commission increases to 30%.
                     </p>
                     <p>If the total wins exceed $200,000, your commission increases to 35%.</p>
                  </div>
               </div>
            </div>
         </div>
      </Tab3Style>
   );
}

export default Tab3;
