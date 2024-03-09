import { useRouter } from 'next/router';

// Components
import Footer from '../footer/footer';
import Header from '../header/header';

function PagesLayout({ children }) {
   const { pathname } = useRouter();

   return (
      <div className="font-arimaRegular">
         {pathname !== '/login' && <Header />}

         <main className="bg-[#080609] pb-12">{children}</main>

         {pathname !== '/login' && <Footer />}
      </div>
   );
}

export default PagesLayout;
