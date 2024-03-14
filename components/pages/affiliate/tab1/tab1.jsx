import { useState } from 'react';
import Image from 'next/image';

// MUI
import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@mui/material';

// Icons
import { FiPlus } from 'react-icons/fi';

// Assets
import tab1Icon1 from '@/assets/images/affiliate/tab1Icon1.png';
import tab1Icon2 from '@/assets/images/affiliate/tab1Icon2.png';
import tab1Icon3 from '@/assets/images/affiliate/tab1Icon3.png';
import tab1Icon4 from '@/assets/images/affiliate/tab1Icon4.png';
import tab1Icon5 from '@/assets/images/affiliate/tab1Icon5.png';
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

function Tab1() {
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
               Unique Features
            </p>
            <p className="font-poppinsExtraLight text-xs leading-6 text-[#ffffffb3] customMd:text-[18px] customMd:leading-8">
               Palgam is a blockchain-based gaming application for iOS and Android devices. Users can compete in games
               and win prizes. Palgam includes five popular games: Hokam,Poker, Backgammon, Table Soccer, and Billiards.
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
                        Licensing and Accessibility
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon1} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Palgam is legally authorized:</span> in many
                              countries, including Canada, and accessible through Google Play and the Apple Store in
                              different countries.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon2} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Curacao License:</span> Our dedication to
                              financial integrity and accountability.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon3} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Smart Contract Verification License:</span>{' '}
                              Guarantees that Palgam s operations, including our affiliate program, run on a fully
                              decentralized system, eliminating any room for manipulation.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon4} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">RNG Testing License:</span> Ensures that all game
                              outcomes are generated with absolute randomness, maintaining a fair play environment free
                              from internal or external interference.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon5} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Apple Store and Google Play Licenses:</span>{' '}
                              Affirms our app s quality and reliability, having passed thorough evaluations for honesty,
                              transparency, and functionality by tech giants Apple and Google.
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
                        Blockchain Security, Decentralization & User Privacy
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon6} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Decentralized Cryptocurrency Wallet:</span> This
                              feature allows financial transactions within the app to be used as a decentralized
                              cryptocurrency wallet. Palgam does not have access to users funds. Balances are stored in
                              a decentralized blockchain environment, secured by 12 security words.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon7} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 Decentralized games and execution via smart contracts prevent cheating:
                              </span>{' '}
                              All payments are made through smart contracts, ensuring transparency and speed.
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
                        Next Level Gaming Experience
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon8} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Play to earn feature</span> & real player betting
                              in games.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon9} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Superior Graphics:</span> Palgam app pages are
                              designed with stunning, attractive, and professional graphics by top designers.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon10} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Five Popular and Well-Known Games:</span> These
                              games are so popular that almost every user knows at least one of them
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon11} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 Play with Friends with features like chat and choosing the amount:
                              </span>{' '}
                              In Palgam, you can invite your friend to a game and compete with or without betting.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon12} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Exciting Tournaments:</span> Tournaments are a
                              prominent feature of this application.
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
                        Rewards and Incentives
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon13} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">$1 Bonus to Users After 20 Wins:</span> Any user
                              who achieves 20 wins at free tables receives a $1 bonus from the application.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon14} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">Referral Code Bonus for Users:</span> Palgam
                              offers a $1 bonus to every user who registers using a referral code
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
                        User Support and Accessibility
                     </p>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className="space-y-8 px-0 customMd:px-[30px]">
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon15} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">24-hour support application:</span> with language
                              settings available in English,Arabic, Spanish, and Russian.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon16} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">The possibility of depositing and</span>{' '}
                              withdrawing money using Tether cryptocurrency, MasterCard, and Visa cards.
                           </p>
                        </div>
                        <div className="rounded-3xl border border-solid border-[#ffffff26] px-4 py-6 customMd:px-6">
                           <div className="size-[72px] customMd:size-20">
                              <Image src={tab1Icon17} alt="icon" className="size-full" />
                           </div>
                           <p className="mt-4 font-poppinsExtraLight text-sm leading-6 customMd:text-[18px] customMd:leading-8">
                              <span className="font-poppinsExtraBold">
                                 Registration without email, password, or mobile phone number:
                              </span>{' '}
                              At registration, a user selects a username, and a wallet is created with 12security words
                              to be saved. To log in, the user enters the 12 security words received at registration.
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
