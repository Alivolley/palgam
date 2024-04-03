import { useRouter } from 'next/router';

// Components
import Footer from '../footer/footer';
import Header from '../header/header';
import FloatingButtons from '@/components/templates/floating-buttons/floating-buttons';

function PagesLayout({ children }) {
   const { pathname } = useRouter();

   return (
      <div className="font-arimaRegular">
         {pathname !== '/tyu516wxcvb6' && !pathname.startsWith('/admin-panel') && <Header />}

         <main
            className={`bg-[#080609] ${pathname !== '/tyu516wxcvb6' && !pathname.startsWith('/admin-panel') ? 'pb-12' : ''}`}
         >
            {children}
            {pathname !== '/tyu516wxcvb6' && !pathname.startsWith('/admin-panel') && <FloatingButtons />}
         </main>

         {pathname !== '/tyu516wxcvb6' && !pathname.startsWith('/admin-panel') && <Footer />}
      </div>
   );
}

export default PagesLayout;
