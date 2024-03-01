import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Components
import MobileMenu from '../mobile-menu/mobile-menu';

// Styles
import HeaderStyle from './header.style';

function Header() {
   const [showMobileMenu, setShowMobileMenu] = useState(false);
   const [hasBackGround, setHasBackGround] = useState(false);
   const [profileDropDown, setProfileDropDown] = useState(false);
   const [showLogoutModal, setShowLogoutModal] = useState(false);

   const { locale, push, query, pathname, asPath } = useRouter();

   // const changeLanguage = () => {
   //    push({ pathname, query }, asPath, { locale: locale === 'en' ? 'fa' : 'en' });
   // };

   useEffect(() => {
      setShowMobileMenu(false);
   }, [pathname, query]);

   // const handleScroll = () => {
   //    const currentPosition = window.scrollY;
   //    if (currentPosition === 0) {
   //       setHasBackGround(false);
   //    } else {
   //       setHasBackGround(true);
   //    }
   // };

   // useEffect(() => {
   //    window.addEventListener('scroll', handleScroll);

   //    return () => {
   //       window.removeEventListener('scroll', handleScroll);
   //    };
   // }, []);

   return (
      <header
      // className={`fixed inset-x-0 top-0 z-10 p-5 transition-all duration-100 customMd:py-10 ${
      //    hasBackGround ? 'bg-white customMd:py-3' : 'customMd:py-10'
      // }`}
      >
         <HeaderStyle>header</HeaderStyle>

         <MobileMenu open={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
      </header>
   );
}

export default Header;
