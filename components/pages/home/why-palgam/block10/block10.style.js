import styled from '@emotion/styled';

const Block10Style = styled.div(() => ({
   ':hover': {
      '#mainBackground': {
         transform: 'rotate(45deg) scale(2.5)',
      },
      '#appStorePic': {
         transform: 'scale(1.2)',
      },
      '#appStorePicActive': {
         visibility: 'visible',
         opacity: 1,
      },
   },
}));

export default Block10Style;
