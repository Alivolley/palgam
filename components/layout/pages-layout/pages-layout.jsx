import { useRouter } from 'next/router';

// Components
import Footer from '../footer/footer';
import Header from '../header/header';

function PagesLayout({ children }) {
   const { pathname } = useRouter();

   return (
      <div className="font-arimaRegular">
         {!pathname.startsWith('/admin-panel') && <Header />}

         <main className={`bg-[#080609] ${!pathname.startsWith('/admin-panel') ? 'pb-12' : ''}`}>{children}</main>

         {!pathname.startsWith('/admin-panel') && <Footer />}
      </div>
   );
}

export default PagesLayout;
