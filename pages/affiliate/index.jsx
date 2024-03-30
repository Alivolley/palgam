import Image from 'next/image';
import { useRef, useState } from 'react';

// MUI
import { Tab, Tabs, useMediaQuery } from '@mui/material';

// Icons

// Assets
import bannerBackground1 from '@/assets/images/affiliate/bannerBackground1.png';
import bannerBackground2 from '@/assets/images/affiliate/bannerBackground2.png';
import bannerBackground1Mobile from '@/assets/images/affiliate/bannerBackground1Mobile.png';
import bannerBackground2Mobile from '@/assets/images/affiliate/bannerBackground2Mobile.png';

// Components
import Tab1 from '@/components/pages/affiliate/tab1/tab1';
import Tab2 from '@/components/pages/affiliate/tab2/tab2';
import Tab3 from '@/components/pages/affiliate/tab3/tab3';
import Tab4 from '@/components/pages/affiliate/tab4/tab4';
import Tab5 from '@/components/pages/affiliate/tab5/tab5';
import AffiliateStyle from './affiliate.style';
import axiosInstance from '@/configs/axiosInstance';

function Affiliate({ affiliateData }) {
   const [tabsValue, setTabsValue] = useState(1);
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   const firstBg = useRef();
   const secondBg = useRef();

   const parallaxHandler = e => {
      if (isDesktop) {
         const firstX = (window.innerWidth - e.pageX * 8) / 100;
         const firstY = (window.innerHeight - e.pageY * 8) / 100;
         const secondX = (window.innerWidth - e.pageX * -8) / 100;
         const secondY = (window.innerHeight - e.pageY * -8) / 100;

         firstBg.current.style.transform = `translateX(${firstX}px) translateY(${firstY}px)`;
         secondBg.current.style.transform = `translateX(${secondX}px) translateY(${secondY}px)`;
      }
   };

   return (
      <AffiliateStyle>
         <div className="relative h-[1000px] overflow-hidden customMd:h-[1700px]" onMouseMove={parallaxHandler}>
            <div className="absolute inset-x-0 top-0 customMd:left-[-150px] customMd:right-[-20px]" ref={secondBg}>
               <Image
                  src={isDesktop ? bannerBackground2 : bannerBackground2Mobile}
                  alt="background"
                  className="size-full object-cover"
               />
            </div>
            <div
               className="absolute inset-x-0 top-[100px] customMd:left-[-20px] customMd:right-[-150px] customMd:top-[-150px]"
               ref={firstBg}
            >
               <Image
                  src={isDesktop ? bannerBackground1 : bannerBackground1Mobile}
                  alt="background"
                  className="size-full object-cover"
               />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 customMd:top-[-250px] customMd:px-0">
               <p
                  className="mb-12 rounded-2xl bg-[#ffffff1a] px-6 py-2 text-center font-poppinsLight
                   text-xs leading-[24px] text-white backdrop-blur-[12px] customMd:text-[18px] customMd:leading-[32px]"
               >
                  {affiliateData?.data?.section1?.label}
               </p>
               <p className="text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
                  {affiliateData?.data?.section1?.title}
               </p>
               <p className="max-w-[1167px] text-center font-poppinsLight text-xs leading-[24px] text-[#ffffffb3] customMd:text-[18px] customMd:leading-[32px]">
                  {affiliateData?.data?.section1?.description}
               </p>
            </div>
         </div>

         <div className="relative z-[1] border-b border-solid border-[#ffffff26] px-4 pt-[100px] customMd:px-20">
            <Tabs
               value={tabsValue}
               onChange={(e, newValue) => setTabsValue(newValue)}
               textColor="secondary"
               indicatorColor="secondary"
               variant="scrollable"
            >
               <Tab label="Unique Features" value={1} />
               <Tab label="Our Tables" value={2} />
               <Tab label="Earnings, Profits and Commissions" value={3} />
               <Tab label="IMPORTANT!!!" value={4} />
               <Tab label="Frequently Asked Questions" value={5} />
            </Tabs>
         </div>

         <div>
            {tabsValue === 1 ? (
               <Tab1 affiliateData={affiliateData} />
            ) : tabsValue === 2 ? (
               <Tab2 affiliateData={affiliateData} />
            ) : tabsValue === 3 ? (
               <Tab3 affiliateData={affiliateData} />
            ) : tabsValue === 4 ? (
               <Tab4 affiliateData={affiliateData} />
            ) : tabsValue === 5 ? (
               <Tab5 affiliateData={affiliateData} />
            ) : null}
         </div>
      </AffiliateStyle>
   );
}

export default Affiliate;

export async function getStaticProps(context) {
   const affiliateData = await axiosInstance(`page/?lang=${context.locale}&page=affiliate_page`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         affiliateData,
      },
      revalidate: 5,
   };
}
