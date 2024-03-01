/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,

   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**',
         },
      ],
   },

   i18n: {
      locales: ['fa', 'en', 'es', 'ru'],
      defaultLocale: 'fa',
      localeDetection: false,
   },
};

export default nextConfig;
