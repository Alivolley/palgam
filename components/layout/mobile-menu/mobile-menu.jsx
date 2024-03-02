// MUI
import { Drawer } from '@mui/material';

// Components
import MobileMenuStyle from './mobile-menu.style';

function MobileMenu({ open, onClose }) {
   return (
      <Drawer anchor="left" open={open} onClose={onClose}>
         <MobileMenuStyle className="w-[300px]">mobile</MobileMenuStyle>
      </Drawer>
   );
}

export default MobileMenu;
