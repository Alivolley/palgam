import styled from '@emotion/styled';

const Block4Style = styled.div(() => ({
   '#coinBackground': {
      filter: 'blur(60px)',
      opacity: '0.2',
      width: '254px',
      height: '254px',
   },

   '#coinImageWrapper': {
      marginTop: '70px',
   },

   '#coin': {
      width: '128px',
      height: '128px',
   },

   ':hover': {
      '#coinBackground': {
         opacity: '0.6',
      },
      '#coin': {
         width: '170px',
         height: '170px',
      },
      '#coinImageWrapper': {
         marginTop: '50px',
      },
   },
}));

export default Block4Style;
