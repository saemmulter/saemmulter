import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import withHead from '../components/utilities/withHead';

function Custom404(props) {
  return (
    <>
      <h1>404 - Page Not Found</h1>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Custom404, 'Page Not Found');
