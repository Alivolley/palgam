import { useState } from 'react';

// MUI
import { Button, Drawer } from '@mui/material';

// Icons
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

// Assets
import Image from 'next/image';
import downloadAppTestPic from '@/assets/images/downloadAppTestPic.png';

function AppStoreModal({ open, onClose }) {
   const [step, setStep] = useState(1);

   const backStepHandler = () => {
      if (step > 1) {
         setStep(prev => prev - 1);
      }
   };

   const forwardStepHandler = () => {
      if (step < 10) {
         setStep(prev => prev + 1);
      }
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
                     Before downloading iOS version, be sure to pay attention to the following points.
                  </p>
                  <Button className="shrink-0 rounded-full" onClick={onClose}>
                     <IoIosCloseCircleOutline fontSize="32px" color="white" />
                  </Button>
               </div>

               <div className="mt-6 flex flex-col gap-4 rounded-3xl bg-[#ffffff0a] p-3 customMd:flex-row customMd:gap-6 customMd:p-4">
                  <div className="mx-auto h-[320px] shrink-0 customMd:h-[488px] customMd:w-[240px]">
                     <Image src={downloadAppTestPic} alt="mobile" className="size-full" />
                  </div>

                  <div className="flex flex-col gap-2 customMd:grow customMd:gap-6">
                     <div
                        className="flex w-full flex-col items-center justify-center gap-1 rounded-lg
                      border border-solid border-[#ffffff26] px-2 py-1 customMd:grow customMd:rounded-2xl"
                     >
                        <p className="font-poppinsExtraBold text-xl leading-7 text-[#ffffffb3] customMd:text-[40px] customMd:leading-[64px]">
                           Step {step} of 9
                        </p>
                        <p className="font-poppinsExtraLight text-xs leading-6 text-white customMd:text-[18px] customMd:leading-8">
                           Go to setting
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
                           disabled={step === 9}
                           onClick={forwardStepHandler}
                        >
                           <GoArrowRight size="24px" />
                        </Button>
                     </div>
                     {step === 9 && (
                        <Button className="mt-2 h-12 rounded-xl border border-solid border-[#ffffff80] font-poppinsLight text-xs text-white customMd:hidden">
                           Download
                        </Button>
                     )}
                  </div>
               </div>
               {step === 9 && (
                  <Button
                     className="mt-6 hidden h-14 rounded-2xl border border-solid border-[#ffffff80] font-poppinsLight text-sm text-white customMd:block"
                     fullWidth
                  >
                     Download
                  </Button>
               )}
            </div>
         </div>
      </Drawer>
   );
}

export default AppStoreModal;
