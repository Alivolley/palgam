import styled from '@emotion/styled';

const BlogDetailStyle = styled.div(() => ({
   '#gradientElem': {
      borderRadius: '1512',
      opacity: '0.15',
      background: 'linear-gradient(180deg, #5922E9 0%, #DD43EF 100%)',
      filter: 'blur(200px)',
   },
   '#content': {
      img: {
         display: 'block',
         margin: '0 auto',
         maxWidth: '100%',
         objectFit: 'cover',
      },

      'strong , i , h2 , h3 , h4 , p , a , ul , ol': {
         all: 'revert',
      },

      a: {
         color: 'white',
      },
   },
}));

export default BlogDetailStyle;
