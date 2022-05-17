import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import LinkButton from '../utilities/linkButton';
import SaemmulterAddress from '../utilities/officeAddress';
import SaemmulterEmail from '../utilities/officeEmail';
import SaemmulterTel from '../utilities/officeTel';
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

const Heading = styled.h2({
  ...mixin.screenReaderOnly,
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

// const LinkSocialNaverBlog = styled.i({
//   backgroundImage: `url(${images.logos.social.naverBlog})`,
// });

const LinkSocialAlibaba = styled.i({
  backgroundImage: `url(${images.logos.social.alibaba})`,
});

function Footer() {
  const { i18n, t } = useTranslation('common')

  return (
    <Container>
      <Contents role='contentinfo' aria-labelledby='footer-heading' className={styles.container}>
        <Heading id='footer-heading'>Saemmulter Footer</Heading>
        <div className={styles.laws}>
          <strong>{t('footer.company')}</strong>
          <dl>
            <dt>{t('footer.address.term')}</dt>
            <dd><SaemmulterAddress /></dd>
            {i18n.language === 'ko' &&
              <>
                <dt>대표이사</dt>
                <dd>윤필선</dd>
                <dt>사업자등록번호</dt>
                <dd>511-81-26566</dd>
              </>
            }
            <dt>Mail</dt>
            <dd><SaemmulterEmail /></dd>
            <dt>Tel</dt>
            <dd><SaemmulterTel /></dd>
          </dl>
        </div>
        <ul aria-label='Social Media Links'>
          <li><LinkButton href='https://www.facebook.com/CleanGroundwaterLab/'><LinkSocialFacebook aria-label={t('footer.social.facebook')}></LinkSocialFacebook></LinkButton></li>
          <li><LinkButton href='https://www.instagram.com/cleangroundwater.tech'><LinkSocialInstagram aria-label={t('footer.social.instagram')}></LinkSocialInstagram></LinkButton></li>
          <li><LinkButton href='https://www.youtube.com/channel/UCNPjWF6bT6GyMOPQtIDbh5g'><LinkSocialYouTube aria-label={t('footer.social.youtube')}></LinkSocialYouTube></LinkButton></li>
          {/* <li><LinkButton href='https://blog.naver.com/cgwater'><LinkSocialNaverBlog aria-label={t('footer.social.naver-blog')}></LinkSocialNaverBlog></LinkButton></li> */}
          <li><LinkButton href='https://kr19010829141zsds.trustpass.alibaba.com/'><LinkSocialAlibaba aria-label={t('footer.social.alibaba')}></LinkSocialAlibaba></LinkButton></li>
        </ul>
      </Contents>
    </Container>
  )
}

export default Footer;
