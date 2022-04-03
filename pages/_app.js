import { appWithTranslation } from 'next-i18next';
import Footer from '../components/layout/footer';
import '../styles/globals.sass'

function SaemmulterApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default appWithTranslation(SaemmulterApp);
