import { useRouter } from 'next/router';

// Components
import Footer from '../footer/footer';
import Header from '../header/header';
import FloatingButtons from '@/components/templates/floating-buttons/floating-buttons';

function PagesLayout({ children }) {
   const { pathname } = useRouter();

   return (
      <div className="font-arimaRegular">
         {pathname !== '/login' && !pathname.startsWith('/admin-panel') && <Header />}

         <main
            className={`bg-[#080609] ${pathname !== '/login' && !pathname.startsWith('/admin-panel') ? 'pb-12' : ''}`}
         >
            {children}
            {pathname !== '/login' && !pathname.startsWith('/admin-panel') && <FloatingButtons />}
         </main>

         {pathname !== '/login' && !pathname.startsWith('/admin-panel') && <Footer />}
      </div>
   );
}

export default PagesLayout;
