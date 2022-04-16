import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../styles/Prcenter.module.sass';
import { mq, mixin, Rem, fontWeights } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import Cover from '../components/layout/cover';
import Subject from '../components/assets/subject';
import ProductsWoomulsem from '../components/pages/products/woomulsem';
import ProductsYouTube from '../components/pages/products/youTube';
import ProductsFeatures from '../components/pages/products/features';

const Container = styled.div();

const Contents = styled.main({
  [mq.maxTablet]: {
    width: '100%',
    '& section > div:first-of-type': {
      marginRight: Rem(15),
      marginLeft: Rem(15),
    },
  },
  [mq.minXsmall]: {
    ...mixin.widthSettings,
  },
});

const Definition = styled.section(({ directionColumn }) => ({
  margin: `${Rem(50)} 0`,
  '&:first-of-type': {
    marginTop: 0,
  },
  '&:last-of-type': {
    marginBottom: 0,
  },
  [mq.minXsmall]: {
    display: 'flex',
    flexDirection: directionColumn ? null : 'column',
    margin: `${Rem(100)} 0`,
  },
}));

const Description = styled.div(({ wide }) => ({
  paddingTop: Rem(20),
  [mq.maxTablet]: {
    margin: wide ? null : `0 ${Rem(15)}`
  },
  [mq.minXsmall]: {
    ...mixin.col,
    paddingLeft: wide ? Rem(20) : null,
  },
}));

const YouTubeEnglishNotice = styled.p({
  margin: `0 ${Rem(15)}`,
  paddingBottom: Rem(15),
  fontWeight: fontWeights.bold,
  color: 'red',
});

function Products(props) {
  const { i18n, t } = useTranslation('common')

  return (
    <Container className={`${styles.container} container`}>
      <Cover subject={t('header.products')} />
      <Contents className='contents'>
        <Definition directionColumn={false}>
          <Subject
            subjectBorder={false}
            subjectName={t('products.subject1')}
          />
          <Description wide={false}>
            <ProductsWoomulsem />
          </Description>
        </Definition>
        <Definition directionColumn={true}>
          <Subject
            subjectBorder={true}
            subjectName={t('products.subject2')}
          />
          <Description wide={true}>
            {i18n.language === 'en' && <YouTubeEnglishNotice>An English video is being produced. Please use YouTube’s automatic translation function.</YouTubeEnglishNotice>}
            <ProductsYouTube />
          </Description>
        </Definition>
        <Definition directionColumn={true}>
          <Subject
            subjectBorder={true}
            subjectName={t('products.subject3')}
          />
          <Description wide={false}>
            <ProductsFeatures />
          </Description>
        </Definition>
      </Contents>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Products, '우물셈 Products', 'products');
