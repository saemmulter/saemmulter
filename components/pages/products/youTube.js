import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../../../styles/Products.module.sass';
import YouTubePlayer from '../../utilities/youTubePlayer';
import { colors, fontWeights, mixin, mq, Rem } from '../../../styles/designSystem';

const VideoContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [mq.minLarge]: {
    flexDirection: 'row',
  },
});

const YouTubeContainer = styled.div({
  [mq.minLarge]: {
    width: Rem(475),
  },
});

const Paragraph = styled.p({
  fontWeight: fontWeights.bold,
  fontSize: Rem(22),
  lineHeight: 1.36363636,
  color: colors.default,
  [mq.maxSmall]: {
    marginRight: Rem(15),
    marginLeft: Rem(15),
    paddingTop: Rem(10),
  },
  [mq.minLarge]: {
    ...mixin.col,
    paddingLeft: Rem(30),
    fontSize: Rem(28),
  },
  '& strong': {
    fontWeight: fontWeights.black,
    color: colors.accent,
  },
});

function ProductsYouTube() {
  const { i18n, t } = useTranslation('common')

  const youTubeSourceEn = `https://www.youtube.com/embed/LCipFMsG5Vc`
  const youTubeSourceKo = `https://www.youtube.com/embed/LCipFMsG5Vc`

  return (
    <VideoContainer>
      <YouTubeContainer>
        <div className={styles['video--you-tube']}>
          {i18n.language === 'en' && <YouTubePlayer htmlSrc={youTubeSourceEn} />}
          {i18n.language === 'ko' && <YouTubePlayer htmlSrc={youTubeSourceKo} />}
        </div>
      </YouTubeContainer>
      <Paragraph>{t('products.description2')}</Paragraph>
    </VideoContainer>
  )
}

export default ProductsYouTube;
