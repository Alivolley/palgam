import styled from '@emotion/styled';
import whitePaperBg from '@/assets/images/whitePaperBg.png';

const WhitePaperStyle = styled.div(() => ({
   backgroundImage: `url(${whitePaperBg?.src})`,
   backgroundAttachment: 'fixed',
   backgroundSize: 'cover',
   backgroundPosition: 'center center',
}));

export default WhitePaperStyle;
