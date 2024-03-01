import { useRouter } from 'next/router';

// MUI
import { Drawer } from '@mui/material';

// Components
import MobileMenuStyle from './mobile-menu.style';

function MobileMenu({ open, onClose }) {
   const { locale } = useRouter();

   return (
      <Drawer anchor="left" open={open} onClose={onClose} dir={locale === 'fa' ? 'rtl' : 'ltr'}>
         <MobileMenuStyle className="w-[300px]">mobile</MobileMenuStyle>
      </Drawer>
   );
}

export default MobileMenu;
