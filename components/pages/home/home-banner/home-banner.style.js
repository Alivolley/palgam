import styled from '@emotion/styled';

const HomeBannerStyle = styled.div(() => ({
   '#palgamWord': {
      background: 'linear-gradient(270deg, #8C72E2 60.27%, #5822E9 100%)',
      '-webkit-background-clip': 'text',
      'background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      animation: 'changeColor 1.5s infinite alternate 1s',
   },

   '@keyframes changeColor': {
      '0%': {
         textShadow: '0 0 15px transparent',
      },
      '100%': {
         textShadow: '0 0 15px white',
      },
   },

   '#btnApp': {
      transition: 'all 0.2s',
      ':hover': {
         '#wrapper': {
            // flexDirection: 'row',
            gap: 0,
         },
         '#firstLine': {
            transform: 'scale(0)',
            transformOrigin: 'left',
         },
         '#secondLine': {
            '@media (min-width: 1024px)': {
               fontSize: '26px',
            },
            fontSize: '18px',
            marginTop: '-12px',
         },
      },
   },
}));

export default HomeBannerStyle;
