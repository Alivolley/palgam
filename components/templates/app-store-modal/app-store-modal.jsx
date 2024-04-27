import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useState } from 'react';

// MUI
import { Button, CircularProgress, Drawer } from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

// Assets
import Image from 'next/image';

// Apis
import useGetSteps from '@/apis/adminPanel/others/useGetSteps';
import useGetStoreLink from '@/apis/adminPanel/home/useGetStoreLink';

function AppStoreModal({ open, onClose }) {
   const [step, setStep] = useState(1);

   const { locale } = useRouter();
   const { data: stepsData, isLoading: stepsIsLoading } = useGetSteps(locale);
   const { data: storeLinkData } = useGetStoreLink();

   const t = useTranslations('header');

   const backStepHandler = () => {
      if (step > 1) {
         setStep(prev => prev - 1);
      }
   };

   const forwardStepHandler = () => {
      if (step < stepsData?.data?.length) {
         setStep(prev => prev + 1);
      }
   };

   const downloadIosHandler = () => {
      window.location.href = storeLinkData?.app_store_link;
   };

   return (
      <Drawer
         anchor="bottom"
         open={open}
         onClose={onClose}
         sx={{
            '.MuiPaper-root': { backgroundColor: 'transparent' },
            '.MuiBackdrop-root': { backgroundColor: 'transparent' },
         }}
      >
         <div
            className="flex max-h-screen min-h-screen flex-col items-center justify-center
                    bg-[#00000099] p-4 backdrop-blur-[12px]"
         >
            <div className="max-w-[640px] overflow-auto rounded-3xl bg-[#080609] p-6">
               <div className="flex items-start justify-between">
                  <p className="mt-7 font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                     {t('Before downloading')}
                  </p>
                  <Button className="shrink-0 rounded-full" onClick={onClose}>
                     <IoIosCloseCircleOutline fontSize="32px" color="white" />
                  </Button>
               </div>

               {stepsIsLoading ? (
                  <div className="mt-10 flex items-center justify-center p-5">
                     <CircularProgress color="secondary" />
                  </div>
               ) : (
                  <>
                     {stepsData?.data?.map(
                        item =>
                           step === item?.step && (
                              <div
                                 className="mt-6 flex flex-col gap-4 rounded-3xl bg-[#ffffff0a] p-3 customMd:flex-row customMd:gap-6 customMd:p-4"
                                 key={item?.step}
                              >
                                 <div className="relative mx-auto h-[320px] w-full shrink-0 customMd:h-[488px] customMd:w-[240px]">
                                    <Image src={item?.image || ''} alt="mobile" className="object-contain" fill />
                                 </div>

                                 <div className="flex flex-col gap-2 customMd:grow customMd:gap-6">
                                    <div
                                       className="flex w-full flex-col items-center justify-center gap-1 rounded-lg
                      border border-solid border-[#ffffff26] px-2 py-1 customMd:grow customMd:rounded-2xl"
                                    >
                                       <p className="font-poppinsExtraBold text-xl leading-7 text-[#ffffffb3] customMd:text-[40px] customMd:leading-[64px]">
                                          {t('Step')} {step} {t('of')} {stepsData?.data?.length}
                                       </p>
                                       <p className="font-poppinsExtraLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                                          {item?.description}
                                       </p>
                                    </div>
                                    <div className="flex items-center gap-2 customMd:gap-6">
                                       <Button
                                          className="h-7 !flex-1 rounded-lg border border-solid border-[#ffffff26] bg-[#ffffff0d] 
                           text-white disabled:bg-transparent customMd:h-12 customMd:rounded-2xl"
                                          disabled={step === 1}
                                          onClick={backStepHandler}
                                       >
                                          <GoArrowLeft size="24px" />
                                       </Button>
                                       <Button
                                          className="h-7 !flex-1 rounded-lg border border-solid border-[#ffffff26] bg-[#ffffff0d] 
                           text-white disabled:bg-transparent customMd:h-12 customMd:rounded-2xl"
                                          disabled={step === stepsData?.data?.length}
                                          onClick={forwardStepHandler}
                                       >
                                          <GoArrowRight size="24px" />
                                       </Button>
                                    </div>
                                    {step === stepsData?.data?.length && (
                                       <Button
                                          className="mt-2 h-12 rounded-xl border border-solid border-[#ffffff80] font-poppinsLight text-xs text-white customMd:hidden"
                                          onClick={downloadIosHandler}
                                       >
                                          {t('Download')}
                                       </Button>
                                    )}
                                 </div>
                              </div>
                           )
                     )}

                     {step === stepsData?.data?.length && (
                        <Button
                           className="mt-6 hidden h-14 rounded-2xl border border-solid border-[#ffffff80] font-poppinsLight text-sm text-white customMd:block"
                           fullWidth
                           onClick={downloadIosHandler}
                        >
                           {t('Download')}
                        </Button>
                     )}
                  </>
               )}
            </div>
         </div>
      </Drawer>
   );
}

export default AppStoreModal;
