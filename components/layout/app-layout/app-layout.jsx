import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

// MUI
import { Backdrop, IconButton, ThemeProvider, createTheme } from '@mui/material';

// Icons
import { IoClose } from 'react-icons/io5';

// Components
import PagesLayout from '../pages-layout/pages-layout';
import LoadingComponent from '@/components/templates/loading-component/loading-component';

// Styles
import getDesignTokens from '@/configs/theme';

function Loading() {
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   useEffect(() => {
      router.events.on('routeChangeStart', url => url !== router.asPath && setLoading(true));
      router.events.on('routeChangeComplete', url => url !== router.asPath && setLoading(false));
      router.events.on('routeChangeError', url => url !== router.asPath && setLoading(false));

      return () => {
         router.events.off('routeChangeStart', url => url !== router.asPath && setLoading(true));
         router.events.off('routeChangeComplete', url => url !== router.asPath && setLoading(false));
         router.events.off('routeChangeError', url => url !== router.asPath && setLoading(false));
      };
   });

   return (
      <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
         <LoadingComponent />
      </Backdrop>
   );
}

function AppLayout({ children }) {
   const { mutate } = useSWRConfig();
   const { locale } = useRouter();
   const themeConfig = createTheme(getDesignTokens('dark', locale));

   useEffect(() => {
      Cookies.set('NEXT_LOCALE', locale, { expires: 365 });

      mutate(() => true);
   }, [locale]);

   return (
      <ThemeProvider theme={themeConfig}>
         <Toaster
            position="top-left"
            toastOptions={{
               style: {
                  fontFamily: 'poppinsRegular',
                  fontSize: '14px',
               },
               duration: 4000,
            }}
         >
            {t => (
               <ToastBar toast={t}>
                  {({ icon, message }) => (
                     <div className="flex items-center">
                        {icon}
                        {message}
                        {t.type !== 'loading' && (
                           <IconButton
                              onClick={() => toast.dismiss(t.id)}
                              className="!text-black !transition-all !duration-150 hover:!text-red-500"
                              size="small"
                           >
                              <IoClose />
                           </IconButton>
                        )}
                     </div>
                  )}
               </ToastBar>
            )}
         </Toaster>
         <Loading />
         <PagesLayout>{children}</PagesLayout>
      </ThemeProvider>
   );
}

export default AppLayout;
