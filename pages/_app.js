import Head from 'next/head'
import { isIE } from 'react-device-detect';
import Header from '../components/layout/header';
import Footer from '../components/layout/Footer';

import '../styles/globals.sass'

function SaemmulterApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='alternate' hrefLang='ko-KR' href='https://domain.com/' key='alternate' />
        <link rel='canonical' href='https://domain.com/' key='canonical' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <title key='title'>Saemmulter Inc. : Clean Groundwater Tech</title>
        <meta name='description' content='' key='description' />
        <meta property='og:title' content='Saemmulter Inc. : Clean Groundwater Tech' key='og:title' />
        <meta property='og:description' content='With information on the water in the ground, safety, provides information on sustainable water resources' key='og:description' />
        <meta property='og:url' content='https://domain.com/' key='og:url' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:image' content={`https://domain.com/saemmulter-og-image.png?${Math.random().toString(36).substr(2, 11)}`} key='og:image' />
        <meta property='og:type' content='website' key='og:type' />
        <meta property='og:site_name' content='Saemmulter' key='og:site_name' />
      </Head>
      <Header />
      {isIE && <p>IE는 지원하지 않습니다.</p>}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default SaemmulterApp
