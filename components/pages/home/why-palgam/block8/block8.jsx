import Image from 'next/image';

// Assets
import BlockStyle from './block.style';
import block8Profile from '@/assets/images/block8Profile.png';
import block8Profile1 from '@/assets/images/block8Profile1.png';
import block8Profile2 from '@/assets/images/block8Profile2.png';
import block8Profile3 from '@/assets/images/block8Profile3.png';
import block8Profile4 from '@/assets/images/block8Profile4.png';
import block8Noise from '@/assets/images/block8Noise.png';

function Block8() {
   return (
      <BlockStyle className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] bg-[#ffffff1a] customMd:flex-1">
         <div className="flex h-full flex-col justify-between">
            <div className="mt-[87px] flex justify-center transition-all duration-700" id="profileWrapper">
               <div className="size-[104px] shrink-0 transition-all duration-700" id="profile1">
                  <Image src={block8Profile} alt="profile" className="size-full" />
               </div>
               <div className="ml-[-30px] size-[104px] shrink-0 transition-all duration-700" id="profile2">
                  <Image src={block8Profile1} alt="profile" className="size-full" />
               </div>
               <div className="ml-[-30px] size-[104px] shrink-0 transition-all duration-700" id="profile3">
                  <Image src={block8Profile2} alt="profile" className="size-full" />
               </div>
               <div className="ml-[-30px] size-[104px] shrink-0 transition-all duration-700" id="profile4">
                  <Image src={block8Profile3} alt="profile" className="size-full" />
               </div>
               <div className="ml-[-30px] size-[104px] shrink-0 transition-all duration-700" id="profile5">
                  <Image src={block8Profile4} alt="profile" className="size-full" />
               </div>
            </div>
            <div className="flex flex-col p-6 text-white">
               <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
                  Play and Chat With Friends
               </p>
               <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                  Users can challenge their friends to games, engage in chats.
               </p>
            </div>
         </div>
         <div className="absolute inset-0">
            <Image src={block8Noise} alt="support clock" className="size-full object-cover" />
         </div>
      </BlockStyle>
   );
}

export default Block8;
