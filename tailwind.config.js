/** @type {import('tailwindcss').Config} */
module.exports = {
   corePlugins: {
      preflight: false,
   },

   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         '@layer base': {
            button: [],
         },

         screens: {
            customXs: '350px',
            custom500: '500px',
            customSm: '600px',
            customMd: '900px',
            customLg: '1200px',
            customXl: '1400px',
         },

         colors: {
            // customPink: '#FD8266',
         },

         fontFamily: {
            arimaExtraLight: 'arimaExtraLight',
            arimaLight: 'arimaLight',
            arimaRegular: 'arimaRegular',
            arimaBold: 'arimaBold',
            arimaSmiBold: 'arimaSmiBold',
            poppinsThin: 'poppinsThin',
            poppinsExtraLight: 'poppinsExtraLight',
            poppinsLight: 'poppinsLight',
            poppinsRegular: 'poppinsRegular',
            poppinsMedium: 'poppinsMedium',
            poppinsSemibold: 'poppinsSemibold',
            poppinsBold: 'poppinsBold',
            poppinsExtraBold: 'poppinsExtraBold',
         },
         borderRadius: {
            10: '10px',
         },
         fontSize: {
            10: '10px',
         },
      },
   },
   plugins: [],
};
