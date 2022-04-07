import styled from '@emotion/styled';
import { mq, fontWeights, Rem, colors } from '../../../styles/designSystem';

const Container = styled.p({
  margin: `${Rem(25)} 0`,
  fontWeight: fontWeights.bold,
  fontSize: Rem(16),
  textAlign: 'center',
  lineHeight: '1.25',
  color: colors.important,
  [mq.minXsmall]: {
    margin: `${Rem(50)} 0`,
    fontSize: Rem(32),
  },
  '& span': {
    display: 'block',
  },
});

function HomeDescription({ descriptionPrimary, descriptionSecondary }) {
  return (
    <Container>
      {descriptionPrimary}
      <span>{descriptionSecondary}</span>
    </Container>
  )
}

export default HomeDescription;
