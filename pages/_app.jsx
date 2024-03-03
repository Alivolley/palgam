import AOS from 'aos';
import Head from 'next/head';
import { useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';
import AppLayout from '@/components/layout/app-layout/app-layout';
import '@/styles/globals.css';
import '@/styles/reset.css';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
   const { locale } = useRouter();
   const timeZone = 'Europe/Vienna';

   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);

   return (
      <NextIntlClientProvider locale={locale} messages={pageProps.messages} timeZone={timeZone}>
         <Head>
            <title>palgam</title>
            <meta name="description" content="Your website description here" />
            <meta name="keywords" content="comma, separated, keywords" />
            <meta name="author" content="palgam" />
         </Head>
         <AppLayout>
            <Component {...pageProps} />
         </AppLayout>
      </NextIntlClientProvider>
   );
}
