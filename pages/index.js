import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styled from '@emotion/styled';
import styles from '../styles/Home.module.sass';
import { fontWeights, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';

const Paragraph = styled.p({
  fontWeight: fontWeights.black,
  fontSize: Rem(16),
});

function Home(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Paragraph>Home</Paragraph>
      </main>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Home, 'Clean Groundwater Tech');
