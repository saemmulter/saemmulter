import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const withHead = (Component, pageName) => {
  const App = props => {
    const { i18n } = useTranslation('common')

    if (i18n.language === 'ko') {
      var hrefLang = 'ko-KR'
      var local = 'ko_KR'
      var title = '주식회사 샘물터'
      var description = '깨끗한 지하수 연구기업'
      var siteName = '샘물터'
    } else {
      var hrefLang = 'en-US'
      var local = 'en_US'
      var title = 'Saemmulter Inc.'
      var description = 'Clean Groundwater Tech company'
      var siteName = 'Saemmulter'
    }

    const domain = `https://domain.com/`

    return (
      <>
        <Head>
          <link rel='alternate' hrefLang={hrefLang} href={domain} />
          <link rel='canonical' href={domain} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
          <title>{title} : {pageName}</title>
          <meta name='description' content={description} />
          <meta property='og:title' content={`${title} : ${pageName}`} />
          <meta property='og:description' content={description} />
          <meta property='og:url' content={domain} />
          <meta property='og:locale' content={local} />
          <meta property='og:image' content={`${domain}saemmulter-og-image.png?${(Math.random() * 7).toString(7)}`} />
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
