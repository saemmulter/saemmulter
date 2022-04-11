import styled from '@emotion/styled';
import { mq, Rem } from '../../../styles/designSystem';

const ErrorNumberic = styled.h1(({ errorImageSource }) => ({
  display: 'block',
  margin: '0 auto',
  width: Rem(270),
  height: Rem(125),
  background: `url(${errorImageSource}) no-repeat 50% 50%/contain`,
  [mq.minXsmall]: {
    width: Rem(345),
    height: Rem(160),
  },
}));

function ErrorStatus({ errorNumberic, errorImageSource }) {
  return (
    <ErrorNumberic
      errorImageSource={errorImageSource}
      aria-label={errorNumberic}
    />
  )
}

export default ErrorStatus;
