import styled from '@emotion/styled';

const CkEditorStyle = styled.div(() => ({
   width: '100%',

   strong: {
      fontFamily: 'poppinsExtraBold',
   },

   i: {
      fontStyle: 'italic',
   },

   h2: {
      fontSize: '33px',
   },
   h3: {
      fontSize: '28px',
   },
   h4: {
      fontSize: '23px',
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
      lineHeight: '27px',
      padding: '0 25px !important',
   },

   '.ck-dropdown__panel': {
      ul: {
         backgroundColor: '#080609',
      },
   },
}));

export default CkEditorStyle;
