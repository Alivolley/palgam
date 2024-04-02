import axiosInstance from '@/configs/axiosInstance';

function Privacy({ privacyData }) {
   return (
      <div>
         <div className="sticky top-0 overflow-hidden border-b border-solid border-[#ffffff26] bg-[#080609]">
            <div className="pb-12 pt-[143px] text-center text-white">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] customMd:text-[40px] customMd:leading-[64px]">
                  Privacy Policy
               </p>
            </div>
            <div
               className="absolute inset-0 rounded-[1512px] opacity-[0.15] blur-[200px]"
               style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
            />
         </div>
         <div className="mx-auto mt-6 max-w-[1112px] space-y-6 px-4 customMd:mt-12 customMd:space-y-12 customLg:px-0">
            <div className="flex items-start gap-[34px]">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                  {/* 1 */}
               </p>
               <pre className="whitespace-pre-line font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                  {privacyData?.data?.privacyPolicy?.description}
               </pre>
            </div>
            {/* <div className="flex items-start gap-[34px]">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                  2
               </p>
               <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries. of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries. of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries.
               </p>
            </div>
            <div className="flex items-start gap-[34px]">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                  3
               </p>
               <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley
               </p>
            </div>
            <div className="flex items-start gap-[34px]">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                  4
               </p>
               <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries.
               </p>
            </div>
            <div className="flex items-start gap-[34px]">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                  5
               </p>
               <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries.
               </p>
            </div>
            <div className="flex items-start gap-[34px]">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                  6
               </p>
               <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries.
               </p>
            </div>
            <div className="flex items-start gap-[34px]">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                  7
               </p>
               <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries.
               </p>
            </div> */}
         </div>
      </div>
   );
}

export default Privacy;

export async function getStaticProps(context) {
   const privacyData = await axiosInstance(`page/?lang=${context.locale}&page=suppurt_pages`).then(res => res.data);

   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
         privacyData,
      },
      revalidate: 60,
   };
}
