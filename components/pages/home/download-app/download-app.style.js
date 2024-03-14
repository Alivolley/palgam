import styled from '@emotion/styled';

const DownloadAppStyle = styled.div(() => ({
   '#vector': {
      // animation: 'goRight 20s linear infinite',
   },

   '#btnApp': {
      transition: 'all 0.2s',
      ':hover': {
         '#wrapper': {},
         '#firstLine': {
            transform: 'scale(0)',
            transformOrigin: 'left',
         },
         '#secondLine': {
            '@media (min-width: 1024px)': {
               fontSize: '23px',
            },
            fontSize: '18px',
            marginTop: '-14px',
         },
      },
   },

   '@keyframes goRight': {
      to: {
         right: '-300%',
      },
   },
}));

export default DownloadAppStyle;
