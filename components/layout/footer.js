import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import LinkButton from '../utilities/linkButton';
import { images } from '../../assets/images';
import { mq, mixin, colors, Rem } from '../../styles/designSystem';
import styles from '../../styles/Footer.module.sass';

const Container = styled.footer({
  backgroundColor: colors.important,
  width: '100%',
});

const Contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  ...mixin.widthSettings,
  paddingTop: Rem(30),
  paddingBottom: Rem(30),
  [mq.minSmall]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

const LinkSocialFacebook = styled.i({
  backgroundImage: `url(${images.logos.social.facebook})`,
});

const LinkSocialInstagram = styled.i({
  backgroundImage: `url(${images.logos.social.instagram})`,
});

const LinkSocialYouTube = styled.i({
  backgroundImage: `url(${images.logos.social.youTube})`,
});

const LinkSocialNaverBlog = styled.i({
  backgroundImage: `url(${images.logos.social.naverBlog})`,
});

const LinkSocialAlibaba = styled.i({
  backgroundImage: `url(${images.logos.social.alibaba})`,
});

function Footer() {
  const { t } = useTranslation('common')

  return (
    <Container>
      <Contents className={styles.container}>
        <div className={styles.laws}>
          <strong>{t('footer.company')}</strong>
          <dl>
            <dt>{t('footer.address.term')}</dt>
            <dd><address>{t('footer.address.description')}</address></dd>
            <dt>Mail</dt>
            <dd><a href="mailto:cgwateric@gmail.com">cgwateric@gmail.com</a></dd>
            <dt>Tel</dt>
            <dd><a href="tel:+82-10-7413-1102">+82-10-7413-1102</a></dd>
          </dl>
        </div>
        <ul>
          <li><LinkButton href='https://www.facebook.com/CleanGroundwaterLab/'><LinkSocialFacebook aria-label={t('footer.social.facebook')}></LinkSocialFacebook></LinkButton></li>
          <li><LinkButton href='https://www.instagram.com/cleangroundwater.tech'><LinkSocialInstagram aria-label={t('footer.social.instagram')}></LinkSocialInstagram></LinkButton></li>
          <li><LinkButton href='https://www.youtube.com/channel/UCNPjWF6bT6GyMOPQtIDbh5g'><LinkSocialYouTube aria-label={t('footer.social.youtube')}></LinkSocialYouTube></LinkButton></li>
          <li><LinkButton href='https://blog.naver.com/cgwater'><LinkSocialNaverBlog aria-label={t('footer.social.naver-blog')}></LinkSocialNaverBlog></LinkButton></li>
          <li><LinkButton href='https://kr19010829141zsds.trustpass.alibaba.com/'><LinkSocialAlibaba aria-label={t('footer.social.alibaba')}></LinkSocialAlibaba></LinkButton></li>
        </ul>
      </Contents>
    </Container>
  )
}

export default Footer;
