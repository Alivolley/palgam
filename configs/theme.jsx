const getDesignTokens = (mode, direction, language) => ({
   direction,

   typography: {
      // fontFamily: 'almaraiRegular',
   },

   palette: {
      mode,

      // customPink: {
      //    main: '#FD8266',
      // },
   },

   components: {
      MuiButton: {
         // styleOverrides: {
         //    root: props => ({
         //       boxShadow: 'none',
         //       textTransform: 'none',
         //       padding: 0,
         //       minWidth: 0,
         //       borderRadius: 0,
         //       ...(props?.ownerState?.color === 'customPink' && {
         //          color: '#fff',
         //       }),
         //       '&:hover': {
         //          boxShadow: 'none',
         //       },
         //    }),
         // },
      },

      MuiDialog: {
         // styleOverrides: {
         //    root: {
         //       fontFamily: 'almaraiRegular',
         //    },
         // },
      },

      MuiDrawer: {
         // styleOverrides: {
         //    root: {
         //       fontFamily: 'almaraiRegular',
         //    },
         // },
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
