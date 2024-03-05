import Image from 'next/image';

// Assets
import WhyPalgamStyle from './why-palgam.style';

const importAll = r => r.keys().map(r);
const images = importAll(require.context('@/assets/images/cards', false, /\.(png|jpe?g|svg)$/));

function WhyPalgam() {
   const firstArray = images.slice(0, 10);
   const secondArray = images.slice(10, 20);
   const thirdArray = images.slice(20);

   return (
      <WhyPalgamStyle className="mt-20 px-4 py-3 customMd:px-20">
         <h3 className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
            Why <span id="palgamWord">Palgam?</span>
         </h3>
         <p className="mx-auto max-w-[862px] text-center font-poppinsLight text-xs leading-[24px] text-white customMd:text-[18px] customMd:leading-[32px]">
            At Palgam, valuing our players is at the heart of everything we do. Were committed to providing the best
            environment filled with outstanding features for a gaming experience like no other.
         </p>
         <div className="mt-[56px]">
            <div className="flex gap-6">
               <div className="relative h-[360px] flex-1 shrink-0 overflow-hidden rounded-[24px]" id="firstWrapper">
                  <div className="absolute left-1/2 top-1/2 mt-[-30px] -translate-x-1/2 -translate-y-1/2">
                     <div className="flex items-center gap-2 transition-all duration-300" id="firstWrapperRow1">
                        {firstArray?.map(item => (
                           <div
                              className="w-[112px] shrink-0 rounded-lg bg-[#ffffff1a] p-1 opacity-[0.1] transition-all duration-300"
                              id="cartItem1"
                              key={crypto.randomUUID()}
                           >
                              <div className="h-[168px]">
                                 <Image src={item} alt="cart" className="size-full rounded-md object-cover" />
                              </div>
                           </div>
                        ))}
                     </div>

                     <div
                        className="mt-2 flex items-center gap-2 pl-[56px] transition-all duration-300"
                        id="firstWrapperRow2"
                     >
                        {secondArray?.map((item, index) => (
                           <div
                              className={`w-[112px] shrink-0 rounded-lg bg-[#ffffff1a] p-1 transition-all duration-300 
                              ${index === 3 || index === 5 || index === 7 ? '' : 'opacity-[0.1]'}`}
                              id="cartItem1"
                              key={crypto.randomUUID()}
                           >
                              <div className="h-[168px]">
                                 <Image src={item} alt="cart" className="size-full rounded-md object-cover" />
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="mt-2 flex items-center gap-2 transition-all duration-300" id="firstWrapperRow3">
                        {thirdArray?.map(item => (
                           <div
                              className="w-[112px] shrink-0 rounded-lg bg-[#ffffff1a] p-1 opacity-[0.1] transition-all duration-300"
                              id="cartItem2"
                              key={crypto.randomUUID()}
                           >
                              <div className="h-[168px]">
                                 <Image src={item} alt="cart" className="size-full rounded-md object-cover" />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="absolute inset-0 bg-[#D3D3D3] opacity-[0.1]" />
               </div>
               <div className="flex-1 shrink-0 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officia, perspiciatis veniam
                  necessitatibus totam veritatis fugit placeat mollitia magnam earum ipsam at, iure accusamus facere
                  suscipit consequatur animi harum labore.
               </div>
            </div>
         </div>
      </WhyPalgamStyle>
   );
}

export default WhyPalgam;
