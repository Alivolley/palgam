import styled from '@emotion/styled';
import termsBg from '@/assets/images/termsBgPic.png';

const TermsStyle = styled.div(() => ({
   backgroundImage: `url(${termsBg?.src})`,
   backgroundAttachment: 'fixed',
   backgroundSize: 'cover',
   backgroundPosition: 'center center',

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

export default TermsStyle;
