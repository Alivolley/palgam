import styled from '@emotion/styled';

const BlockStyle = styled.div(() => ({
   ':hover': {
      '#profileWrapper': {
         marginLeft: '65px',
      },
      '#profile1': {
         transform: 'translateY(-50px)',
      },
      '#profile2': {
         transform: 'translateY(50px)',
      },
      '#profile3': {
         transform: 'translateY(-50px)',
      },
      '#profile4': {
         transform: 'translateY(50px)',
      },
      '#profile5': {
         visibility: 'hidden',
         opacity: 0,
      },
   },
}));

export default BlockStyle;
