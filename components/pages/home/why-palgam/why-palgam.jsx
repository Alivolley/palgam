import Image from 'next/image';

// Assets
import WhyPalgamStyle from './why-palgam.style';
import profileFrame from '@/assets/images/whyPalgamProfileFrame.png';
import dotedNoise from '@/assets/images/dotedNoise.png';
import whyPalgamPurpleLines from '@/assets/images/whyPalgamPurpleLines.png';
import whyPalgamTrophy from '@/assets/images/whyPalgamTrophy.png';

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
            <div className="flex flex-col gap-6 customMd:flex-row">
               <div
                  className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] customMd:flex-1"
                  id="firstWrapper"
               >
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

                  <div className="relative flex h-full flex-col justify-end p-6 text-white">
                     <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
                        Exceptional Gameplay and Graphics
                     </p>
                     <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                        Our games are designed to be visually stunning and engaging, offering a seamless and captivating
                        experience on mobile devices.
                     </p>
                  </div>
               </div>
               <div
                  className="relative flex shrink-0 flex-col justify-between overflow-hidden rounded-[24px] bg-[#8c72e21a] customMd:h-[360px] customMd:flex-1"
                  id="trophyWrapper"
               >
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
                        Exciting Tournaments
                     </p>
                     <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                        Palgam hosts thrilling tournaments, providing users with competitive gaming opportunities and
                        chances to win exciting prizes.
                     </p>
                  </div>
                  <div className="absolute inset-0">
                     <Image src={dotedNoise} alt="profile frame" className="size-full" />
                  </div>
               </div>
            </div>
         </div>
      </WhyPalgamStyle>
   );
}

export default WhyPalgam;
