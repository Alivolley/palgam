/* eslint-disable react/no-danger */
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Styles
import WhitePaperStyle from './whitePaper.style';

// Assets
import whitePaperPic from '@/assets/images/whitePaperPic.png';
import axiosInstance from '@/configs/axiosInstance';

function WhitePaper({ whitePaperData }) {
   const t = useTranslations('footer');

   return (
      <WhitePaperStyle className="relative">
         <div className="flex flex-col pt-[90px] customMd:flex-row customMd:items-start customMd:gap-12 customMd:pt-[80px]">
            <div className="max-w-[552px] shrink-0 customMd:sticky customMd:top-[80px] customMd:h-screen">
               <Image src={whitePaperPic} alt="terms" className="size-full object-cover" />
            </div>
            <div className="mt-12 px-4 customMd:px-0 customMd:pe-20">
               <p className="text-center font-poppinsExtraBold text-[32px] leading-[48px] text-white customMd:text-start customMd:text-[40px] customMd:leading-[64px]">
                  {t('White paper')}
               </p>

               <div className="mt-6 space-y-6 customMd:mt-12 customMd:space-y-12">
                  <div className="pl-[34px]">
                     <div
                        id="content"
                        className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8"
                        dangerouslySetInnerHTML={{ __html: whitePaperData?.data?.whitePaper?.description }}
                     />
                  </div>
               </div>
            </div>
         </div>
      </WhitePaperStyle>
   );
}

export default WhitePaper;

export async function getStaticProps(context) {
   const whitePaperData = await axiosInstance(`page/?lang=${context.locale}&page=suppurt_pages`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         whitePaperData,
      },
      revalidate: 60,
   };
}
