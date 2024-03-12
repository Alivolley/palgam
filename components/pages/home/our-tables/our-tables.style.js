import styled from '@emotion/styled';

const OurTablesStyle = styled.div(() => ({
   '#block': {
      ':hover': {
         '#blockIcon': {
            top: '-150px',
         },
         '#blockTextWrapper': {
            paddingBottom: '50px',
         },
         '#blockText': {
            fontSize: '50px',
            marginBottom: '25px',
         },
      },
   },
}));

export default OurTablesStyle;
