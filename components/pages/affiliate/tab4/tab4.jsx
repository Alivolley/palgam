import Image from 'next/image';

// Assets
import tab4Background1 from '@/assets/images/affiliate/tab4Background1.png';
import tab4Background2 from '@/assets/images/affiliate/tab4Background2.png';

function Tab4({ affiliateData }) {
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
                  {affiliateData?.data?.section6?.title}
               </p>
               <pre className="relative mt-6 whitespace-pre-line font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:mt-16 customMd:text-[18px] customMd:leading-8">
                  {affiliateData?.data?.section6?.description}
               </pre>
            </div>
         </div>
      </div>
   );
}

export default Tab4;
