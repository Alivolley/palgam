import styled from '@emotion/styled';

const Block6Style = styled.div(() => ({
   '#block6LockPath1, #block6LockPath2, #block6LockPath3': {
      transition: 'all 0.7s',
   },
   ':hover': {
      '#lock': {
         transform: 'scale(1.5)',
         marginTop: '30px',

         '#block6LockPath1, #block6LockPath2': {
            fill: '#1AC295',
         },
         '#block6LockPath3': {
            stroke: 'white',
         },
      },
      '#safeIcon': {
         transform: 'scale(1.1)',
      },
   },
}));

export default Block6Style;
