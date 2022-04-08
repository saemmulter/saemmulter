import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../styles/Prcenter.module.sass';
import { mq, mixin, fontWeights, Rem, colors } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import Header from '../components/layout/header';
import Cover from '../components/layout/cover';
import Subject from '../components/assets/subject';
import CompanyPress from '../components/pages/pr-center/press';
import CompanyCertificate from '../components/pages/pr-center/certificate';

const Container = styled.div();

const Contents = styled.main({
  [mq.maxTablet]: {
    width: '100%',
    '& section > div:first-of-type': {
      marginRight: Rem(15),
      marginLeft: Rem(15),
    },
  },
  [mq.minXsmall]: {
    ...mixin.widthSettings,
  },
});

const Definition = styled.section(({ directionColumn }) => ({
  margin: `${Rem(50)} 0`,
  '&:first-of-type': {
    marginTop: 0,
  },
  '&:last-of-type': {
    marginBottom: 0,
  },
  [mq.minXsmall]: {
    display: 'flex',
    flexDirection: directionColumn ? null : 'column',
    margin: `${Rem(100)} 0`,
  },
}));

const Description = styled.div(({ directionColumn }) => ({
  paddingTop: Rem(20),
  [mq.maxTablet]: {
    margin: directionColumn ? `0 ${Rem(15)}` : null,
  },
  [mq.minXsmall]: {
    ...mixin.col,
    overflow: 'hidden',
    paddingLeft: directionColumn ? Rem(20) : null,
  },
}));

function Company(props) {
  const { i18n, t } = useTranslation('common')

  if (i18n.language === 'ko') {
    var isKorean = true
  } else {
    var isKorean = false
  }

  return (
    <>
      <Header />
      <Container className={`${styles.container} container`}>
        <Cover subject={t('header.pr-center')} />
        <Contents className='contents'>
          <Definition directionColumn={false}>
            <Subject
              subjectBorder={false}
              subjectName={t('pr-center.subject1')}
            />
            <Description directionColumn={false}>
              {i18n.language === 'en' && <p className={styles.caution}>The following articles use a translator for each article. As a result, the translation may not be good condition. Thank you.</p>}
              <CompanyPress />
            </Description>
          </Definition>
          <Definition directionColumn={true}>
            <Subject
              subjectBorder={true}
              subjectName={t('pr-center.subject2')}
            />
            <Description directionColumn={true}>
              <CompanyCertificate />
            </Description>
          </Definition>
        </Contents>
      </Container>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Company, '보도자료 PR Center');
