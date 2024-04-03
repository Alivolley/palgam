import { useTranslations } from 'next-intl';

// MUI
import { Grid } from '@mui/material';

import axiosInstance from '@/configs/axiosInstance';

function Licenses({ licenseData }) {
   const t = useTranslations('footer');

   return (
      <div>
         <div className="sticky top-0 overflow-hidden border-b border-solid border-[#ffffff26] bg-[#080609]">
            <div className="pb-12 pt-[143px] text-center text-white">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] customMd:text-[40px] customMd:leading-[64px]">
                  {t('Licenses')}
               </p>
               <p className="mt-2 font-poppinsExtraLight text-[12px] leading-6 customMd:text-[18px] customMd:leading-8">
                  {licenseData?.data?.license?.description}
               </p>
            </div>
            <div
               className="absolute inset-0 rounded-[1512px] opacity-[0.15] blur-[200px]"
               style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
            />
         </div>
         <div className="mx-auto mt-12 max-w-[1112px] px-4 customLg:px-0">
            <Grid container spacing="24px">
               <Grid item xs={12} md={6}>
                  <div className="rounded-3xl bg-[#dd43f01f] p-8 customMd:h-full customMd:min-h-[384px]">
                     <p className="flex size-[72px] items-center justify-center rounded-full bg-[#dd43f04d] font-poppinsExtraBold text-[40px] text-white">
                        1
                     </p>
                     <p className="mb-4 mt-8 font-poppinsExtraBold text-[20px] leading-7 text-white customMd:text-[24px] customMd:leading-8">
                        {licenseData?.data?.license?.block1?.title}
                     </p>
                     <p className="font-poppinsExtraLight text-[12px] leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        {licenseData?.data?.license?.block1?.description}
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className="rounded-3xl bg-[#19c2951f] p-8 customMd:h-full customMd:min-h-[384px]">
                     <p className="flex size-[72px] items-center justify-center rounded-full bg-[#19c2954d] font-poppinsExtraBold text-[40px] text-white">
                        2
                     </p>
                     <p className="mb-4 mt-8 font-poppinsExtraBold text-[20px] leading-7 text-white customMd:text-[24px] customMd:leading-8">
                        {licenseData?.data?.license?.block2?.title}
                     </p>
                     <p className="font-poppinsExtraLight text-[12px] leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        {licenseData?.data?.license?.block2?.description}
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className="rounded-3xl bg-[#8c72e21f] p-8 customMd:h-full customMd:min-h-[384px]">
                     <p className="flex size-[72px] items-center justify-center rounded-full bg-[#8c72e24d] font-poppinsExtraBold text-[40px] text-white">
                        3
                     </p>
                     <p className="mb-4 mt-8 font-poppinsExtraBold text-[20px] leading-7 text-white customMd:text-[24px] customMd:leading-8">
                        {licenseData?.data?.license?.block3?.title}
                     </p>
                     <p className="font-poppinsExtraLight text-[12px] leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        {licenseData?.data?.license?.block3?.description}
                     </p>
                  </div>
               </Grid>
               <Grid item xs={12} md={6}>
                  <div className="rounded-3xl bg-[#87f2fc1f] p-8 customMd:h-full customMd:min-h-[384px]">
                     <p className="flex size-[72px] items-center justify-center rounded-full bg-[#87f2fc4d] font-poppinsExtraBold text-[40px] text-white">
                        4
                     </p>
                     <p className="mb-4 mt-8 font-poppinsExtraBold text-[20px] leading-7 text-white customMd:text-[24px] customMd:leading-8">
                        {licenseData?.data?.license?.block4?.title}
                     </p>
                     <p className="font-poppinsExtraLight text-[12px] leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        {licenseData?.data?.license?.block4?.description}
                     </p>
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   );
}

export default Licenses;

export async function getStaticProps(context) {
   const licenseData = await axiosInstance(`page/?lang=${context.locale}&page=suppurt_pages`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         licenseData,
      },
      revalidate: 60,
   };
}
