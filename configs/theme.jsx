const getDesignTokens = (mode, language) => ({
   typography: {
      fontFamily: 'arimaRegular',
   },

   palette: {
      mode,

      // customPink: {
      //    main: '#FD8266',
      // },
   },

   components: {
      MuiButton: {
         styleOverrides: {
            root: () => ({
               boxShadow: 'none',
               textTransform: 'none',
               padding: 0,
               minWidth: 0,
               borderRadius: 0,
               '&:hover': {
                  boxShadow: 'none',
               },
            }),
         },
      },

      MuiDialog: {
         styleOverrides: {
            root: {
               fontFamily: 'arimaRegular',
            },
         },
      },

      MuiDrawer: {
         styleOverrides: {
            root: {
               fontFamily: 'arimaRegular',
            },
         },
      },

      MuiTextField: {
         // styleOverrides: {
         //    root: props => ({
         //       '& .MuiOutlinedInput-root': {
         //          ...(props?.size === 'small' && {
         //             height: '45px',
         //          }),
         //          borderRadius: '47px',
         //       },
         //    }),
         // },
      },
   },
});

export default getDesignTokens;
