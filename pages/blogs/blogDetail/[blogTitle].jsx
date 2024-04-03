/* eslint-disable react/no-danger */
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Image from 'next/image';

// MUI
import { Button } from '@mui/material';

// Icons
import { GoArrowLeft } from 'react-icons/go';

// Styles
import BlogDetailStyle from './blogDetail.style';
import axiosInstance from '@/configs/axiosInstance';

function BlogDetail({ blogDetail }) {
   const { back } = useRouter();
   const t = useTranslations('blogs');

   return (
      <BlogDetailStyle className="relative">
         <div className="absolute inset-x-0 h-[528px]" id="gradientElem" />
         <div className="relative mx-auto max-w-[1112px] px-4 pt-[144px] customMd:pt-[175px]">
            <Button
               startIcon={<GoArrowLeft size="24px" />}
               onClick={back}
               sx={{
                  color: '#fff',
                  fontFamily: 'poppinsExtraBold',
                  fontSize: '18px',
                  lineHeight: '24px',
                  ':hover': { backgroundColor: 'transparent', color: '#ffffff80' },
               }}
            >
               {t('Go back')}
            </Button>
            <div className="my-8 h-px bg-[#ffffff4d]" />

            <div className="relative aspect-video w-full overflow-hidden rounded-[24px] border border-solid border-[#ffffff26]">
               <Image src={blogDetail?.banner} alt="blog" className="object-cover" fill />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-y-4">
               <div className="flex flex-wrap items-center gap-4">
                  {blogDetail?.categories?.map(item => (
                     <p
                        key={crypto.randomUUID()}
                        className="whitespace-nowrap rounded-xl bg-[#ffffff26] px-6 py-3 font-poppinsExtraLight text-10
                   leading-[14px] text-[#ffffff80] customSm:text-xs customSm:leading-5 customMd:py-[18px]"
                     >
                        {item}
                     </p>
                  ))}
               </div>
               <p className="font-poppinsThin text-xs leading-6 text-[#ffffff4d] customMd:text-[18px] customMd:leading-8">
                  {blogDetail?.created_at} | By {blogDetail?.author}
               </p>
            </div>

            <div className="mt-12">
               <p className="max-w-[745px] font-poppinsExtraBold text-[32px] leading-[48px] text-white customMd:text-[40px] customMd:leading-[64px]">
                  {blogDetail?.title}
               </p>
               <div
                  id="content"
                  className="mt-2 font-poppinsThin text-xs leading-6 text-[#ffffff80] customMd:text-[18px] customMd:leading-8"
                  dangerouslySetInnerHTML={{ __html: blogDetail?.text }}
               />
            </div>
         </div>
      </BlogDetailStyle>
   );
}

export default BlogDetail;

export async function getServerSideProps(context) {
   const { query } = context;

   const blogDetail = await axiosInstance(`blog/detail?lang=${context.locale}&title=${query?.blogTitle}`).then(
      res => res.data
   );

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         blogDetail,
      },
   };
}
