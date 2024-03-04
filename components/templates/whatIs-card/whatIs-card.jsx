import Image from 'next/image';

// Assets
import tetherIcon from '@/assets/icons/TetherIcon.svg';

function WhatIsCard({ price, source }) {
   return (
      <div className="mx-3 w-[272px] shrink-0 rounded-[32px] bg-[#ffffff26] p-4">
         <div className="h-[343px] w-full">
            <Image src={source} alt="card" className="size-full rounded-[16px] object-cover" />
         </div>
         <div className="mt-4 flex items-center justify-center">
            <Image src={tetherIcon} alt="tether" />
            <p className="font-poppinsBold text-[40px] text-white">{price}$</p>
         </div>
      </div>
   );
}

export default WhatIsCard;
