import styled from '@emotion/styled';
import { mq, fontWeights, Rem, colors } from '../../../styles/designSystem';
import LinkButton from '../../utilities/linkButton';

const Container = styled.p({
  margin: `${Rem(25)} 0`,
  textAlign: 'center',
  [mq.minXsmall]: {
    margin: `${Rem(50)} 0`,
  },
  '& a': {
    display: 'inline-flex',
    alignItems: 'center',
    border: `2px solid ${colors.accent}`,
    borderRadius: Rem(16),
    padding: `0 ${Rem(20)}`,
    height: Rem(32),
    fontWeight: fontWeights.regular,
    fontSize: Rem(16),
    color: colors.important,
    transition: 'all .3s linear',
    '&:hover, &:focus': {
      backgroundColor: colors.accent,
      color: colors.white,
    },
  },
});

function MoreLink({ linkHref, linkLabel }) {
  return <Container><LinkButton href={linkHref}>{linkLabel}</LinkButton></Container>
}

export default MoreLink;
