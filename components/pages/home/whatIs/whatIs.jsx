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

function WhatIs({ homePageData }) {
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   const firstArray = images.slice(0, 10);
   const secondArray = images.slice(10, 20);
   const thirdArray = images.slice(20);
   const pricesFirst = [100, 250, 10, 2000, 50, 5000, 50, 100, 250, 10];
   const secondFirst = [2000, 50, 5000, 50, 100, 250, 10, 2000, 50, 5000];
   const thirdFirst = [50, 100, 250, 10, 2000, 50, 5000, 50, 100];

   return (
      <WhatIsStyle className="relative mt-[180px] overflow-hidden customMd:h-[1217px]">
         <div
            className="flex flex-col gap-2 customMd:mt-[-100px] customMd:gap-6"
            data-aos="fade-up"
            {...(isDesktop && { 'data-aos-offset': '700' })}
            data-aos-duration="1000"
         >
            <div id="firstWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  {firstArray?.map((item, index) => (
                     <WhatIsCard price={pricesFirst[index]} source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
               <div className="flex items-center" id="carts">
                  {firstArray?.map((item, index) => (
                     <WhatIsCard price={pricesFirst[index]} source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
            </div>
            <div id="secondWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  {secondArray?.map((item, index) => (
                     <WhatIsCard price={secondFirst[index]} source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
               <div className="flex items-center" id="carts">
                  {secondArray?.map((item, index) => (
                     <WhatIsCard price={secondFirst[index]} source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
            </div>

            <div id="firstWrapper" className="flex items-center overflow-hidden">
               <div className="flex items-center" id="carts">
                  {thirdArray?.map((item, index) => (
                     <WhatIsCard price={thirdFirst[index]} source={item} key={crypto.randomUUID()} />
                  ))}
               </div>
               <div className="flex items-center" id="carts">
                  {thirdArray?.map((item, index) => (
                     <WhatIsCard price={thirdFirst[index]} source={item} key={crypto.randomUUID()} />
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
                     {homePageData?.data?.section2?.label}
                  </p>
                  <div className="mt-10 customMd:mt-12">
                     <p className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
                        <span id="palgamWord">{homePageData?.data?.section2?.title}</span>
                     </p>
                     <pre
                        className="max-w-[892px] whitespace-pre-line text-center font-poppinsLight text-xs leading-[24px]
                      text-[#ffffffb3] customMd:text-[18px] customMd:leading-[32px]"
                     >
                        {homePageData?.data?.section2?.description}
                     </pre>
                  </div>
               </div>
            </div>
         </div>
      </WhatIsStyle>
   );
}

export default WhatIs;
