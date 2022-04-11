import styled from '@emotion/styled';
import { colors, fontWeights, mq, Rem } from '../../../styles/designSystem';

const ErrorMessage = styled.h2({
  margin: `${Rem(50)} auto ${Rem(20)}`,
  fontWeight: fontWeights.black,
  fontSize: Rem(18),
  textAlign: 'center',
  color: colors.default,
  [mq.minXsmall]: {
    margin: `${Rem(100)} auto ${Rem(50)}`,
    fontSize: Rem(30),
  },
});

function ErrorPrimary({ errorMessage }) {
  return <ErrorMessage>{errorMessage}</ErrorMessage>
}

export default ErrorPrimary;
