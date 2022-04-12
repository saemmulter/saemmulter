import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, fontWeights, mixin, mq, Rem } from '../../../styles/designSystem';

const ImageProductSource = `/image.product.png?${(Math.random() * 7).toString(7)}`

const MainProduct = styled.div({
  paddingTop: Rem(30),
});

const ImageItem = styled.div({
  margin: '0 auto',
  width: '100%',
  maxWidth: Rem(1030),
});

const ImageProduct = styled.i({
  background: `url(${ImageProductSource}) no-repeat 50% 50%/contain`,
  display: 'block',
  paddingTop: '30%',
  height: 0,
  ...mixin.imageRendering,
});

const ParagraphPrimary = styled.p({
  marginTop: Rem(20),
  marginBottom: Rem(15),
  fontSize: Rem(22),
  color: colors.important,
  lineHeight: 1.18181818,
  textAlign: 'center',
  [mq.minLarge]: {
    marginTop: Rem(50),
  },
  '& strong': {
    fontWeight: fontWeights.bold,
  },
});

const ParagraphSecondary = styled.p({
  fontWeight: fontWeights.regular,
  fontSize: Rem(18),
  lineHeight: 1.22222222,
  textAlign: 'center',
});

function ProductsWoomulsem() {
  const { t } = useTranslation('common')

  return (
    <MainProduct>
      <ImageItem><ImageProduct /></ImageItem>
      <ParagraphPrimary><strong>{t('products.description1-1')}</strong></ParagraphPrimary>
      <ParagraphSecondary>{t('products.description1-2')}</ParagraphSecondary>
    </MainProduct>
  )
}

export default ProductsWoomulsem;
