import Image from 'next/image';

// Assets
import supportClock from '@/assets/images/supportClock.png';
import supportMessage from '@/assets/images/supportMessage.png';
import supportUserOctagon from '@/assets/images/supportUserOctagon.png';
import supportLike from '@/assets/images/supportLike.png';
import supportMedal from '@/assets/images/supportMedal.png';
import supportQuestion from '@/assets/images/supportQuestion.png';
import supportDislike from '@/assets/images/supportDislike.png';
import supportNumber from '@/assets/images/supportNumber.png';
import supportHeart from '@/assets/images/supportHeart.png';
import supportNoise from '@/assets/images/supportNoise.png';
import Block3Style from './block3.style';

function Block3({ detail }) {
   return (
      <Block3Style className="relative h-[360px] shrink-0 overflow-hidden rounded-[24px] bg-[#ffffff1a] customMd:flex-1">
         <div className="-mt-5 flex items-center justify-center gap-2 transition-all duration-700" id="supportMargin">
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div
               className="relative size-24 shrink-0 rounded-2xl bg-[#ffffff05] transition-all duration-700"
               id="supportBlock1"
            >
               <div
                  className="invisible absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 transition-all duration-700"
                  id="supportBlock1InnerPic"
               >
                  <div className="size-16">
                     <Image src={supportLike} alt="support clock" className="size-full" />
                  </div>
               </div>
            </div>
            <div
               className="relative size-24 shrink-0 rounded-2xl bg-[#ffffff05] transition-all duration-700"
               id="supportBlock2"
            >
               <div
                  className="invisible absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 transition-all duration-700"
                  id="supportBlock2InnerPic"
               >
                  <div className="size-16">
                     <Image src={supportMedal} alt="support clock" className="size-full" />
                  </div>
               </div>
            </div>
            <div
               className="relative size-24 shrink-0 rounded-2xl bg-[#ffffff05] transition-all duration-700"
               id="supportBlock3"
            >
               <div
                  className="invisible absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 transition-all duration-700"
                  id="supportBlock3InnerPic"
               >
                  <div className="size-16">
                     <Image src={supportQuestion} alt="support clock" className="size-full" />
                  </div>
               </div>
            </div>
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
         </div>
         <div className="mt-2 flex items-center justify-center gap-2">
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div
               className="flex size-24 shrink-0 items-center justify-center rounded-2xl transition-all duration-700"
               id="supportBlock4"
            >
               <div className="size-16">
                  <Image src={supportClock} alt="support clock" className="size-full" />
               </div>
            </div>
            <div
               className="flex size-24 shrink-0 items-center justify-center rounded-2xl transition-all duration-700"
               id="supportBlock5"
            >
               <div className="size-16">
                  <Image src={supportMessage} alt="support message" className="size-full" />
               </div>
            </div>
            <div
               className="flex size-24 shrink-0 items-center justify-center rounded-2xl transition-all duration-700"
               id="supportBlock6"
            >
               <div className="size-16">
                  <Image src={supportUserOctagon} alt="support user octagon" className="size-full" />
               </div>
            </div>
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
         </div>
         <div className="mt-2 flex items-center justify-center gap-2">
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div
               className="relative size-24 shrink-0 rounded-2xl bg-[#ffffff05] transition-all duration-700"
               id="supportBlock7"
            >
               <div
                  className="invisible absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 transition-all duration-700"
                  id="supportBlock7InnerPic"
               >
                  <div className="size-16">
                     <Image src={supportDislike} alt="support clock" className="size-full" />
                  </div>
               </div>
            </div>
            <div
               className="relative size-24 shrink-0 rounded-2xl bg-[#ffffff05] transition-all duration-700"
               id="supportBlock8"
            >
               <div
                  className="invisible absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 transition-all duration-700"
                  id="supportBlock8InnerPic"
               >
                  <div className="size-16">
                     <Image src={supportNumber} alt="support clock" className="size-full" />
                  </div>
               </div>
            </div>
            <div
               className="relative size-24 shrink-0 rounded-2xl bg-[#ffffff05] transition-all duration-700"
               id="supportBlock9"
            >
               <div
                  className="invisible absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 transition-all duration-700"
                  id="supportBlock9InnerPic"
               >
                  <div className="size-16">
                     <Image src={supportHeart} alt="support clock" className="size-full" />
                  </div>
               </div>
            </div>
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
         </div>
         <div className="mt-2 flex items-center justify-center gap-2">
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
            <div className="size-24 shrink-0 rounded-2xl bg-[#ffffff05]" />
         </div>
         <div className="absolute inset-0">
            <Image src={supportNoise} alt="support clock" className="size-full object-cover" />
         </div>
         <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <p className="font-poppinsExtraBold text-[20px] leading-[28px] customMd:text-[24px] customMd:leading-[32px]">
               {detail?.title}
            </p>
            <p className="mt-1 font-poppinsThin text-sm leading-[24px]">{detail?.description}</p>
         </div>
      </Block3Style>
   );
}

export default Block3;
