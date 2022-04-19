import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const withHead = (Component, pageName, pageRouter) => {
  const App = props => {
    const { i18n } = useTranslation('common')

    if (i18n.language === 'ko') {
      var local = 'ko_KR'
      var title = '주식회사 샘물터'
      var description = '깨끗한 지하수 연구기업'
      var siteName = '샘물터'
    } else {
      var local = 'en_US'
      var title = 'Saemmulter Inc.'
      var description = 'Clean Groundwater Tech company'
      var siteName = 'Saemmulter'
    }

    const domain = `https://saemmulter.com/`
    const currentUrl = `${domain}${i18n.language}/${pageRouter}`

    return (
      <>
        <Head>
          <link rel='alternate' hrefLang='en-us' href={`${domain}en/${pageRouter}`} />
          <link rel='alternate' hrefLang='ko-kr' href={`${domain}ko/${pageRouter}`} />
          <link rel='canonical' href={currentUrl} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta name='format-detection' content='telephone=no' />
          <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
          <title>{title} : {pageName}</title>
          <meta name='description' content={description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property='og:title' content={`${title} : ${pageName}`} />
          <meta property='og:description' content={description} />
          <meta property='og:url' content={currentUrl} />
          <meta property='og:locale' content={local} />
          <meta property='og:image' content={`${domain}${i18n.language}-saemmulter-og-image.png?${(Math.random() * 7).toString(7)}`} />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content={siteName} />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return App;

};

export default withHead;
