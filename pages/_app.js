import { appWithTranslation } from 'next-i18next';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import '../styles/globals.sass'

function SaemmulterApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div id="start-of-content" />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default appWithTranslation(SaemmulterApp);
