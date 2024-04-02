import Head from 'next/head';
import axiosInstance from '@/configs/axiosInstance';

// Components
import AboutUs from '@/components/pages/home/aboutUs/aboutUs';
import DownloadApp from '@/components/pages/home/download-app/download-app';
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import MoreAbout from '@/components/pages/home/more-about/more-about';
import OurTables from '@/components/pages/home/our-tables/our-tables';
import WhatIs from '@/components/pages/home/whatIs/whatIs';
import WhyPalgam from '@/components/pages/home/why-palgam/why-palgam';

export default function Home({ homePageData, othersData }) {
   return (
      <div>
         <Head>
            <title>{othersData?.site_name}</title>
            <meta name="author" content={othersData?.site_name} />
            <meta name="google-site-verification" content={othersData?.google_console} />
            <link rel="icon" href={othersData?.fav_icon} />
         </Head>
         <HomeBanner homePageData={homePageData} />
         <WhatIs homePageData={homePageData} />
         <WhyPalgam homePageData={homePageData} />
         <MoreAbout homePageData={homePageData} />
         <OurTables homePageData={homePageData} />
         <AboutUs homePageData={homePageData} />
         <DownloadApp homePageData={homePageData} />
      </div>
   );
}

export async function getStaticProps(context) {
   const homePageData = await axiosInstance(`page/?lang=${context.locale}&page=home_page`).then(res => res.data);
   const othersData = await axiosInstance(`page/other?lang=${context.locale}`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         homePageData,
         othersData,
      },
      revalidate: 60,
   };
}
