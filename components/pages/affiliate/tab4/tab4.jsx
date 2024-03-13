import Image from 'next/image';

// Assets
import tab4Background1 from '@/assets/images/affiliate/tab4Background1.png';
import tab4Background2 from '@/assets/images/affiliate/tab4Background2.png';

function Tab4() {
   return (
      <div className="relative py-[88px]">
         <div className="absolute inset-0">
            <Image src={tab4Background1} alt="galaxy" className="size-full object-cover" />
         </div>

         <div className="relative px-4 customMd:px-20">
            <div className="relative overflow-hidden rounded-[20px] border border-solid border-[#ffffff26] px-8 py-14">
               <div className="absolute inset-0">
                  <Image src={tab4Background2} alt="galaxy" className="size-full object-cover" />
               </div>
               <p className="relative font-arimaBold text-[44px] leading-[50px] text-white customMd:text-[88px] customMd:leading-[112px]">
                  IMPORTANT !!!
               </p>
               <p className="relative mt-6 font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:mt-16 customMd:text-[18px] customMd:leading-8">
                  Unlike all play to earn sites that give you a negative balance, you will never have a negative balance
                  in Palgam and will always profit. Unlike other websites in the world where partner profit is based on
                  the losses of their referrals and the wins of the referrals partner lead to a negative balance for the
                  partner, we in Palgam for the first time in the world calculate your profit based on your referrals
                  wins, and their losses are not considered as your negative balance! It is the first time in the world
                  that an affiliate system is written based on a blockchain smart contract. This provides you with 100%
                  confidence and transparency that you will not lose even 1 cent of your commission, and thePalgam
                  application never has the ability to change your percentage, something that has often been manipulated
                  in other betting sites due to the centralized and opaque nature of this section.
               </p>
            </div>
         </div>
      </div>
   );
}

export default Tab4;
