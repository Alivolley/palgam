import styled from '@emotion/styled';

const WhyPalgamStyle = styled.div(() => ({
   '#palgamWord': {
      background: 'linear-gradient(270deg, #8C72E2 60.27%, #5822E9 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
   },

   '#firstWrapper': {
      ':hover': {
         '#firstWrapperRow1': {
            transform: 'translateX(-112px)',
         },
         '#firstWrapperRow2': {
            transform: 'translateX(72px)',
         },
         '#firstWrapperRow3': {
            transform: 'translateX(-112px)',
         },
         '#cartItem1': {
            opacity: '1',
         },
         '#cartItem2': {
            opacity: '0.2',
         },
      },
   },
}));

export default WhyPalgamStyle;
