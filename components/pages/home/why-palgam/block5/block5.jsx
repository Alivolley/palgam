import Image from 'next/image';

// Assets
import bettingBackground from '@/assets/images/bettingBackground.png';
import bettingProfile1 from '@/assets/images/bettingProfile1.png';
import bettingProfile2 from '@/assets/images/bettingProfile2.png';
import bettingLightning from '@/assets/images/bettingLightning.png';
import Block5Style from './block5.style';

function Block5() {
   return (
      <Block5Style className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] customMd:flex-1">
         <div className="absolute inset-0">
            <Image src={bettingBackground} alt="betting" className="size-full object-cover" />
         </div>
         <div className="absolute inset-0 flex items-center justify-center gap-6">
            <div className="size-[104px] shrink-0 transition-all duration-700" id="bettingProfile1">
               <Image src={bettingProfile1} alt="betting" className="size-full object-cover" />
            </div>
            <div className="h-[62px] w-[48px] shrink-0 transition-all duration-700" id="bettingLightning">
               <Image src={bettingLightning} alt="betting" className="size-full object-cover" />
            </div>
            <div className="size-[104px] shrink-0 transition-all duration-700" id="bettingProfile2">
               <Image src={bettingProfile2} alt="betting" className="size-full object-cover" />
            </div>
         </div>
         <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
               Betting tables
            </p>
            <p className="mt-1 max-w-[193px] font-poppinsThin text-sm leading-[24px]">
               Compete with online users and win Tether
            </p>
         </div>
      </Block5Style>
   );
}

export default Block5;
