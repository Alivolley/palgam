import styled from '@emotion/styled';
import aboutUsBackgroundDesktop from '@/assets/images/aboutUsBackgroundDesktop.png';
import aboutUsBackgroundMobile from '@/assets/images/aboutUsBackgroundMobile.png';

const AboutUsStyle = styled.div(() => ({
   '@media (min-width: 900px)': {
      backgroundImage: `url(${aboutUsBackgroundDesktop?.src})`,
      backgroundPosition: 'top right',
      backgroundSize: 'auto',
   },

   backgroundImage: `url(${aboutUsBackgroundMobile?.src})`,
   backgroundPosition: 'center center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
   backgroundAttachment: 'fixed',
}));

export default AboutUsStyle;
