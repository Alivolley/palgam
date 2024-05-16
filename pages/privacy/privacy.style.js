import styled from '@emotion/styled';

const PrivacyStyle = styled.div(() => ({
   '#content': {
      img: {
         display: 'block',
         maxWidth: '100%',
         height: 'fit-content',
      },

      'strong , i , h2 , h3 , h4 , p , a , ul , ol': {
         all: 'revert',
      },

      a: {
         color: 'white',
      },
   },
}));

export default PrivacyStyle;
