import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Drawer } from '@mui/material';

// Icons
import { IoIosClose } from 'react-icons/io';

// Assets
import logoPic from '@/assets/images/Logo.png';
import usFlag from '@/assets/icons/usFlag.svg';
import ruFlag from '@/assets/icons/ruFlag.svg';
import esFlag from '@/assets/icons/esFlag.svg';

function MobileMenu({ open, onClose, showLanguageDialogHandler }) {
   const { locale, pathname } = useRouter();

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
         <div className="h-full max-h-screen min-h-screen overflow-auto bg-[#00000099] px-[16px] py-[48px] backdrop-blur-[12px]">
            <div className="flex items-center justify-between">
               <div className="size-[72px]">
                  <Image src={logoPic} alt="logo" className="size-full" />
               </div>
               <Button
                  className="size-[48px] !rounded-xl !border !border-solid !border-[#ffffff80] !text-white"
                  onClick={onClose}
               >
                  <IoIosClose fontSize="24px" color="white" />
               </Button>
            </div>

            <div className="mt-[56px] flex flex-col items-center gap-20 font-poppinsExtraBold">
               <Link href="/" className={`text-[32px] ${pathname === '/' ? 'text-white' : 'text-[#ffffff4d]'}`}>
                  Home
               </Link>
               <Link href="/" className={`text-[32px] ${pathname === '/some' ? 'text-white' : 'text-[#ffffff4d]'}`}>
                  Blog
               </Link>
               <Link href="/" className={`text-[32px] ${pathname === '/some' ? 'text-white' : 'text-[#ffffff4d]'}`}>
                  White paper
               </Link>
               <Link href="/" className={`text-[32px] ${pathname === '/some' ? 'text-white' : 'text-[#ffffff4d]'}`}>
                  Licenses
               </Link>
               <Button
                  className="!font-poppinsExtraBold !text-[32px] !text-[#ffffff4d]"
                  onClick={showLanguageDialogHandler}
               >
                  Language:{locale.toUpperCase()}{' '}
                  <Image
                     src={locale === 'en' ? usFlag : locale === 'ru' ? ruFlag : locale === 'es' ? esFlag : null}
                     alt="flag"
                  />
               </Button>
            </div>
         </div>
      </Drawer>
   );
}

export default MobileMenu;
