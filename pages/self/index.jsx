import { useTranslations } from 'next-intl';

function Self() {
   const t = useTranslations('footer');

   return (
      <div className="min-h-[calc(100vh-200px)]">
         <div className="sticky top-0 overflow-hidden border-b border-solid border-[#ffffff26] bg-[#080609]">
            <div className="pb-12 pt-[143px] text-center text-white">
               <p className="font-poppinsExtraBold text-[32px] leading-[48px] customMd:text-[40px] customMd:leading-[64px]">
                  {t('Self-Exclusion Process')}
               </p>
            </div>
            <div
               className="absolute inset-0 rounded-[1512px] opacity-[0.15] blur-[200px]"
               style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
            />
         </div>
         <div className="mx-auto mt-6 max-w-[1112px] space-y-6 px-4 customMd:mt-12 customMd:space-y-12 customLg:px-0">
            <div className="pl-[34px]">
               <pre className="whitespace-pre-line font-poppinsLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                  {t('text')}
               </pre>
            </div>
         </div>
      </div>
   );
}

export default Self;

export async function getStaticProps(context) {
   return {
      props: {
         messages: (await import(`@/messages/${context.locale}.json`)).default,
      },
      revalidate: 60,
   };
}
