import Image from 'next/image';

// Assets
import Block6Style from './block6.style';
import block6Background from '@/assets/images/block6Background.png';
import Block6Lock from '@/assets/icons/components/block6Lock';
import block6SafeIcon from '@/assets/icons/block6SafeIcon.svg';
import supportNoise from '@/assets/images/supportNoise.png';

function Block6() {
   return (
      <Block6Style className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] customMd:flex-1">
         <div className="absolute inset-0">
            <Image src={block6Background} alt="wallet" className="size-full object-cover" />
         </div>
         <div className="absolute inset-x-0 -mt-6 flex justify-center customMd:mt-0">
            <div className="w-[326px] transition-all duration-700" id="lock">
               <Block6Lock />
            </div>
         </div>

         <div className="absolute inset-0 flex items-center justify-center">
            <div
               className="-mt-16 w-[220px] transition-all duration-700 customMd:mt-0 customMd:h-[84px] customMd:w-[392px]"
               id="safeIcon"
            >
               <Image src={block6SafeIcon} alt="wallet" className="size-full object-cover" />
            </div>
         </div>

         <div className="absolute inset-0">
            <Image src={supportNoise} alt="support clock" className="size-full object-cover" />
         </div>
         <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
               Decentralized Cryptocurrency Wallet
            </p>
            <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
               Palgam does not have access to users funds. Balances are storedin a decentralized blockchain environment,
               secured by 12 security words.
            </p>
         </div>
      </Block6Style>
   );
}

export default Block6;
