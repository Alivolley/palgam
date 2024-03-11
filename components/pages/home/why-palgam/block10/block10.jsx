import Image from 'next/image';

// Assets
import Block10Style from './block10.style';
import block9Background from '@/assets/images/block9Background.png';

function Block10() {
   return (
      <Block10Style className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] bg-[#ffffff1a] customMd:flex-1">
         {/* <div className="absolute inset-0">
            <Image src={block9Background} alt="wallet" className="size-full object-cover" />
         </div> */}
      </Block10Style>
   );
}

export default Block10;
