import styled from '@emotion/styled';
import { colors, fontWeights, Rem } from '../../../styles/designSystem';

const ErrorHelp = styled.p({
  fontWeight: fontWeights.bold,
  fontSize: Rem(16),
  lineHeight: 1.25,
  color: colors.accent,
  textAlign: 'center',
  '& span': {
    display: 'block',
  },
});

function ErrorSecondary({ errorHelp, errorHelpMultiline }) {
  return (
    <ErrorHelp>
      <span>{errorHelp}</span>
      {errorHelpMultiline}
    </ErrorHelp>
  )
}

export default ErrorSecondary;
