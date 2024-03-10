/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from 'next/image';
import Link from 'next/link';

// Icons
import FooterInstagramIcon from '@/assets/icons/components/footerInstagramIcon';
import FooterDiscordIcon from '@/assets/icons/components/footerDiscordIcon';
import FooterTelegramIcon from '@/assets/icons/components/footerTelegramIcon';
import FooterEmailIcon from '@/assets/icons/components/footerEmailIcon';

// Assets
import footerLogo from '@/assets/images/footerLogo.png';

function Footer() {
   return (
      <footer className="relative bg-[#100C16]">
         <div className="absolute inset-y-0 w-[310px] customMd:w-[550px]">
            <Image src={footerLogo} alt="logo" className="size-full object-cover" />
         </div>
         <div className="px-4 py-8">
            <div className="relative flex justify-evenly customMd:hidden">
               <div className="flex flex-col items-center gap-4 font-poppinsLight text-10 leading-[14px] text-white">
                  <Link href="/blogs">Blogs</Link>
                  <Link href="/whitePaper">White paper</Link>
                  <Link href="/terms">Terms & conditions</Link>
               </div>
               <div className="flex flex-col items-center gap-4 font-poppinsLight text-10 leading-[14px] text-white">
                  <Link href="/">Affiliate program</Link>
                  <Link href="/licenses">Licenses</Link>
                  <Link href="/contactUs">Contact us</Link>
                  <Link href="/privacy">Privacy policy</Link>
               </div>
            </div>

            <div className="relative mx-auto hidden max-w-[1112px] items-center justify-between gap-4 font-poppinsLight text-xs leading-[20px] text-white customMd:flex">
               <Link href="/blogs" className="transition-all duration-200 hover:text-[#ffffff80]">
                  Blogs
               </Link>
               <Link href="/whitePaper" className="transition-all duration-200 hover:text-[#ffffff80]">
                  White paper
               </Link>
               <Link href="/terms" className="transition-all duration-200 hover:text-[#ffffff80]">
                  Terms & conditions
               </Link>
               <Link href="/" className="transition-all duration-200 hover:text-[#ffffff80]">
                  Affiliate program
               </Link>
               <Link href="/licenses" className="transition-all duration-200 hover:text-[#ffffff80]">
                  Licenses
               </Link>
               <Link href="/contactUs" className="transition-all duration-200 hover:text-[#ffffff80]">
                  Contact us
               </Link>
               <Link href="/privacy" className="transition-all duration-200 hover:text-[#ffffff80]">
                  Privacy policy
               </Link>
            </div>

            <div className="relative mx-auto flex max-w-[1112px] items-center justify-center customMd:justify-between">
               <div className="mt-10 flex items-center justify-center gap-3">
                  <a href="/some" className="flex size-14 items-center justify-center rounded-xl bg-[#d73f9033]">
                     <FooterInstagramIcon />
                  </a>
                  <a href="/some" className="flex size-14 items-center justify-center rounded-xl bg-[#5865f233]">
                     <FooterDiscordIcon />
                  </a>
                  <a href="/some" className="flex size-14 items-center justify-center rounded-xl bg-[#039be526]">
                     <FooterTelegramIcon />
                  </a>
                  <a href="/some" className="flex size-14 items-center justify-center rounded-xl bg-[#8c72e226]">
                     <FooterEmailIcon />
                  </a>
               </div>
               <p className="mt-6 hidden text-center font-poppinsExtraLight text-xs leading-6 text-white customMd:block">
                  © 2023, All Rights Reserved
               </p>
            </div>
            <div className="my-6 h-px bg-[#ffffff26] customMd:hidden" />

            <p className="mt-6 text-center font-poppinsExtraLight text-xs leading-6 text-white customMd:hidden">
               © 2023, All Rights Reserved
            </p>
         </div>
      </footer>
   );
}

export default Footer;
