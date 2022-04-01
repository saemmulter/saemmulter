import Head from 'next/head';

const withHead = (Component, pageName) => {
  const App = props => {
    return (
      <>
        <Head>
          <link rel='alternate' hrefLang='ko-KR' href='https://domain.com/' />
          <link rel='canonical' href='https://domain.com/' key='canonical' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
          <title key='title'>Saemmulter Inc. : {pageName}</title>
          <meta name='description' content='With information on the water in the ground, safety, provides information on sustainable water resources' key='description' />
          <meta property='og:title' content={`Saemmulter Inc. : ${pageName}`} />
          <meta property='og:description' content='With information on the water in the ground, safety, provides information on sustainable water resources' />
          <meta property='og:url' content='https://domain.com/' key='og:url' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:image' content={`https://domain.com/saemmulter-og-image.png?${Math.random().toString(36).substr(2, 11)}`} />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Saemmulter' key='og:site_name' />
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css" />
        </Head>
        <Component {...props} />
      </>
    );
  };

  return App;

};

export default withHead;
