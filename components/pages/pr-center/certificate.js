import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, colors, mixin } from '../../../styles/designSystem';

const CertificateList = styled.div({
  '& > div:first-of-type': {
    marginTop: 0,
  },
});

const CertificateItem = styled.div({
  marginTop: Rem(10),
  [mq.minSmall]: {
    display: 'flex',
  },
});

const CertificateHeadline = styled.h3({
  padding: `${Rem(5)} 0`,
  '& time': {
    fontWeight: fontWeights.bold,
    fontSize: Rem(18),
    lineHeight: 1.33333333,
    color: colors.important,
  },
  [mq.minSmall]: {
    width: Rem(70),
  },
});

const CertificateDefinition = styled.dl({
  display: 'flex',
  flexWrap: 'wrap',
  '& dt, & dd': {
    paddingTop: Rem(7),
    paddingBottom: Rem(7),
  },
  [mq.minSmall]: {
    ...mixin.col,
    display: 'flex',
  },
});

const CertificateDate = styled.dt({
  paddingRight: Rem(10),
  width: Rem(130),
  fontWeight: fontWeights.semiBold,
  fontSize: Rem(16),
  lineHeight: 1.25,
  color: colors.default,
});

const CertificateSummary = styled.dd({
  width: `calc(100% - ${Rem(130)})`,
  fontWeight: fontWeights.regular,
  fontSize: Rem(16),
  lineHeight: 1.25,
  color: colors.default,
  '& span': {
    display: 'block',
  },
});

const DueDate = styled.span(({ dueDateShow }) => ({
  display: dueDateShow ? null : 'none',
}));

function Certificate2021({ y2021Certificate }) {
  return (
    <>
      <CertificateDate>
        <time dateTime={y2021Certificate.dateTimeStartMachine}>{y2021Certificate.dateTimeStartHuman}</time>
        <DueDate dueDateShow={y2021Certificate.dateTimeEndDisplay}> - <time dateTime={y2021Certificate.dateTimeEndMachine}>{y2021Certificate.dateTimeEndHuman}</time></DueDate>
      </CertificateDate>
      <CertificateSummary>{y2021Certificate.certificateSummary}</CertificateSummary>
    </>
  )
}

function Certificate2020({ y2020Certificate }) {
  return (
    <>
      <CertificateDate>
        <time dateTime={y2020Certificate.dateTimeStartMachine}>{y2020Certificate.dateTimeStartHuman}</time>
        <DueDate dueDateShow={y2020Certificate.dateTimeEndDisplay}> - <time dateTime={y2020Certificate.dateTimeEndMachine}>{y2020Certificate.dateTimeEndHuman}</time></DueDate>
      </CertificateDate>
      <CertificateSummary>{y2020Certificate.certificateSummary}</CertificateSummary>
    </>
  )
}

function CompanyCertificate() {
  const { t } = useTranslation('common')

  const y2021Certificates = [
    {
      id: 1,
      dateTimeStartMachine: '02-05',
      dateTimeStartHuman: '02/05',
      dateTimeEndMachine: '02-05',
      dateTimeEndHuman: '02/05',
      dateTimeEndDisplay: false,
      certificateSummary: `${t('certificate.y2021i01')}`,
    },
    {
      id: 2,
      dateTimeStartMachine: '09-09',
      dateTimeStartHuman: '09/09',
      dateTimeEndMachine: '09-09',
      dateTimeEndHuman: '09/09',
      dateTimeEndDisplay: false,
      certificateSummary: `${t('certificate.y2021i02')}`,
    },
  ];

  const y2020Certificates = [
    {
      id: 1,
      dateTimeStartMachine: '08-14',
      dateTimeStartHuman: '08/14',
      dateTimeEndMachine: '08-14',
      dateTimeEndHuman: '08/14',
      dateTimeEndDisplay: false,
      certificateSummary: `${t('certificate.y2020i01')}`,
    },
    {
      id: 2,
      dateTimeStartMachine: '09-01',
      dateTimeStartHuman: '09/01',
      dateTimeEndMachine: '09-01',
      dateTimeEndHuman: '09/01',
      dateTimeEndDisplay: false,
      certificateSummary: `${t('certificate.y2020i02')}`,
    },
    {
      id: 3,
      dateTimeStartMachine: '11-10',
      dateTimeStartHuman: '11/10',
      dateTimeEndMachine: '11-10',
      dateTimeEndHuman: '11/10',
      dateTimeEndDisplay: false,
      certificateSummary: `${t('certificate.y2020i03')}`,
    },
  ]

  return (
    <CertificateList>
      <CertificateItem>
        <CertificateHeadline><time dateTime='2021'>2021</time></CertificateHeadline>
        <CertificateDefinition>
          {y2021Certificates.map(y2021Certificate => (
            <Certificate2021
              y2021Certificate={y2021Certificate}
              key={y2021Certificate.id}
            />
          ))}
        </CertificateDefinition>
      </CertificateItem>
      <CertificateItem>
        <CertificateHeadline><time dateTime='2020'>2020</time></CertificateHeadline>
        <CertificateDefinition>
          {y2020Certificates.map(y2020Certificate => (
            <Certificate2020
              y2020Certificate={y2020Certificate}
              key={y2020Certificate.id}
            />
          ))}
        </CertificateDefinition>
      </CertificateItem>
    </CertificateList>
  )
}

export default CompanyCertificate;
