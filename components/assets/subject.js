import styled from '@emotion/styled';
import { fontWeights, Rem, mq, colors } from '../../styles/designSystem';

const Term = styled.div(({ subjectBorder }) => ({
  [mq.minXsmall]: {
    width: Rem(250),
  },
  '& h2': {
    fontWeight: fontWeights.bold,
    fontSize: Rem(22),
    textTransform: 'uppercase',
    lineHeight: 1.13636364,
    color: colors.accent,
    [mq.maxTablet]: {
      paddingBottom: subjectBorder ? Rem(5) : null,
      borderBottom: subjectBorder ? `2px solid ${colors.accent}` : null,
    },
    [mq.minXsmall]: {
      paddingTop: subjectBorder ? Rem(20) : null,
      borderTop: subjectBorder ? `5px solid ${colors.accent}` : null,
    },
  },
}));

function Subject({ subjectName, subjectBorder }) {
  return (
    <Term subjectBorder={subjectBorder}><h2>{subjectName}</h2></Term>
  )
}

export default Subject;
