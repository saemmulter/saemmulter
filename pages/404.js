import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import withHead from '../components/utilities/withHead';
import styled from '@emotion/styled';
import styles from '../styles/Error.module.sass';
import { mixin } from '../styles/designSystem';
import { images } from '../assets/images';
import ErrorStatus from '../components/pages/error/errorStatus';
import ErrorPrimary from '../components/pages/error/errorPrimary';
import ErrorSecondary from '../components/pages/error/errorSecondary';

const Container = styled.div();

const Contents = styled.main({
  ...mixin.widthSettings,
});

function Custom404(props) {
  const { t } = useTranslation('common')

  return (
    <Container className={`${styles.container} container`}>
      <Contents className='contents'>
        <ErrorStatus
          errorNumberic={'404'}
          errorImageSource={`${images.icons.error.e404}`}
        />
        <ErrorPrimary errorMessage={`${t('error.error404.message')}`} />
        <ErrorSecondary errorHelp={`${t('error.error404.help')}`} />
      </Contents>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Custom404, 'Page Not Found', '404');
