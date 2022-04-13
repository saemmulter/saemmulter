import React from 'react';
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

const Paragraph = styled.p(({ isKorean }) => ({
  fontWeight: fontWeights.thin,
  fontSize: Rem(18),
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
    fontSize: Rem(38),
    fontWeight: fontWeights.bold,
    '& span': {
      display: 'block',
    },
  },
  '& strong': {
    display: isKorean ? 'inline' : 'inline-block',
    position: 'relative',
    fontWeight: fontWeights.black,
    color: 'transparent',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: isKorean ? 0 : Rem(2),
      left: 0,
      width: '100%',
      height: Rem(5),
      backgroundColor: colors.accent,
      [mq.minLarge]: {
        bottom: isKorean ? 0 : Rem(5),
        height: Rem(10),
      },
    },
    '&::after': {
      content: 'attr(placeholder)',
      position: 'absolute',
      left: 0,
      fontWeight: fontWeights.black,
      color: colors.important,
      [mq.minLarge]: {
        top: isKorean ? `-${Rem(2)}` : Rem(2),
      },
    },
  },
}));

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
      {i18n.language === 'en' &&
        <Paragraph isKorean={false}>
          We will show you how to assemble and use the&nbsp;<strong placeholder='Woomulsem'>Woomulsem</strong>
        </Paragraph>
      }
      {i18n.language === 'ko' &&
        <Paragraph isKorean={true}>
          <strong placeholder='우물셈'>우물셈</strong>의&nbsp;<span>조립법과 사용법을&nbsp;</span>알려드립니다
        </Paragraph>
      }
    </VideoContainer>
  )
}

export default ProductsYouTube;
