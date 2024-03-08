import Image from 'next/image';

// Styles
import TermsStyle from './terms.style';

// Assets
import termsPeoplePic from '@/assets/images/termsPeoplePic.png';

function Terms() {
   return (
      <TermsStyle className="relative">
         <div className="flex flex-col pt-[90px] customMd:flex-row customMd:items-start customMd:gap-12 customMd:pt-[80px]">
            <div className="max-w-[552px] shrink-0 customMd:sticky customMd:top-[80px]">
               <Image src={termsPeoplePic} alt="terms" className="size-full" />
            </div>
            <div className="mt-12 px-4 customMd:px-0 customMd:pe-20">
               <p className="text-center font-poppinsExtraBold text-[32px] leading-[48px] text-white customMd:text-start customMd:text-[40px] customMd:leading-[64px]">
                  Terms and Conditions
               </p>

               <div className="mt-6 space-y-6 customMd:mt-12 customMd:space-y-12">
                  <div className="flex items-start gap-[34px]">
                     <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                        1
                     </p>
                     <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                     </p>
                  </div>
                  <div className="flex items-start gap-[34px]">
                     <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                        2
                     </p>
                     <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                     </p>
                  </div>
                  <div className="flex items-start gap-[34px]">
                     <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                        3
                     </p>
                     <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley
                     </p>
                  </div>
                  <div className="flex items-start gap-[34px]">
                     <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                        4
                     </p>
                     <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley
                        the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                     </p>
                  </div>
                  <div className="flex items-start gap-[34px]">
                     <p className="font-poppinsExtraBold text-[32px] leading-[48px] text-[#8C72E2] customMd:text-[40px] customMd:leading-[64px]">
                        5
                     </p>
                     <p className="font-poppinsThin text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </TermsStyle>
   );
}

export default Terms;
