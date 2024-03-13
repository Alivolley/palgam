import Image from 'next/image';

// MUI
import { Grid } from '@mui/material';

// Assets
import ourTableBlock1Icon from '@/assets/images/ourTableBlock1Icon.png';
import block1background from '@/assets/images/block1background.png';
import ourTableBlock2Icon from '@/assets/images/ourTableBlock2Icon.png';
import block2background from '@/assets/images/block2background.png';
import ourTableBlock3Icon from '@/assets/images/ourTableBlock3Icon.png';
import block3background from '@/assets/images/block3background.png';
import ourTableBlock4Icon from '@/assets/images/ourTableBlock4Icon.png';
import block4background from '@/assets/images/block4background.png';
import ourTableBlock5Icon from '@/assets/images/ourTableBlock5Icon.png';
import block5background from '@/assets/images/block5background.png';
import OurTablesStyle from '../../home/our-tables/our-tables.style';

function Tab2() {
   return (
      <OurTablesStyle className="relative mt-14 overflow-hidden px-4 customMd:px-20">
         <div>
            <p className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
               Our Tables
            </p>
            <p className="text-center font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
               Explore our diverse table options, discover your preferred table, and enjoy playing.
            </p>
         </div>

         <div className="mt-14">
            <Grid container spacing="24px">
               <Grid item xs={12} md={6}>
                  <div
                     className="relative h-[320px] overflow-hidden rounded-3xl bg-[#5822e91f] p-8 pb-14 transition-all duration-700 hover:bg-[#5822e966]"
                     id="block"
                  >
                     <div
                        className="absolute top-[30px] size-[72px] transition-all duration-700 customMd:size-[86px]"
                        id="blockIcon"
                     >
                        <Image src={ourTableBlock1Icon} alt="icon" className="size-full" />
                     </div>

                     <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{ background: 'lightgray 0% 0% / 46.666666865348816px 46.666666865348816px repeat' }}
                     />

                     <div
                        className="relative flex h-full flex-col justify-end text-white transition-all duration-700"
                        id="blockTextWrapper"
                     >
                        <p
                           className="text-nowrap font-poppinsExtraBold text-[20px] leading-[28px] transition-all duration-700 customMd:text-[24px] customMd:leading-[32px]"
                           id="blockText"
                        >
                           Free
                        </p>
                        <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                           Players can enjoy competing with other players online without any monetary exchange.
                        </p>
                     </div>

                     <div className="absolute bottom-0 right-0">
                        <Image src={block1background} alt="icon" className="size-full" />
                     </div>
                  </div>
               </Grid>

               <Grid item xs={12} md={6}>
                  <div
                     className="relative h-[320px] overflow-hidden rounded-3xl bg-[#19c2951f] p-8 transition-all duration-700 hover:bg-[#19c29566]"
                     id="block"
                  >
                     <div
                        className="absolute top-[30px] size-[72px] transition-all duration-700 customMd:size-[86px]"
                        id="blockIcon"
                     >
                        <Image src={ourTableBlock3Icon} alt="icon" className="size-full" />
                     </div>

                     <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{ background: 'lightgray 0% 0% / 46.666666865348816px 46.666666865348816px repeat' }}
                     />

                     <div
                        className="relative flex h-full flex-col justify-end text-white transition-all duration-700"
                        id="blockTextWrapper"
                     >
                        <p
                           className="text-nowrap font-poppinsExtraBold text-[20px] leading-[28px] transition-all duration-700 customMd:text-[24px] customMd:leading-[32px]"
                           id="blockText"
                        >
                           Offline
                        </p>
                        <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                           Ideal for training and familiarizing with the games, this table allows users to play against
                           the application s bot without internet connection.
                        </p>
                     </div>

                     <div className="absolute bottom-0 right-0">
                        <Image src={block3background} alt="icon" className="size-full" />
                     </div>
                  </div>
               </Grid>

               <Grid item xs={12} md={6}>
                  <div
                     className="relative h-[320px] overflow-hidden rounded-3xl bg-[#87f2fc1f] p-8 pb-14 transition-all duration-700 hover:bg-[#87f2fc66]"
                     id="block"
                  >
                     <div
                        className="absolute top-[30px] size-[72px] transition-all duration-700 customMd:size-[86px]"
                        id="blockIcon"
                     >
                        <Image src={ourTableBlock5Icon} alt="icon" className="size-full" />
                     </div>

                     <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{ background: 'lightgray 0% 0% / 46.666666865348816px 46.666666865348816px repeat' }}
                     />

                     <div
                        className="relative flex h-full flex-col justify-end text-white transition-all duration-700"
                        id="blockTextWrapper"
                     >
                        <p
                           className="text-nowrap font-poppinsExtraBold text-[20px] leading-[28px] transition-all duration-700 customMd:text-[24px] customMd:leading-[32px]"
                           id="blockText"
                        >
                           Play to Earn
                        </p>
                        <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                           This table offers a decentralized online competition, two players compete in games, bet with
                           crypto, and the winner takes the prize.
                        </p>
                     </div>

                     <div className="absolute bottom-0 right-0">
                        <Image src={block5background} alt="icon" className="size-full" />
                     </div>
                  </div>
               </Grid>

               <Grid item xs={12} md={6}>
                  <div
                     className="relative h-[320px] overflow-hidden rounded-3xl bg-[#8c72e21f] p-8 pb-14 transition-all duration-700 hover:bg-[#8c72e266]"
                     id="block"
                  >
                     <div
                        className="absolute top-[30px] size-[72px] transition-all duration-700 customMd:size-[86px]"
                        id="blockIcon"
                     >
                        <Image src={ourTableBlock2Icon} alt="icon" className="size-full" />
                     </div>

                     <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{ background: 'lightgray 0% 0% / 46.666666865348816px 46.666666865348816px repeat' }}
                     />

                     <div
                        className="relative flex h-full flex-col justify-end text-white transition-all duration-700"
                        id="blockTextWrapper"
                     >
                        <p
                           className="text-nowrap font-poppinsExtraBold text-[20px] leading-[28px] transition-all duration-700 customMd:text-[24px] customMd:leading-[32px]"
                           id="blockText"
                        >
                           With Friend
                        </p>
                        <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                           Here, users have the flexibility to compete against friends from their list..
                        </p>
                     </div>

                     <div className="absolute bottom-0 right-0">
                        <Image src={block2background} alt="icon" className="size-full" />
                     </div>
                  </div>
               </Grid>

               <Grid item xs={12} md={12}>
                  <div
                     className="relative h-[320px] overflow-hidden rounded-3xl bg-[#dd43f01f] p-8 pb-14 transition-all duration-700 hover:bg-[#dd43f066]"
                     id="block"
                  >
                     <div
                        className="absolute top-[30px] size-[72px] transition-all duration-700 customMd:size-[86px]"
                        id="blockIcon"
                     >
                        <Image src={ourTableBlock4Icon} alt="icon" className="size-full" />
                     </div>

                     <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{ background: 'lightgray 0% 0% / 46.666666865348816px 46.666666865348816px repeat' }}
                     />

                     <div
                        className="relative flex h-full flex-col justify-end text-white transition-all duration-700"
                        id="blockTextWrapper"
                     >
                        <p
                           className="text-nowrap font-poppinsExtraBold text-[20px] leading-[28px] transition-all duration-700 customMd:text-[24px] customMd:leading-[32px]"
                           id="blockText"
                        >
                           Tournaments
                        </p>
                        <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                           Players enter the tournaments by paying a fee and compete at scheduled competition, and
                           embrace the thrill of victory with prizes on the line.
                        </p>
                     </div>

                     <div className="absolute bottom-0 right-0">
                        <Image src={block4background} alt="icon" className="size-full" />
                     </div>
                  </div>
               </Grid>
            </Grid>
         </div>
      </OurTablesStyle>
   );
}

export default Tab2;
