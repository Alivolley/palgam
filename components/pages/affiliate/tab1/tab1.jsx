import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';

// Assets
import tab1Icon1 from '@/assets/images/affiliate/tab1icon1.png';
import tab1Icon2 from '@/assets/images/affiliate/tab1icon2.png';
import tab1Icon3 from '@/assets/images/affiliate/tab1icon3.png';
import tab1Icon4 from '@/assets/images/affiliate/tab1icon4.png';
import tab1Icon5 from '@/assets/images/affiliate/tab1icon5.png';
import tab1Icon6 from '@/assets/images/affiliate/tab1Icon6.png';
import tab1Icon7 from '@/assets/images/affiliate/tab1Icon7.png';
import tab1Icon8 from '@/assets/images/affiliate/tab1Icon8.png';
import tab1Icon9 from '@/assets/images/affiliate/tab1Icon9.png';
import tab1Icon10 from '@/assets/images/affiliate/tab1Icon10.png';
import tab1Icon11 from '@/assets/images/affiliate/tab1Icon11.png';
import tab1Icon12 from '@/assets/images/affiliate/tab1Icon12.png';
import tab1Icon13 from '@/assets/images/affiliate/tab1Icon13.png';
import tab1Icon14 from '@/assets/images/affiliate/tab1Icon14.png';
import tab1Icon15 from '@/assets/images/affiliate/tab1Icon15.png';
import tab1Icon16 from '@/assets/images/affiliate/tab1Icon16.png';
import tab1Icon17 from '@/assets/images/affiliate/tab1Icon17.png';

function Tab1({ affiliateData }) {
   const [expanded, setExpanded] = useState(false);

   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <div className="relative mt-14 px-4 customMd:px-20">
         <div
            className="absolute inset-x-0 top-[-200px] z-[0] h-[528px] rounded-[1512px] opacity-[0.15] blur-[200px]"
            style={{ background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)' }}
         />

         <div className="text-center">
            <p className="font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
               {affiliateData?.data?.section2?.title}
            </p>
            <p className="font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
               {affiliateData?.data?.section2?.description}
            </p>
         </div>

         <div className="mt-16 flex flex-col items-center gap-6">
            <div
               className={`transition-all duration-500 ${!expanded || expanded !== 'panel1' ? 'w-full customLg:w-[872px]' : 'w-full'}`}
            >
               <Accordion
                  sx={{
                     background: 'linear-gradient(270deg, rgba(88, 34, 233, 0.40) 0%, rgba(88, 34, 233, 0.08) 100%)',
                     borderRadius: '24px !important',
                     transition: 'all 0.5s',
                  }}
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{
                        height: isDesktop ? '120px' : '96px',
                        paddingX: isDesktop ? '45px' : '',
                        '.Mui-expanded': {
                           svg: {
                              transform: 'rotate(45deg)',
                           },
                        },
                     }}
                  >
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        {affiliateData?.data?.section2?.features1?.title}
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon1} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features1?.text1}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features1?.description1}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon2} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features1?.text2}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features1?.description2}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon3} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features1?.text3}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features1?.description3}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon4} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features1?.text4}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features1?.description4}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon5} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features1?.text5}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features1?.description5}
                           </p>
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div
               className={`transition-all duration-500 ${!expanded || expanded !== 'panel2' ? 'w-full customLg:w-[872px]' : 'w-full'}`}
            >
               <Accordion
                  sx={{
                     background: 'linear-gradient(270deg, rgba(25, 194, 149, 0.40) 0%, rgba(25, 194, 149, 0.08) 100%)',
                     borderRadius: '24px !important',
                     transition: 'all 0.5s',
                  }}
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{
                        height: isDesktop ? '120px' : '96px',
                        paddingX: isDesktop ? '45px' : '',
                        '.Mui-expanded': {
                           svg: {
                              transform: 'rotate(45deg)',
                           },
                        },
                     }}
                  >
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        {affiliateData?.data?.section2?.features2?.title}
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon6} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features2?.text1}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features2?.description1}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon7} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features2?.text2}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features2?.description2}
                           </p>
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div
               className={`transition-all duration-500 ${!expanded || expanded !== 'panel3' ? 'w-full customLg:w-[872px]' : 'w-full'}`}
            >
               <Accordion
                  sx={{
                     background: 'linear-gradient(270deg, rgba(221, 67, 240, 0.40) 0%, rgba(221, 67, 240, 0.08) 100%)',
                     borderRadius: '24px !important',
                     transition: 'all 0.5s',
                  }}
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{
                        height: isDesktop ? '120px' : '96px',
                        paddingX: isDesktop ? '45px' : '',
                        '.Mui-expanded': {
                           svg: {
                              transform: 'rotate(45deg)',
                           },
                        },
                     }}
                  >
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        {affiliateData?.data?.section2?.features3?.title}
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon8} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features3?.text1}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features3?.description1}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon9} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features3?.text2}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features3?.description2}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon10} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features3?.text3}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features3?.description3}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon11} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features3?.text4}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features3?.description4}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon12} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features3?.text5}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features3?.description5}
                           </p>
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div
               className={`transition-all duration-500 ${!expanded || expanded !== 'panel4' ? 'w-full customLg:w-[872px]' : 'w-full'}`}
            >
               <Accordion
                  sx={{
                     background:
                        'linear-gradient(270deg, rgba(140, 114, 226, 0.40) 0%, rgba(140, 114, 226, 0.08) 100%)',
                     borderRadius: '24px !important',
                     transition: 'all 0.5s',
                  }}
                  expanded={expanded === 'panel4'}
                  onChange={handleChange('panel4')}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{
                        height: isDesktop ? '120px' : '96px',
                        paddingX: isDesktop ? '45px' : '',
                        '.Mui-expanded': {
                           svg: {
                              transform: 'rotate(45deg)',
                           },
                        },
                     }}
                  >
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        {affiliateData?.data?.section2?.features4?.title}
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon13} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features4?.text1}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features4?.description1}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon14} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features4?.text2}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features4?.description2}
                           </p>
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div
               className={`transition-all duration-500 ${!expanded || expanded !== 'panel5' ? 'w-full customLg:w-[872px]' : 'w-full'}`}
            >
               <Accordion
                  sx={{
                     background:
                        'linear-gradient(270deg, rgba(135, 242, 252, 0.40) 0%, rgba(135, 242, 252, 0.08) 100%)',
                     borderRadius: '24px !important',
                     transition: 'all 0.5s',
                  }}
                  expanded={expanded === 'panel5'}
                  onChange={handleChange('panel5')}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{
                        height: isDesktop ? '120px' : '96px',
                        paddingX: isDesktop ? '45px' : '',
                        '.Mui-expanded': {
                           svg: {
                              transform: 'rotate(45deg)',
                           },
                        },
                     }}
                  >
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        {affiliateData?.data?.section2?.features5?.title}
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon15} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features5?.text1}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features5?.description1}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon16} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features5?.text2}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features5?.description2}
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon17} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 {affiliateData?.data?.section2?.features5?.text3}
                              </span>{' '}
                              {affiliateData?.data?.section2?.features5?.description3}
                           </p>
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
         </div>
      </div>
   );
}

export default Tab1;
