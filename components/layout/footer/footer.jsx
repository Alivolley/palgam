/* eslint-disable jsx-a11y/control-has-associated-label */
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import FooterInstagramIcon from '@/assets/icons/components/footerInstagramIcon';
import FooterDiscordIcon from '@/assets/icons/components/footerDiscordIcon';
import FooterTelegramIcon from '@/assets/icons/components/footerTelegramIcon';
import FooterEmailIcon from '@/assets/icons/components/footerEmailIcon';

// Assets
import footerLogo from '@/assets/images/footerLogo.png';

// Apis
import useGetAllLinks from '@/apis/adminPanel/home/useGetAllLinks';
import useGetOthers from '@/apis/adminPanel/others/useGetOthers';

function Footer() {
   const { data: linksData } = useGetAllLinks();
   const { data: othersData } = useGetOthers();

   const t = useTranslations('footer');

   return (
      <footer className="relative bg-[#100C16]">
         <div className="absolute inset-y-0 w-[310px] customMd:w-[550px]">
            <Image src={footerLogo} alt="logo" className="size-full object-cover" />
         </div>
         <div className="px-4 py-8">
            <div className="relative flex justify-evenly customMd:hidden">
               <div className="flex flex-col items-center gap-4 font-poppinsLight text-10 leading-[14px] text-white">
                  <Link href="/blogs">{t('Blogs')}</Link>
                  <Link href="/whitePaper">{t('White paper')}</Link>
                  <Link href="/terms">{t('Terms and conditions')}</Link>
                  <Link href="/self">{t('Self-Exclusion Process')}</Link>
               </div>
               <div className="flex flex-col items-center gap-4 font-poppinsLight text-10 leading-[14px] text-white">
                  <Link href="/affiliate">{t('Affiliate program')}</Link>
                  <Link href="/licenses">{t('Licenses')}</Link>
                  <Link href="/contactUs">{t('Contact us')}</Link>
                  <Link href="/privacy">{t('Privacy Policy')}</Link>
               </div>
            </div>

            <div className="relative mx-auto hidden max-w-[1112px] items-center justify-between gap-4 font-poppinsLight text-xs leading-[20px] text-white customMd:flex">
               <Link href="/blogs" className="transition-all duration-200 hover:text-[#ffffff80]">
                  {t('Blogs')}
               </Link>
               <Link href="/whitePaper" className="transition-all duration-200 hover:text-[#ffffff80]">
                  {t('White paper')}
               </Link>
               <Link href="/terms" className="transition-all duration-200 hover:text-[#ffffff80]">
                  {t('Terms and conditions')}
               </Link>
               <Link href="/affiliate" className="transition-all duration-200 hover:text-[#ffffff80]">
                  {t('Affiliate program')}
               </Link>
               <Link href="/licenses" className="transition-all duration-200 hover:text-[#ffffff80]">
                  {t('Licenses')}
               </Link>
               <Link href="/contactUs" className="transition-all duration-200 hover:text-[#ffffff80]">
                  {t('Contact us')}
               </Link>
               <Link href="/privacy" className="transition-all duration-200 hover:text-[#ffffff80]">
                  {t('Privacy Policy')}
               </Link>
               <Link href="/self" className="transition-all duration-200 hover:text-[#ffffff80]">
                  {t('Self-Exclusion Process')}
               </Link>
            </div>

            <div className="relative mx-auto flex max-w-[1112px] items-center justify-center customMd:justify-between">
               <div className="mt-10 flex items-center justify-center gap-3">
                  {linksData?.data?.instagram?.link_active && (
                     <a
                        href={linksData?.data?.instagram?.link}
                        className="flex size-14 items-center justify-center rounded-xl bg-[#d73f9033] transition-all duration-200 hover:bg-[#00000048]"
                     >
                        <FooterInstagramIcon />
                     </a>
                  )}
                  {linksData?.data?.discord?.link_active && (
                     <a
                        href={linksData?.data?.discord?.link}
                        className="flex size-14 items-center justify-center rounded-xl bg-[#5865f233] transition-all duration-200 hover:bg-[#00000048]"
                     >
                        <FooterDiscordIcon />
                     </a>
                  )}
                  {linksData?.data?.telegram?.link_active && (
                     <a
                        href={linksData?.data?.telegram?.link}
                        className="flex size-14 items-center justify-center rounded-xl bg-[#039be526] transition-all duration-200 hover:bg-[#00000048]"
                     >
                        <FooterTelegramIcon />
                     </a>
                  )}
                  {linksData?.data?.email?.link_active && (
                     <a
                        href={linksData?.data?.email?.link}
                        className="flex size-14 items-center justify-center rounded-xl bg-[#8c72e226] transition-all duration-200 hover:bg-[#00000048]"
                     >
                        <FooterEmailIcon />
                     </a>
                  )}
               </div>
               <p className="mt-6 hidden text-center font-poppinsExtraLight text-xs leading-6 text-white customMd:block">
                  {othersData?.copyright}
               </p>
            </div>
            <div className="my-6 h-px bg-[#ffffff26] customMd:hidden" />

            <p className="mt-6 text-center font-poppinsExtraLight text-xs leading-6 text-white customMd:hidden">
               {othersData?.copyright}
            </p>
         </div>
      </footer>
   );
}

export default Footer;
