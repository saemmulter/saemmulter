import styled from '@emotion/styled';
import { fontWeights, Rem } from '../../styles/designSystem';

const ParagraphSecondary = styled.p({
  margin: `${Rem(15)} 0`,
  fontWeight: fontWeights.regular,
  fontSize: Rem(16),
  lineHeight: 1.5,
});

export default ParagraphSecondary;
