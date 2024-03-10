import styled from '@emotion/styled';

const Block5Style = styled.div(() => ({
   '#bettingLightning': {
      filter: 'drop-shadow(0px 0px 6.4px #FFDA60)',
      stroke: '#FFDA60',
      strokeWidth: '1px',
   },

   ':hover': {
      '#bettingProfile1': {
         transform: 'scale(0)',
      },
      '#bettingLightning': {
         transform: 'scale(2)',
         filter: 'drop-shadow(0px 0px 15.467px #FFDA60)',
         strokeWidth: '2.417px',
      },
      '#bettingProfile2': {
         transform: 'scale(0)',
      },
   },
}));

export default Block5Style;
