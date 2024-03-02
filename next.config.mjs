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
      locales: ['en', 'es', 'ru'],
      defaultLocale: 'en',
      localeDetection: false,
   },
};

export default nextConfig;
