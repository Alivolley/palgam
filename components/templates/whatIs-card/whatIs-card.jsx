import Image from 'next/image';

// Assets
import tetherIcon from '@/assets/icons/TetherIcon.svg';

function WhatIsCard({ price, source }) {
   return (
      <div className="mx-1 w-[152px] shrink-0 rounded-[16px] bg-[#ffffff26] p-2 customMd:mx-3 customMd:w-[272px] customMd:rounded-[32px] customMd:p-4">
         <div className="h-[200px] w-full customMd:h-[343px]">
            {source && <Image src={source} alt="card" className="size-full rounded-[16px] object-cover" />}
         </div>
         <div className="mt-4 flex items-center justify-center">
            <div className="size-9 customMd:size-12">
               {price && <Image src={tetherIcon} alt="tether" className="size-full" />}
            </div>
            <p className="font-poppinsBold text-[24px] text-white customMd:text-[40px]">{price && `${price}$`}</p>
         </div>
      </div>
   );
}

export default WhatIsCard;
