import styled from '@emotion/styled';
import styles from '../styles/Home.module.sass';
import { fontWeights, Rem } from '../styles/designSystem';

const Paragraph = styled.p({
  fontWeight: fontWeights.black,
  fontSize: Rem(16),
});

function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Paragraph>Home</Paragraph>
      </main>
    </div>
  )
}

export default Home;
