import Image from 'next/image';

// Assets
import Block9Style from './block9.style';
import block9Background from '@/assets/images/block9Background.png';
import block9BackgroundActive from '@/assets/images/block9BackgroundActive.png';

function Block9({ detail }) {
   return (
      <Block9Style className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] customMd:flex-1">
         <div className="visible absolute inset-0 opacity-100 transition-all duration-700" id="notActiveBackground">
            <Image src={block9Background} alt="wallet" className="size-full object-cover" />
         </div>
         <div className="invisible absolute inset-0 opacity-0 transition-all duration-700" id="activeBackground">
            <Image src={block9BackgroundActive} alt="wallet" className="size-full object-cover" />
         </div>
         <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
               {detail?.title}
            </p>
            <p className="mt-1 font-poppinsLight text-sm leading-[24px]">{detail?.description}</p>
         </div>
      </Block9Style>
   );
}

export default Block9;
