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

   '#trophyBackGround': {
      transition: 'all 0.7s',
      width: '198px',
      height: '102px',
      backgroundColor: '#E1D8FF',
      opacity: '0.2',
      filter: 'blur(12px)',
   },

   '#trophyWrapper': {
      ':hover': {
         '#mainTrophyBox': {
            transform: 'scale(1.2)',
            margin: '0 22px',
         },
         '#mainTrophyBoxImage': {
            transform: 'rotate(45deg) scale(2.5)',
         },
         '#trophyBackGround': {
            width: '260px',
            height: '134px',
            backgroundColor: '#E1D8FF',
            opacity: '0.2',
            filter: 'blur(60px)',
            borderRadius: '259px',
         },
      },
   },
}));

export default WhyPalgamStyle;
