import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, colors } from '../../../styles/designSystem';

const DefinitionList = styled.dl({
  display: 'flex',
  flexWrap: 'wrap',
  '& dt, & dd': {
    paddingTop: Rem(7),
    paddingBottom: Rem(7),
    [mq.minSmall]: {
      paddingTop: Rem(3),
      paddingBottom: Rem(3),
    },
  },
});

const DefinitionTerm = styled.dt({
  paddingRight: Rem(10),
  width: Rem(130),
  fontWeight: fontWeights.bold,
  fontSize: Rem(16),
  lineHeight: 1.25,
  color: colors.important,
  [mq.minSmall]: {
    width: Rem(200),
  },
});

const DefinitionDescription = styled.dd({
  width: `calc(100% - ${Rem(130)})`,
  fontWeight: fontWeights.regular,
  fontSize: Rem(16),
  lineHeight: 1.25,
  color: colors.default,
  [mq.minSmall]: {
    width: `calc(100% - ${Rem(200)})`,
  },
  [mq.maxXsmall]: {
    '& span': {
      display: 'block',
    },
  },
});

function CompanyInfo() {
  const { t } = useTranslation('common')

  return (
    <DefinitionList>
      <DefinitionTerm>{t('info.term1')}</DefinitionTerm>
      <DefinitionDescription>
        <time dateTime='2019-07-15'>2019. 07. 15.</time>
        {/*  */}
        <span> </span>
        <span>({t('info.description1')})</span>
      </DefinitionDescription>
      <DefinitionTerm>{t('info.term2')}</DefinitionTerm>
      <DefinitionDescription>
        <time dateTime='2020-12-30'>2020. 12. 30.</time>
        {/*  */}
        <span> </span>
        <span>({t('info.description2')})</span>
      </DefinitionDescription>
      <DefinitionTerm>{t('info.term3')}</DefinitionTerm>
      <DefinitionDescription>{t('info.description3')}</DefinitionDescription>
      <DefinitionTerm>{t('info.term4')}</DefinitionTerm>
      <DefinitionDescription>{t('info.description4')}</DefinitionDescription>
    </DefinitionList>
  )
}

export default CompanyInfo;
