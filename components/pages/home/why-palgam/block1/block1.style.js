import styled from '@emotion/styled';

const Block1Style = styled.div(() => ({
   ':hover': {
      '#firstWrapperRow1': {
         transform: 'translateX(-112px)',
      },
      '#firstWrapperRow2': {
         transform: 'translateX(72px)',
      },
      '#firstWrapperRow3': {
         transform: 'translateX(-112px)',
      },
      '#cartItem1': {
         opacity: '1',
      },
      '#cartItem2': {
         opacity: '0.2',
      },
   },
}));

export default Block1Style;
