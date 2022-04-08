import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../styles/Company.module.sass';
import { mq, mixin, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import Header from '../components/layout/header';
import Cover from '../components/layout/cover';
import Subject from '../components/assets/subject';
import ParagraphPrimary from '../components/assets/paragraphPrimary';
import CompanySaemmulter from '../components/pages/company/saemmulter';
import CompanyInfo from '../components/pages/company/info';
import CompanyTimeline from '../components/pages/company/timeline';
import CompanyValues from '../components/pages/company/values';
import CompanyPartners from '../components/pages/company/partners';

const Container = styled.div();

const Contents = styled.main({
  ...mixin.widthSettings,
  '& > div:first-of-type': {
    marginTop: 0,
  },
  '& > div:last-of-type': {
    marginBottom: 0,
  },
  [mq.minXsmall]: {
    '& > div:first-of-type > div': {
      paddingTop: 0,
    },
  },
});

const Definition = styled.div({
  margin: `${Rem(50)} 0`,
  [mq.minXsmall]: {
    display: 'flex',
    margin: `${Rem(100)} 0`,
  },
});

const Description = styled.div({
  paddingTop: Rem(20),
  [mq.minXsmall]: {
    ...mixin.col,
    paddingLeft: Rem(20),
  },
});

const Paragraphes = styled.div();

function Company(props) {
  const { t } = useTranslation('common')

  return (
    <>
      <Header />
      <Container className={`${styles.container} container`}>
        <Cover subject={t('header.company')} />
        <Contents className='contents'>
          <Definition>
            <Subject
              subjectBorder={false}
              subjectName={t('company.subject1')}
            />
            <Description>
              <Paragraphes>
                <ParagraphPrimary paragraphPrimary={t('company.description1')} />
                <CompanySaemmulter />
              </Paragraphes>
            </Description>
          </Definition>
          <Definition>
            <Subject
              subjectBorder={true}
              subjectName={t('company.subject2')}
            />
            <Description>
              <CompanyInfo />
            </Description>
          </Definition>
          <Definition>
            <Subject
              subjectBorder={true}
              subjectName={t('company.subject3')}
            />
            <Description>
              <CompanyTimeline />
            </Description>
          </Definition>
          <Definition>
            <Subject
              subjectBorder={true}
              subjectName={t('company.subject4')}
            />
            <Description>
              <Paragraphes>
                <ParagraphPrimary paragraphPrimary={t('company.description4')} />
              </Paragraphes>
              <CompanyValues />
            </Description>
          </Definition>
          <Definition>
            <Subject
              subjectBorder={true}
              subjectName={t('company.subject5')}
            />
            <Description>
              <CompanyPartners />
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

export default withHead(Company, '샘물터 Company');
