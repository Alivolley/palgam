import styled from '@emotion/styled';
import whitePaperBg from '@/assets/images/whitePaperBg.png';

const WhitePaperStyle = styled.div(() => ({
   backgroundImage: `url(${whitePaperBg?.src})`,
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

export default WhitePaperStyle;
