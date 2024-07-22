import Image from 'next/image';

// Assets
import whyPalgamCoinBackground from '@/assets/images/whyPalgamCoinBackground.png';
import whyPalgamCoinNoise from '@/assets/images/whyPalgamCoinNoise.png';
import Coin from '@/assets/images/Coin.png';
import Block4Style from './block4.style';

function Block4({ detail }) {
   return (
      <Block4Style
         className="relative flex h-[360px] shrink-0 flex-col justify-between overflow-hidden rounded-[24px] customMd:flex-1"
         id="coinWrapper"
      >
         <div className="absolute inset-0 z-[2]">
            <Image src={whyPalgamCoinBackground} alt="coin background" className="size-full" />
         </div>
         <div className="relative flex justify-center transition-all duration-700" id="coinImageWrapper">
            <div id="coin" className="z-[2] transition-all duration-700">
               <Image src={Coin} alt="coin" className="size-full" />
            </div>
            <div
               className="absolute inset-0 left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 bg-[#E8A905] transition-all duration-700"
               id="coinBackground"
            />
         </div>
         <div className="relative p-6 text-white">
            <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
               {detail?.title}
            </p>
            <p className="mt-1 font-poppinsLight text-sm leading-[24px]">{detail?.description}</p>
         </div>
         <div className="absolute inset-0 z-[2]">
            <Image src={whyPalgamCoinNoise} alt="coin noise" className="size-full" />
         </div>
      </Block4Style>
   );
}

export default Block4;
