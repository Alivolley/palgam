import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Drawer, Grow, Paper, Popper } from '@mui/material';

// Icons
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';
import { CgMenuLeft } from 'react-icons/cg';

// Components
import MobileMenu from '../mobile-menu/mobile-menu';

// Assets
import logoPic from '@/assets/images/Logo.png';
import downloadSvg from '@/assets/icons/Download.svg';
import usFlag from '@/assets/icons/usFlag.svg';
import ruFlag from '@/assets/icons/ruFlag.svg';
import esFlag from '@/assets/icons/esFlag.svg';

// Components
import DownloadAppModal from '@/components/templates/download-app-modal/download-app-modal';

const languageButtonSx = {
   height: '56px',
   paddingX: '12px',
   color: 'white',
   ':hover': { backgroundColor: '#221C34' },
};

function Header() {
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   const [languageDropDown, setLanguageDropDown] = useState(false);
   const [showLanguageDialog, setShowLanguageDialog] = useState(false);
   const [showDownloadModal, setShowDownloadModal] = useState(false);

   const languageRef = useRef();

   const { locale, push, query, pathname, asPath } = useRouter();

   const changeLanguage = newLang => {
      push({ pathname, query }, asPath, { locale: newLang });
   };

   useEffect(() => {
      setShowMobileMenu(false);
      setShowLanguageDialog(false);
   }, [pathname, query]);

   const showLanguageDialogHandler = () => {
      setShowMobileMenu(false);
      setShowLanguageDialog(true);
   };

   return (
      <header
         className="fixed inset-x-0 top-0 z-10 bg-[#00000066] px-4 py-3 backdrop-blur-[28px] customMd:px-20 customMd:py-4"
         data-aos="fade-down"
         data-aos-delay="900"
      >
         <div className="flex items-center justify-between">
            <Link href="/" className="block size-[72px] customMd:size-16">
               <Image src={logoPic} alt="logo" className="size-full" />
            </Link>
            <div className="hidden items-center gap-6 font-poppinsRegular text-[#ffffff4d] customMd:flex lg:gap-14">
               <Link
                  href="/"
                  className={`transition-all duration-200 hover:text-white ${pathname === '/' ? 'text-white' : ''}`}
               >
                  Home
               </Link>
               <Link
                  href="/blogs"
                  className={`transition-all duration-200 hover:text-white ${pathname.startsWith('/blogs') ? 'text-white' : ''}`}
               >
                  Blogs
               </Link>
               <Link
                  href="/"
                  className={`transition-all duration-200 hover:text-white ${pathname === '/some' ? 'text-white' : ''}`}
               >
                  White paper
               </Link>
               <Link
                  href="/"
                  className={`transition-all duration-200 hover:text-white ${pathname === '/some' ? 'text-white' : ''}`}
               >
                  Licenses
               </Link>
            </div>

            <div className="flex items-center gap-4">
               <Button
                  className="h-[48px] w-[153px] !rounded-xl !border !border-solid !border-[#ffffff80] !font-poppinsRegular
                   text-xs !leading-[24px] !text-white customMd:h-[56px] customMd:w-[170px] customMd:text-sm"
                  endIcon={
                     <div className="size-5 customMd:size-6">
                        <Image src={downloadSvg} alt="download" className="size-full" />
                     </div>
                  }
                  onClick={() => setShowDownloadModal(true)}
               >
                  Download
               </Button>
               <div
                  className="hidden h-[56px] w-[122px] items-center justify-center gap-2 rounded-xl
                   border border-solid border-[#ffffff80] text-white customMd:flex customMd:gap-[10px]"
                  ref={languageRef}
                  onMouseEnter={() => setLanguageDropDown(true)}
                  onMouseLeave={() => setLanguageDropDown(false)}
               >
                  <Image
                     src={locale === 'en' ? usFlag : locale === 'ru' ? ruFlag : locale === 'es' ? esFlag : null}
                     alt="flag"
                  />
                  <IoIosArrowDown
                     size="24px"
                     className={`transition-all duration-200 ${languageDropDown ? 'rotate-180' : ''}`}
                  />
               </div>

               <Button
                  className="size-[48px] !rounded-xl !border !border-solid !border-[#ffffff80] !text-white customMd:hidden"
                  onClick={() => setShowMobileMenu(true)}
               >
                  <CgMenuLeft fontSize="20px" color="white" />
               </Button>

               <Popper
                  open={languageDropDown}
                  anchorEl={languageRef.current}
                  transition
                  disablePortal
                  onMouseEnter={() => setLanguageDropDown(true)}
                  onMouseLeave={() => setLanguageDropDown(false)}
               >
                  {({ TransitionProps, placement }) => (
                     <Grow
                        {...TransitionProps}
                        style={{
                           transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                     >
                        <Paper
                           sx={{
                              backgroundColor: 'transparent',
                              boxShadow: 'none',
                              borderRadius: '12px',
                              overflow: 'hidden',
                           }}
                        >
                           <div className="flex min-w-[122px] flex-col bg-[#100C16]">
                              <Button
                                 className="!flex !items-center !justify-between !font-poppinsRegular"
                                 sx={languageButtonSx}
                                 onClick={() => changeLanguage('en')}
                              >
                                 <Image src={usFlag} alt="download" />
                                 EN
                              </Button>
                              <Button
                                 className="!flex !items-center !justify-between !font-poppinsRegular"
                                 sx={languageButtonSx}
                                 onClick={() => changeLanguage('ru')}
                              >
                                 <Image src={ruFlag} alt="download" />
                                 RU
                              </Button>
                              <Button
                                 className="!flex !items-center !justify-between !font-poppinsRegular"
                                 sx={languageButtonSx}
                                 onClick={() => changeLanguage('es')}
                              >
                                 <Image src={esFlag} alt="download" />
                                 ES
                              </Button>
                           </div>
                        </Paper>
                     </Grow>
                  )}
               </Popper>
            </div>
         </div>

         <Drawer
            anchor="bottom"
            open={showLanguageDialog}
            onClose={() => setShowLanguageDialog(false)}
            sx={{
               '.MuiPaper-root': { backgroundColor: 'transparent' },
               '.MuiBackdrop-root': { backgroundColor: 'transparent' },
            }}
         >
            <div className="h-full min-h-screen overflow-auto bg-[#00000099] py-[48px] backdrop-blur-[12px]">
               <div className="flex items-center justify-between px-[16px]">
                  <div className="size-[72px]">
                     <Image src={logoPic} alt="logo" className="size-full" />
                  </div>
                  <Button
                     className="size-[48px] !rounded-xl !border !border-solid !border-[#ffffff80] !text-white"
                     onClick={() => setShowLanguageDialog(false)}
                  >
                     <IoIosClose fontSize="24px" color="white" />
                  </Button>
               </div>
               <div className="mt-[56px] flex flex-col">
                  <Button
                     className="!flex !items-center !justify-between !font-poppinsExtraBold"
                     sx={{
                        height: '80px',
                        color: '#ffffff4d',
                        fontSize: '32px',
                        paddingX: '64px',
                        fontFamily: 'arimaBold',
                        ...(locale === 'en' && { backgroundColor: '#221C34', color: 'white' }),
                     }}
                     onClick={() => changeLanguage('en')}
                  >
                     <Image src={usFlag} alt="download" width={40} height={40} />
                     EN
                  </Button>
                  <Button
                     className="!flex !items-center !justify-between !font-poppinsExtraBold"
                     sx={{
                        height: '80px',
                        color: '#ffffff4d',
                        fontSize: '32px',
                        paddingX: '64px',
                        fontFamily: 'arimaBold',
                        ...(locale === 'ru' && { backgroundColor: '#221C34', color: 'white' }),
                     }}
                     onClick={() => changeLanguage('ru')}
                  >
                     <Image src={ruFlag} alt="download" width={40} height={40} />
                     RU
                  </Button>
                  <Button
                     className="!flex !items-center !justify-between !font-poppinsExtraBold"
                     sx={{
                        height: '80px',
                        color: '#ffffff4d',
                        fontSize: '32px',
                        paddingX: '64px',
                        fontFamily: 'arimaBold',
                        ...(locale === 'es' && { backgroundColor: '#221C34', color: 'white' }),
                     }}
                     onClick={() => changeLanguage('es')}
                  >
                     <Image src={esFlag} alt="download" width={40} height={40} />
                     ES
                  </Button>
               </div>
            </div>
         </Drawer>

         <MobileMenu
            open={showMobileMenu}
            onClose={() => setShowMobileMenu(false)}
            showLanguageDialogHandler={showLanguageDialogHandler}
         />

         <DownloadAppModal open={showDownloadModal} onClose={() => setShowDownloadModal(false)} />
      </header>
   );
}

export default Header;
