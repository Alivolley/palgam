import Image from 'next/image';

// Assets
import Block1Style from './block1.style';

const importAll = r => r.keys().map(r);
const images = importAll(require.context('@/assets/images/cards', false, /\.(png|jpe?g|svg)$/));

function Block1() {
   const firstArray = images.slice(0, 10);
   const secondArray = images.slice(10, 20);
   const thirdArray = images.slice(20);

   return (
      <Block1Style className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] customMd:flex-1">
         <div className="absolute left-1/2 top-1/2 mt-[-40px] -translate-x-1/2 -translate-y-1/2">
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

            <div className="mt-2 flex items-center gap-2 pl-[56px] transition-all duration-300" id="firstWrapperRow2">
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

         <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
               Exceptional Gameplay and Graphics
            </p>
            <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
               Our games are designed to be visually stunning and engaging, offering a seamless and captivating
               experience on mobile devices.
            </p>
         </div>
      </Block1Style>
   );
}

export default Block1;
