import styled from '@emotion/styled';

const Block2Style = styled.div(() => ({
   '#trophyBackGround': {
      transition: 'all 0.7s',
      width: '198px',
      height: '102px',
      backgroundColor: '#E1D8FF',
      opacity: '0.2',
      filter: 'blur(12px)',
   },

   ':hover': {
      '#mainTrophyBox': {
         transform: 'scale(1.2)',
         margin: '0 22px',
      },
      '#mainTrophyBoxImage': {
         transform: 'rotate(45deg) scale(2.5)',
      },
      '#trophyBackGround': {
         width: '260px',
         height: '134px',
         backgroundColor: '#E1D8FF',
         opacity: '0.2',
         filter: 'blur(60px)',
         borderRadius: '259px',
      },
   },
}));

export default Block2Style;
