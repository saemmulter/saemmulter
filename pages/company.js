import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from '@emotion/styled';
import styles from '../styles/Home.module.sass';
import withHead from '../components/utilities/withHead';
import Header from '../components/layout/header';
import Cover from '../components/layout/cover';
import { useTranslation } from 'react-i18next';

const Container = styled.div()

const Contents = styled.main()

function Company(props) {
  const { i18n, t } = useTranslation('common')

  return (
    <>
      <Header />
      <Container className={`${styles.container} container`}>
        <Cover><h1>{t('header.company')}</h1></Cover>
        <Contents>
          샘물터(company) 페이지
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
