// Components
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import WhatIs from '@/components/pages/home/whatIs/whatIs';
import WhyPalgam from '@/components/pages/home/why-palgam/why-palgam';

export default function Home() {
   return (
      <div>
         <HomeBanner />
         <WhatIs />
         <WhyPalgam />
      </div>
   );
}
