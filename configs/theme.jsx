const getDesignTokens = (mode, language) => ({
   typography: {
      fontFamily: 'arimaRegular',
   },

   palette: {
      mode,

      customPurple: {
         main: '#8C72E2',
      },
      secondary: {
         main: '#8C72E2',
      },
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

      MuiTab: {
         styleOverrides: {
            root: props => ({
               fontFamily: 'poppinsExtraBold',
               textTransform: 'none',
               ...(!props['aria-selected'] && {
                  color: '#ffffff26',
               }),
            }),
         },
      },

      MuiTextField: {
         styleOverrides: {
            root: () => ({
               '& .MuiFormHelperText-root': {
                  fontFamily: 'poppinsRegular',
               },
               '& .MuiOutlinedInput-root': {
                  borderRadius: '16px',
                  fontFamily: 'poppinsExtraLight',
               },
            }),
         },
      },

      MuiFormControl: {
         styleOverrides: {
            root: () => ({
               '& .MuiFormHelperText-root': {
                  fontFamily: 'poppinsRegular',
               },
               '& .MuiOutlinedInput-root': {
                  borderRadius: '16px',
                  fontFamily: 'poppinsExtraLight',
               },
            }),
         },
      },
   },
});

export default getDesignTokens;
