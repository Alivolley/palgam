import Image from 'next/image';

// Assets
import profileFrame from '@/assets/images/whyPalgamProfileFrame.png';
import dotedNoise from '@/assets/images/dotedNoise.png';
import whyPalgamPurpleLines from '@/assets/images/whyPalgamPurpleLines.png';
import whyPalgamTrophy from '@/assets/images/whyPalgamTrophy.png';
import Block2Style from './block2.style';

function Block2({ detail }) {
   return (
      <Block2Style className="relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[24px] bg-[#8c72e21a] customMd:h-[360px] customMd:flex-1">
         <div className="mt-[48px] flex items-center justify-center gap-3">
            <div className="size-[120px] shrink-0">
               <Image src={profileFrame} alt="profile frame" className="size-full" />
            </div>
            <div className="size-[120px] shrink-0">
               <Image src={profileFrame} alt="profile frame" className="size-full" />
            </div>
            <div className="size-[120px] shrink-0">
               <Image src={profileFrame} alt="profile frame" className="size-full" />
            </div>
            <div className="size-[120px] shrink-0">
               <Image src={profileFrame} alt="profile frame" className="size-full" />
            </div>
            <div
               className="h-[160px] w-[220px] shrink-0 rounded-[24px] bg-[#8c72e280] p-2 transition-all duration-1000"
               style={{ boxShadow: '0px 12px 64px 0px rgba(0, 0, 0, 0.20)' }}
               id="mainTrophyBox"
            >
               <div className="relative">
                  <div className="h-[104px] w-full overflow-hidden rounded-[18px]">
                     <div
                        className="size-full overflow-hidden rounded-[18px] transition-all duration-1000"
                        id="mainTrophyBoxImage"
                     >
                        <Image src={whyPalgamPurpleLines} alt="lines" className="size-full" />
                     </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2">
                     <Image src={whyPalgamTrophy} alt="trophy" />
                  </div>
                  <div
                     id="trophyBackGround"
                     className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
                  />
               </div>
               <div className="mx-auto mt-4 h-5 w-[120px] rounded-[64px] bg-[#8c72e266]" />
            </div>
            <div className="size-[120px] shrink-0">
               <Image src={profileFrame} alt="profile frame" className="size-full" />
            </div>
            <div className="size-[120px] shrink-0">
               <Image src={profileFrame} alt="profile frame" className="size-full" />
            </div>
            <div className="size-[120px] shrink-0">
               <Image src={profileFrame} alt="profile frame" className="size-full" />
            </div>
            <div className="size-[120px] shrink-0">
               <Image src={profileFrame} alt="profile frame" className="size-full" />
            </div>
         </div>
         <div className="relative p-6 text-white">
            <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
               {detail?.title}
            </p>
            <p className="mt-1 font-poppinsThin text-sm leading-[24px]">{detail?.description}</p>
         </div>
         <div className="absolute inset-0">
            <Image src={dotedNoise} alt="profile frame" className="size-full" />
         </div>
      </Block2Style>
   );
}

export default Block2;
