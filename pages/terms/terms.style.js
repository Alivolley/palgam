import styled from '@emotion/styled';
import termsBg from '@/assets/images/termsBgPic.png';

const TermsStyle = styled.div(() => ({
   backgroundImage: `url(${termsBg?.src})`,
   backgroundAttachment: 'fixed',
   backgroundSize: 'cover',
   backgroundPosition: 'center center',
}));

export default TermsStyle;
