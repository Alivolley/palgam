/* eslint-disable react/no-danger */
import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Styles
import TermsStyle from './terms.style';

// Assets
import termsPeoplePic from '@/assets/images/termsPeoplePic.png';
import axiosInstance from '@/configs/axiosInstance';

function Terms({ termsData }) {
   const t = useTranslations('footer');

   return (
      <TermsStyle className="relative">
         <div className="flex flex-col pt-[90px] customMd:flex-row customMd:items-start customMd:gap-12 customMd:pt-[80px]">
            <div className="max-w-[552px] shrink-0 customMd:sticky customMd:top-[80px]">
               <Image src={termsPeoplePic} alt="terms" className="size-full" />
            </div>
            <div className="mt-12 px-4 customMd:px-0 customMd:pe-20">
               <p className="text-center font-poppinsExtraBold text-[32px] leading-[48px] text-white customMd:text-start customMd:text-[40px] customMd:leading-[64px]">
                  {t('Terms and conditions')}
               </p>

               <div className="mt-6 space-y-6 customMd:mt-12 customMd:space-y-12">
                  <div className="pl-[34px]">
                     <div
                        id="content"
                        className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8"
                        dangerouslySetInnerHTML={{ __html: termsData?.data?.terms?.description }}
                     />
                  </div>
               </div>
            </div>
         </div>
      </TermsStyle>
   );
}

export default Terms;

export async function getStaticProps(context) {
   const termsData = await axiosInstance(`page/?lang=${context.locale}&page=suppurt_pages`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         termsData,
      },
      revalidate: 60,
   };
}
