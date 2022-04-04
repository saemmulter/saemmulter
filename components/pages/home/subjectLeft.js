import styled from '@emotion/styled';
import { fontWeights, Rem, colors } from '../../../styles/designSystem';

const Container = styled.h2({
  fontWeight: fontWeights.bold,
  fontSize: Rem(24),
  color: colors.important,
});

function SubjectLeft({ subjectLeft }) {
  return <Container>{subjectLeft}</Container>
}

export default SubjectLeft;
