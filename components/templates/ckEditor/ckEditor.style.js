import styled from '@emotion/styled';

const CkEditorStyle = styled.div(() => ({
   width: '100%',

   'strong , i , h2 , h3 , h4 , p , a , img': {
      all: 'revert',
   },

   a: {
      color: 'white',
   },

   '.ck-editor': {
      div: {
         borderColor: '#ffffff26 !important',
         backgroundColor: 'transparent !important',

         button: {
            color: 'white',

            ':hover': {
               backgroundColor: 'white',
               color: 'black',
            },
         },
      },
   },

   '.ck-content': {
      height: '400px',
      resize: 'vertical',
      padding: '0 25px !important',
   },

   '.ck-dropdown__panel': {
      ul: {
         backgroundColor: '#080609',
      },
   },
}));

export default CkEditorStyle;
