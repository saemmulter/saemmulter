import styled from '@emotion/styled';
import { mq, fontWeights, Rem, colors } from '../../../styles/designSystem';

const Container = styled.h2({
  margin: `${Rem(25)} 0`,
  fontWeight: fontWeights.bold,
  fontSize: Rem(24),
  textAlign: 'center',
  color: colors.accent,
  [mq.minXsmall]: {
    margin: `${Rem(50)} 0`,
    fontSize: Rem(48),
  },
});

function SubjectCenter({ subjectCenter }) {
  return <Container>{subjectCenter}</Container>
}

export default SubjectCenter;
