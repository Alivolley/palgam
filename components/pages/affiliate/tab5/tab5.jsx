import { useState } from 'react';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';

function Tab5() {
   const [expanded, setExpanded] = useState(false);
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
   };

   return (
      <div className="relative mt-14 px-4 customMd:px-20">
         <div
            className="absolute inset-y-0 left-[-300px] w-[610px] rounded-[1512px] opacity-[0.1] blur-[200px]"
            style={{ background: 'linear-gradient(180deg, #19C295 0%, #87F2FC 100%)' }}
         />

         <p className="relative text-center font-arimaBold text-[50px] leading-[56px] text-white customMd:text-[88px] customMd:leading-[112px]">
            Frequently Asked Questions
         </p>

         <div className="relative mt-[120px]">
            <div>
               <Accordion
                  expanded={expanded === 'panel1'}
                  onChange={handleChange('panel1')}
                  sx={{ background: 'none', boxShadow: 'none' }}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{ '.Mui-expanded': { svg: { transform: 'rotate(45deg)' } } }}
                  >
                     <p className="font-poppinsExtraBold text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                        1.How can I have a custom referral code with my desired name?
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        Commission in Tether: Your commission is calculated in Tether (USDT), where 1 Tether equals 1
                        USD. You can withdraw your commission at any moment from the Settings/Referral Code section in
                        the app.
                     </p>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="my-6 h-px bg-[#ffffff26]" />
            <div>
               <Accordion
                  expanded={expanded === 'panel2'}
                  onChange={handleChange('panel2')}
                  sx={{ background: 'none', boxShadow: 'none' }}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{ '.Mui-expanded': { svg: { transform: 'rotate(45deg)' } } }}
                  >
                     <p className="font-poppinsExtraBold text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                        2.How will my Commission be paid?
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        Commission in Tether: Your commission is calculated in Tether (USDT), where 1 Tether equals 1
                        USD. You can withdraw your commission at any moment from the Settings/Referral Code section in
                        the app.
                     </p>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="my-6 h-px bg-[#ffffff26]" />

            <div>
               <Accordion
                  expanded={expanded === 'panel3'}
                  onChange={handleChange('panel3')}
                  sx={{ background: 'none', boxShadow: 'none' }}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{ '.Mui-expanded': { svg: { transform: 'rotate(45deg)' } } }}
                  >
                     <p className="font-poppinsExtraBold text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                        3. Is account recovery possible if I lose the 12 words given at registration?
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        Commission in Tether: Your commission is calculated in Tether (USDT), where 1 Tether equals 1
                        USD. You can withdraw your commission at any moment from the Settings/Referral Code section in
                        the app.
                     </p>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="my-6 h-px bg-[#ffffff26]" />

            <div>
               <Accordion
                  expanded={expanded === 'panel4'}
                  onChange={handleChange('panel4')}
                  sx={{ background: 'none', boxShadow: 'none' }}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{ '.Mui-expanded': { svg: { transform: 'rotate(45deg)' } } }}
                  >
                     <p className="font-poppinsExtraBold text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                        4.How long does it take for my commission to be added to my Palgam account?
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        Commission in Tether: Your commission is calculated in Tether (USDT), where 1 Tether equals 1
                        USD. You can withdraw your commission at any moment from the Settings/Referral Code section in
                        the app.
                     </p>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="my-6 h-px bg-[#ffffff26]" />

            <div>
               <Accordion
                  expanded={expanded === 'panel5'}
                  onChange={handleChange('panel5')}
                  sx={{ background: 'none', boxShadow: 'none' }}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{ '.Mui-expanded': { svg: { transform: 'rotate(45deg)' } } }}
                  >
                     <p className="font-poppinsExtraBold text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                        5.Will the losses of my referrals lead to a negative balance for me?
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        Commission in Tether: Your commission is calculated in Tether (USDT), where 1 Tether equals 1
                        USD. You can withdraw your commission at any moment from the Settings/Referral Code section in
                        the app.
                     </p>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className="my-6 h-px bg-[#ffffff26]" />

            <div>
               <Accordion
                  expanded={expanded === 'panel6'}
                  onChange={handleChange('panel6')}
                  sx={{ background: 'none', boxShadow: 'none' }}
               >
                  <AccordionSummary
                     expandIcon={<FiPlus size={isDesktop ? '25px' : '18px'} />}
                     sx={{ '.Mui-expanded': { svg: { transform: 'rotate(45deg)' } } }}
                  >
                     <p className="font-poppinsExtraBold text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                        6.Why emphasize that the affiliate program in Palgam is decentralized and based on smart
                        contracts?
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <p className="font-poppinsExtraLight text-xs leading-6 customMd:text-[18px] customMd:leading-8">
                        Commission in Tether: Your commission is calculated in Tether (USDT), where 1 Tether equals 1
                        USD. You can withdraw your commission at any moment from the Settings/Referral Code section in
                        the app.
                     </p>
                  </AccordionDetails>
               </Accordion>
            </div>
         </div>
      </div>
   );
}

export default Tab5;
