import styled from '@emotion/styled';

const Block7Style = styled.div(() => ({
   '#pinkBox': {
      boxShadow: '0px 31px 72px 0px rgba(221, 67, 239, 0.20)',
      background: 'linear-gradient(90deg, rgba(221, 67, 239, 0.40) 0%, rgba(221, 67, 239, 0.16) 100%)',
   },
   '#purpleBox': {
      background: 'linear-gradient(90deg, rgba(140, 114, 226, 0.40) 0%, rgba(140, 114, 226, 0.16) 100%)',
      boxShadow: '0px 31px 72px 0px rgba(140, 114, 226, 0.20)',
   },

   ':hover': {
      '#pinkBoxWrapper': {
         marginLeft: '270px',
      },
      '#purpleBoxWrapper': {
         marginLeft: '-270px',
      },
      '#pinkBox': {
         boxShadow: '0px 31px 72px 0px rgba(221, 67, 239, 0.40)',
      },
      '#purpleBox': {
         boxShadow: '0px 31px 72px 0px rgba(140, 114, 226, 0.40)',
      },
   },
}));

export default Block7Style;
