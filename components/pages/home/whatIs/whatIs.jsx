import Image from 'next/image';

// MUI
import { useMediaQuery } from '@mui/material';

// Assets
import whatIsShadow from '@/assets/images/whatIsShadow.png';

// Style
import WhatIsStyle from './whatIs.style';

// Components
import WhatIsCard from '@/components/templates/whatIs-card/whatIs-card';

const importAll = r => r.keys().map(r);
const images = importAll(require.context('@/assets/images/cards', false, /\.(png|jpe?g|svg)$/));

function WhatIs() {
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   const firstArray = images.slice(0, 10);
   const secondArray = images.slice(10, 20);
   const thirdArray = images.slice(20);

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
                  {firstArray?.map(() => (
                     <WhatIsCard key={crypto.randomUUID()} />
                  ))}
               </div>
               <div className="flex items-center" id="carts">
                  {firstArray?.map(() => (
                     <WhatIsCard key={crypto.randomUUID()} />
                  ))}
               </div>
            </div>
            <div id="firstWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  {firstArray?.map(item => (
                     <WhatIsCard price="50" source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
               <div className="flex items-center" id="carts">
                  {firstArray?.map(item => (
                     <WhatIsCard price="50" source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
            </div>
            <div id="secondWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  {secondArray?.map(item => (
                     <WhatIsCard price="50" source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
               <div className="flex items-center" id="carts">
                  {secondArray?.map(item => (
                     <WhatIsCard price="50" source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
            </div>

            <div id="firstWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  {thirdArray?.map(item => (
                     <WhatIsCard price="50" source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
               <div className="flex items-center" id="carts">
                  {thirdArray?.map(item => (
                     <WhatIsCard price="50" source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
            </div>
            <div id="secondWrapper" className="flex items-center overflow-hidden customMd:hidden">
               <div className="flex items-center" id="carts">
                  {firstArray?.map(() => (
                     <WhatIsCard key={crypto.randomUUID()} />
                  ))}
               </div>
               <div className="flex items-center" id="carts">
                  {firstArray?.map(() => (
                     <WhatIsCard key={crypto.randomUUID()} />
                  ))}
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
