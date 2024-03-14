import styled from '@emotion/styled';

const MoreAboutStyle = styled.div(() => ({
   '#line': {
      animation: 'rotate 70s linear infinite',
   },

   '#wrapper': {
      top: '150%',
      animation: 'goTop 20s linear infinite',
   },

   '#cart1': {
      animation: 'rotate1 20s linear infinite',
      transform: 'rotate(-9.8deg)',
   },
   '#cart2': {
      animation: 'rotate2 20s linear infinite',
      transform: 'rotate(10.4deg)',
   },
   '#cart3': {
      animation: 'rotate2 20s linear infinite',
      transform: 'rotate(10.4deg)',
   },
   '#cart4': {
      animation: 'rotate1 20s linear infinite',
      transform: 'rotate(-9.8deg)',
   },
   '#cart5': {
      animation: 'rotate1 20s linear infinite',
      transform: 'rotate(-9.8deg)',
   },

   '@keyframes rotate': {
      from: {
         transform: 'rotate(0deg)',
      },
      to: {
         transform: 'rotate(360deg)',
      },
   },

   '@keyframes rotate1': {
      to: {
         transform: 'rotate(-45deg)',
      },
   },

   '@keyframes rotate2': {
      to: {
         transform: 'rotate(35deg)',
      },
   },

   '@keyframes goTop': {
      to: {
         top: '-300%',
      },
   },
}));

export default MoreAboutStyle;
