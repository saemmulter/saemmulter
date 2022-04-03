import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import withHead from '../components/utilities/withHead';

function Custom500(props) {
  return (
    <>
      <h1>500 - Server-side error occurred</h1>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Custom500, 'Page Not Found');
