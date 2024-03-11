import Image from 'next/image';

// Assets
import Block10Style from './block10.style';
import block10Lines from '@/assets/images/block10Lines.png';
import block10AppStore from '@/assets/images/block10AppStore.png';
import block10GooglePlay from '@/assets/images/block10GooglePlay.png';
import block10AppStoreActive from '@/assets/images/block10AppStoreActive.png';

function Block10() {
   return (
      <Block10Style className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] bg-[#ffffff1a] customMd:flex-1">
         <div className="absolute inset-0 transition-all duration-700" id="mainBackground">
            <Image src={block10Lines} alt="wallet" className="size-full object-cover" />
         </div>
         <div className="absolute inset-x-0 top-0 flex justify-center">
            <div
               className="relative z-[1] mr-[-40px] mt-[35px] h-fit w-[170px] shrink-0 transition-all duration-700"
               id="appStorePic"
            >
               <Image src={block10AppStore} alt="app store" className="size-full" />
               <div className="invisible absolute inset-0 opacity-0 transition-all duration-700" id="appStorePicActive">
                  <Image src={block10AppStoreActive} alt="app store" className="size-full" />
               </div>
            </div>
            <div className="mt-[70px] h-fit w-[160px] shrink-0">
               <Image src={block10GooglePlay} alt="app store" className="size-full" />
            </div>
         </div>
         <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
               legal license
            </p>
            <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
               Legally authorized in five major countries, and accessible through Google Play and App Store.
            </p>
         </div>
      </Block10Style>
   );
}

export default Block10;
