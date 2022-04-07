import styled from '@emotion/styled';
import { fontWeights, Rem } from '../../styles/designSystem';

const Paragraph = styled.p({
  fontWeight: fontWeights.bold,
  fontSize: Rem(16),
  lineHeight: 1.5,
});


function ParagraphPrimary({ paragraphPrimary }) {
  return <Paragraph>{paragraphPrimary}</Paragraph>
}

export default ParagraphPrimary;
