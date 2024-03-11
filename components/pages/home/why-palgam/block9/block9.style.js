import styled from '@emotion/styled';

const Block9Style = styled.div(() => ({
   ':hover': {
      '#notActiveBackground': {
         visibility: 'hidden',
         opacity: 0,
      },
      '#activeBackground': {
         visibility: 'visible',
         opacity: 1,
      },
   },
}));

export default Block9Style;
