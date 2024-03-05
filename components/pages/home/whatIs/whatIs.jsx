import Image from 'next/image';

// MUI
import { useMediaQuery } from '@mui/material';

// Assets
import cart1 from '@/assets/images/cards/cart1.png';
import cart2 from '@/assets/images/cards/cart2.png';
import cart3 from '@/assets/images/cards/cart3.png';
import cart4 from '@/assets/images/cards/cart4.png';
import cart5 from '@/assets/images/cards/cart5.png';
import cart6 from '@/assets/images/cards/cart6.png';
import cart7 from '@/assets/images/cards/cart7.png';
import cart8 from '@/assets/images/cards/cart8.png';
import cart9 from '@/assets/images/cards/cart9.png';
import cart10 from '@/assets/images/cards/cart10.png';
import cart11 from '@/assets/images/cards/cart11.png';
import cart12 from '@/assets/images/cards/cart12.png';
import cart13 from '@/assets/images/cards/cart13.png';
import cart14 from '@/assets/images/cards/cart14.png';
import cart15 from '@/assets/images/cards/cart15.png';
import cart16 from '@/assets/images/cards/cart16.png';
import cart17 from '@/assets/images/cards/cart17.png';
import cart18 from '@/assets/images/cards/cart18.png';
import cart19 from '@/assets/images/cards/cart19.png';
import cart20 from '@/assets/images/cards/cart20.png';
import cart21 from '@/assets/images/cards/cart21.png';
import cart22 from '@/assets/images/cards/cart22.png';
import cart23 from '@/assets/images/cards/cart23.png';
import cart24 from '@/assets/images/cards/cart24.png';
import cart25 from '@/assets/images/cards/cart25.png';
import cart26 from '@/assets/images/cards/cart26.png';
import cart27 from '@/assets/images/cards/cart27.png';
import cart28 from '@/assets/images/cards/cart28.png';
import cart29 from '@/assets/images/cards/cart29.png';
import whatIsShadow from '@/assets/images/whatIsShadow.png';

// Style
import WhatIsStyle from './whatIs.style';

// Components
import WhatIsCard from '@/components/templates/whatIs-card/whatIs-card';

function WhatIs() {
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   return (
      <WhatIsStyle className="relative mt-[180px] overflow-hidden customMd:h-[1217px]">
         <div
            className="flex flex-col gap-2 customMd:mt-[-100px] customMd:gap-6"
            data-aos="fade-up"
            {...(isDesktop && { 'data-aos-offset': '700' })}
            data-aos-duration="1000"
         >
            <div id="secondWrapper" className="flex items-center overflow-hidden customMd:hidden">
               <div className="flex items-center" id="carts">
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
               </div>
               <div className="flex items-center" id="carts">
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
               </div>
            </div>
            <div id="firstWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  <WhatIsCard price="50" source={cart1} />
                  <WhatIsCard price="2000" source={cart2} />
                  <WhatIsCard price="5000" source={cart3} />
                  <WhatIsCard price="8" source={cart4} />
                  <WhatIsCard price="105" source={cart5} />
                  <WhatIsCard price="400" source={cart6} />
                  <WhatIsCard price="350" source={cart7} />
                  <WhatIsCard price="70" source={cart8} />
                  <WhatIsCard price="70" source={cart9} />
                  <WhatIsCard price="70" source={cart10} />
               </div>
               <div className="flex items-center" id="carts">
                  <WhatIsCard price="50" source={cart1} />
                  <WhatIsCard price="2000" source={cart2} />
                  <WhatIsCard price="5000" source={cart3} />
                  <WhatIsCard price="8" source={cart4} />
                  <WhatIsCard price="105" source={cart5} />
                  <WhatIsCard price="400" source={cart6} />
                  <WhatIsCard price="350" source={cart7} />
                  <WhatIsCard price="70" source={cart8} />
                  <WhatIsCard price="70" source={cart9} />
                  <WhatIsCard price="70" source={cart10} />
               </div>
            </div>
            <div id="secondWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  <WhatIsCard price="50" source={cart11} />
                  <WhatIsCard price="2000" source={cart12} />
                  <WhatIsCard price="5000" source={cart13} />
                  <WhatIsCard price="8" source={cart14} />
                  <WhatIsCard price="105" source={cart15} />
                  <WhatIsCard price="400" source={cart16} />
                  <WhatIsCard price="350" source={cart17} />
                  <WhatIsCard price="70" source={cart18} />
                  <WhatIsCard price="70" source={cart19} />
                  <WhatIsCard price="70" source={cart20} />
               </div>
               <div className="flex items-center" id="carts">
                  <WhatIsCard price="50" source={cart11} />
                  <WhatIsCard price="2000" source={cart12} />
                  <WhatIsCard price="5000" source={cart13} />
                  <WhatIsCard price="8" source={cart14} />
                  <WhatIsCard price="105" source={cart15} />
                  <WhatIsCard price="400" source={cart16} />
                  <WhatIsCard price="350" source={cart17} />
                  <WhatIsCard price="70" source={cart18} />
                  <WhatIsCard price="70" source={cart19} />
                  <WhatIsCard price="70" source={cart20} />
               </div>
            </div>

            <div id="firstWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  <WhatIsCard price="50" source={cart21} />
                  <WhatIsCard price="2000" source={cart22} />
                  <WhatIsCard price="5000" source={cart23} />
                  <WhatIsCard price="8" source={cart24} />
                  <WhatIsCard price="105" source={cart25} />
                  <WhatIsCard price="400" source={cart26} />
                  <WhatIsCard price="350" source={cart27} />
                  <WhatIsCard price="70" source={cart28} />
                  <WhatIsCard price="70" source={cart29} />
                  <WhatIsCard price="70" source={cart20} />
               </div>
               <div className="flex items-center" id="carts">
                  <WhatIsCard price="50" source={cart21} />
                  <WhatIsCard price="2000" source={cart22} />
                  <WhatIsCard price="5000" source={cart23} />
                  <WhatIsCard price="8" source={cart24} />
                  <WhatIsCard price="105" source={cart25} />
                  <WhatIsCard price="400" source={cart26} />
                  <WhatIsCard price="350" source={cart27} />
                  <WhatIsCard price="70" source={cart28} />
                  <WhatIsCard price="70" source={cart29} />
                  <WhatIsCard price="70" source={cart20} />
               </div>
            </div>
            <div id="secondWrapper" className="flex items-center overflow-hidden customMd:hidden">
               <div className="flex items-center" id="carts">
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
               </div>
               <div className="flex items-center" id="carts">
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
                  <WhatIsCard />
               </div>
            </div>
         </div>

         <div className="absolute inset-0">
            <div className="relative size-full px-4">
               <div className="absolute inset-0 size-full">
                  <Image src={whatIsShadow} alt="shadow" className="size-full" />
               </div>
               <div className="relative flex size-full flex-col items-center justify-center">
                  <p
                     className="rounded-2xl bg-[#ffffff1a] px-6 py-2 text-center font-poppinsLight text-xs
                   leading-[24px] text-white backdrop-blur-[12px] customMd:text-[18px] customMd:leading-[32px]"
                  >
                     A Revolutionary Blockchain-Based Play to Earn Mobile Gaming Application
                  </p>
                  <div className="mt-10 customMd:mt-12">
                     <p className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
                        What is <span id="palgamWord">Palgam?</span>
                     </p>
                     <p className="max-w-[892px] text-center font-poppinsLight text-xs leading-[24px] text-[#ffffffb3] customMd:text-[18px] customMd:leading-[32px]">
                        At Palgam, We are revolutionizing mobile gaming application with a dynamic mix: skill-based
                        challenges, foolproof cheat prevention, and real-player matchups. We deliver an unparalleled
                        experience where players abilities directly influence their earnings, all within a trusted,
                        decentralized financial framework.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </WhatIsStyle>
   );
}

export default WhatIs;
