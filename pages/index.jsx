// Components
import DownloadApp from '@/components/pages/home/download-app/download-app';
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import MoreAbout from '@/components/pages/home/more-about/more-about';
import OurTables from '@/components/pages/home/our-tables/our-tables';
import WhatIs from '@/components/pages/home/whatIs/whatIs';
import WhyPalgam from '@/components/pages/home/why-palgam/why-palgam';

export default function Home() {
   return (
      <div>
         <HomeBanner />
         <WhatIs />
         <WhyPalgam />
         <MoreAbout />
         <OurTables />
         <DownloadApp />
      </div>
   );
}
