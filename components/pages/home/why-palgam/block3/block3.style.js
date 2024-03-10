import styled from '@emotion/styled';

const Block3Style = styled.div(() => ({
   '#supportBlock1InnerPic, #supportBlock7InnerPic': {
      background: 'linear-gradient(146deg, rgba(122, 103, 154, 0.40) 13.38%, rgba(122, 103, 154, 0.08) 87.8%)',
   },
   '#supportBlock2InnerPic, #supportBlock8InnerPic': {
      background: 'linear-gradient(146deg, rgba(158, 162, 144, 0.40) 13.38%, rgba(158, 162, 144, 0.08) 87.8%)',
   },
   '#supportBlock3InnerPic, #supportBlock9InnerPic': {
      background: 'linear-gradient(146deg, rgba(86, 125, 150, 0.40) 13.38%, rgba(86, 125, 150, 0.08) 87.8%)',
   },
   '#supportBlock4': {
      background: 'linear-gradient(146deg, rgba(141, 114, 226, 0.20) 13.38%, rgba(141, 114, 226, 0.04) 87.8%)',
   },
   '#supportBlock5': {
      background: 'linear-gradient(146deg, rgba(221, 67, 240, 0.20) 13.38%, rgba(221, 67, 240, 0.04) 87.8%)',
   },
   '#supportBlock6': {
      background: 'linear-gradient(146deg, rgba(25, 194, 149, 0.20) 13.38%, rgba(25, 194, 149, 0.04) 87.8%)',
   },

   ':hover': {
      '#supportBlock1,#supportBlock2,#supportBlock3,#supportBlock4,#supportBlock5,#supportBlock6,#supportBlock7,#supportBlock8,#supportBlock9':
         {
            width: '110px',
            height: '110px',
         },
      '#supportBlock1InnerPic, #supportBlock2InnerPic, #supportBlock3InnerPic, #supportBlock7InnerPic, #supportBlock8InnerPic, #supportBlock9InnerPic':
         {
            visibility: 'visible',
            opacity: 0.3,
         },

      '#supportMargin': {
         marginTop: '8px',
      },
   },
}));

export default Block3Style;
