import Image from 'next/image';
import Block7Style from './block7.style';

// Assets
import block7Background from '@/assets/images/block7Background.png';
import block7Box from '@/assets/images/block7Box.png';
import block7Check from '@/assets/images/block7Check.png';
import block7LikeShape from '@/assets/images/block7LikeShape.png';

function Block7() {
   return (
      <Block7Style className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] customMd:flex-1">
         <div className="absolute inset-0 bg-[#ffffff1a]">
            <Image src={block7Background} alt="smart contract" className="size-full object-cover" />
         </div>
         <div className="relative flex h-full flex-col justify-between py-6">
            <div className="space-y-4">
               <div
                  className="ml-[-245px] flex items-center justify-center gap-4 transition-all duration-700"
                  id="pinkBoxWrapper"
               >
                  <div className="w-[320px] shrink-0">
                     <Image src={block7Box} alt="block" className="size-full" />
                  </div>
                  <div className="w-[320px] shrink-0">
                     <Image src={block7Box} alt="block" className="size-full" />
                  </div>
                  <div
                     className="flex h-[88px] w-[320px] shrink-0 items-center gap-4 rounded-2xl p-2 transition-all duration-700"
                     id="pinkBox"
                  >
                     <div className="flex h-full w-[72px] items-center justify-center rounded-[14px] bg-[#dd43ef66]">
                        <Image src={block7LikeShape} alt="check" />
                     </div>
                     <div className="flex grow flex-col gap-3">
                        <div
                           className="h-5 w-[88px] rounded-md"
                           style={{
                              background:
                                 'linear-gradient(90deg, rgba(221, 67, 239, 0.30) 0%, rgba(221, 67, 239, 0.12) 100%)',
                           }}
                        />
                        <div
                           className="h-5 w-full rounded-md"
                           style={{
                              background:
                                 'linear-gradient(90deg, rgba(221, 67, 239, 0.30) 0%, rgba(221, 67, 239, 0.12) 100%)',
                           }}
                        />
                     </div>
                  </div>
                  <div className="w-[320px] shrink-0">
                     <Image src={block7Box} alt="block" className="size-full" />
                  </div>
                  <div className="w-[320px] shrink-0">
                     <Image src={block7Box} alt="block" className="size-full" />
                  </div>
               </div>
               <div
                  className="ml-[170px] flex items-center justify-center gap-4 transition-all duration-700"
                  id="purpleBoxWrapper"
               >
                  <div className="w-[320px] shrink-0">
                     <Image src={block7Box} alt="block" className="size-full" />
                  </div>
                  <div className="w-[320px] shrink-0">
                     <Image src={block7Box} alt="block" className="size-full" />
                  </div>

                  <div
                     className="flex h-[88px] w-[320px] shrink-0 items-center gap-4 rounded-2xl p-2 transition-all duration-700"
                     id="purpleBox"
                  >
                     <div className="flex h-full w-[72px] items-center justify-center rounded-[14px] bg-[#8c72e266]">
                        <Image src={block7Check} alt="check" />
                     </div>
                     <div className="flex grow flex-col gap-3">
                        <div
                           className="h-5 w-[88px] rounded-md"
                           style={{
                              background:
                                 'linear-gradient(90deg, rgba(140, 114, 226, 0.30) 0%, rgba(140, 114, 226, 0.12) 100%)',
                           }}
                        />
                        <div
                           className="h-5 w-full rounded-md"
                           style={{
                              background:
                                 'linear-gradient(90deg, rgba(140, 114, 226, 0.30) 0%, rgba(140, 114, 226, 0.12) 100%)',
                           }}
                        />
                     </div>
                  </div>

                  <div className="w-[320px] shrink-0">
                     <Image src={block7Box} alt="block" className="size-full" />
                  </div>
                  <div className="w-[320px] shrink-0">
                     <Image src={block7Box} alt="block" className="size-full" />
                  </div>
               </div>
            </div>

            <div className="flex flex-col px-6 text-white">
               <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
                  Smart Contract Verification License
               </p>
               <p className="mt-1 font-poppinsThin text-sm leading-[24px]">
                  Guarantees that Palgam s operations, including our affiliate program, run on a fully decentralized
                  system, eliminating any room for manipulation.
               </p>
            </div>
         </div>
      </Block7Style>
   );
}

export default Block7;
