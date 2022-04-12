import styled from '@emotion/styled';
import { fontWeights, Rem } from '../../styles/designSystem';

const Paragraph = styled.p({
  fontSize: Rem(16),
  lineHeight: 1.5,
  '& strong': {
    fontWeight: fontWeights.bold,
  },
});

function ParagraphPrimary({ paragraphPrimary }) {
  return (
    <Paragraph>
      <strong>{paragraphPrimary}</strong>
    </Paragraph>
  )
}

export default ParagraphPrimary;
