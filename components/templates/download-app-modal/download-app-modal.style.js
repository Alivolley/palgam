import styled from '@emotion/styled';
import frame from '@/assets/images/downloadAppFrame.png';
import frameBig from '@/assets/images/downloadAppFrameDesktop.png';

const DownloadAppModalStyle = styled.div(() => ({
   '#header': {
      '@media (min-width: 500px)': {
         backgroundImage: `url(${frameBig?.src})`,
      },

      backgroundImage: `url(${frame?.src})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   },
}));

export default DownloadAppModalStyle;
