import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script'
import { appWithTranslation } from 'next-i18next';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import '../styles/globals.sass'
import * as googleAnalytics from '../components/utilities/googleAnalytics';

function SaemmulterApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      googleAnalytics.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  return (
    <>
      <Header />
      <div id="start-of-content" />
      <Component {...pageProps} />
      <Footer />
      <Script
        id="typekit"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(d) {let config = {kitId: 'rdt1yjr',scriptTimeout: 3000,async: true},h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;tk.async=true;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)})(document);`,
        }}
      />
    </>
  )
}

export default appWithTranslation(SaemmulterApp);
