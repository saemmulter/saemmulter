import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../../../styles/Products.module.sass';
import { Rem } from '../../../styles/designSystem';
import { images } from '../../../assets/images';

const Container = styled.div({
  overflow: 'hidden',
})

const FeatureList = styled.ul({
  marginTop: `-${Rem(50)}`,
  marginBottom: `-${Rem(50)}`,
});

const Icon = styled.i(({ icon }) => ({
  display: 'block',
  width: Rem(70),
  height: Rem(70),
  background: `url(${icon}) no-repeat 50% 50%/contain`,
}));

function FeatureItem({ feature }) {
  return (
    <li className={styles['feature-item']}>
      <div className={styles['feature-term']}>
        <Icon icon={feature.icon} />
        <h3>
          {feature.term1}
          {' '}
          <span>{feature.term2}</span>
        </h3>
      </div>
      <div className={styles['feature-description']}>
        <ul>
          <li>{feature.description1}</li>
          <li>{feature.description2}</li>
        </ul>
      </div>
    </li>
  )
}

function ProductsFeatures() {
  const { t } = useTranslation('common')

  const features = [
    {
      id: 1,
      icon: `${images.icons.products.features.features1}`,
      term1: `${t('feature.term1-1')}`,
      term2: `${t('feature.term1-2')}`,
      description1: `${t('feature.description1-1')}`,
      description2: `${t('feature.description1-2')}`,
    },
    {
      id: 2,
      icon: `${images.icons.products.features.features2}`,
      term1: `${t('feature.term2-1')}`,
      term2: `${t('feature.term2-2')}`,
      description1: `${t('feature.description2-1')}`,
      description2: `${t('feature.description2-2')}`,
    },
    {
      id: 3,
      icon: `${images.icons.products.features.features3}`,
      term1: `${t('feature.term3-1')}`,
      term2: `${t('feature.term3-2')}`,
      description1: `${t('feature.description3-1')}`,
      description2: `${t('feature.description3-2')}`,
    },
    {
      id: 4,
      icon: `${images.icons.products.features.features4}`,
      term1: `${t('feature.term4-1')}`,
      term2: `${t('feature.term4-2')}`,
      description1: `${t('feature.description4-1')}`,
      description2: `${t('feature.description4-2')}`,
    },
  ];

  return (
    <Container>
      <FeatureList>
        {features.map(feature => (
          <FeatureItem
            feature={feature}
            key={feature.id}
          />
        ))}
      </FeatureList>
    </Container>
  )
}

export default ProductsFeatures;
