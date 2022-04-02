import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import LinkButton from '../../utilities/linkButton';
import { images } from '../../../assets/images';
import { mq, mixin, fontWeights, Rem } from '../../../styles/designSystem';
import styles from '../../../styles/Header.module.sass';

const Container = styled.header({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
});

const Contents = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Rem(8)}`,
  width: '100%',
  height: Rem(58),
  [mq.maxSmall]: {
    justifyContent: 'space-between',
  },
  [mq.minLarge]: {
    height: Rem(110),
  },
});

const Identity = styled.i(({ isKorean }) => ({
  display: 'block',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0 50%',
  backgroundSize: 'contain',
  backgroundImage: isKorean ? `url(${images.logos.ko.short.saemmulter})` : `url(${images.logos.en.short.saemmulter})`,
  width: Rem(127.27),
  height: Rem(25),
  [mq.minLarge]: {
    backgroundImage: isKorean ? `url(${images.logos.ko.long.saemmulter})` : `url(${images.logos.en.long.saemmulter})`,
    width: Rem(254.51),
    height: Rem(50),
  },
}));

const ButtonMenuOpen = styled.button({
  display: 'flex',
  [mq.minLarge]: {
    display: 'none',
  },
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  width: Rem(34),
  height: Rem(34),
  '&::before': {
    content: '""',
    display: 'block',
    width: Rem(20),
    height: Rem(16.64),
    background: `url(${images.icons.menuOpen}) no-repeat 50% 50%/contain`
  },
});

const NavigationBar = styled.div(({ navigationBar }) => ({
  [mq.maxSmall]: {
    position: 'fixed',
    top: 0,
    display: navigationBar ? 'block' : 'none',
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(34, 34, 34, .5)',
  },
  [mq.minLarge]: {
    ...mixin.col,
  },
}));

const ImageSlogan = styled.i({
  width: Rem(177),
  height: Rem(10),
  background: `url(${images.logos.saemmulterSlogan}) no-repeat 100% 50%/contain`,
});

const ButtonMenuClose = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: Rem(32),
  height: Rem(32),
  backgroundColor: 'transparent',
  '&::before': {
    content: '""',
    display: 'block',
    width: Rem(18),
    height: Rem(18),
    background: `url(${images.icons.menuClose}) no-repeat 50% 50%/contain`
  },
});

const Dummy = styled.div({
  width: '1px',
});

const LinkKorean = styled.a(({ isKorean }) => ({
  fontWeight: isKorean ? fontWeights.black : fontWeights.regular,
  opacity: isKorean ? 1 : 0.7
}));

const LinkEnglish = styled.a(({ isEnglish }) => ({
  fontWeight: isEnglish ? fontWeights.black : fontWeights.regular,
  opacity: isEnglish ? 1 : 0.7
}));

ButtonMenuOpen.defaultProps = {
  type: 'button',
};

ButtonMenuClose.defaultProps = {
  type: 'button',
};

function Header() {
  const { i18n, t } = useTranslation('common')

  const [navigationBar, setNavigationBar] = useState(false);

  const handleNavigation = () => {
    setNavigationBar(!navigationBar);
  };

  if (i18n.language === 'ko') {
    var isKorean = true
    var isEnglish = false
  } else {
    var isKorean = false
    var isEnglish = true
  }
  const menuMain = `/${i18n.language}`
  const menuCompany = `/${i18n.language}/company`
  const menuProducts = `/${i18n.language}/products`
  const menuPrCenter = `/${i18n.language}/pr-center`
  const menuDownloads = `/${i18n.language}/downloads`
  const menuContactUs = `/${i18n.language}/contact-us`

  return (
    <Container>
      <Contents className={styles.container}>
        <h1>
          <LinkButton href={menuMain}>
            <span>{t('header.main')}</span>
            <Identity isKorean={isKorean} />
          </LinkButton>
        </h1>
        <ButtonMenuOpen aria-label={t('header.label.menu-open')} onClick={handleNavigation} />
        <NavigationBar navigationBar={navigationBar}>
          <nav>
            <div className={styles['menu-control']}>
              <ImageSlogan aria-label='Clean Groundwater Tech' />
              <ButtonMenuClose aria-label={t('header.label.menu-close')} onClick={handleNavigation} />
            </div>
            <Dummy />
            <ol>
              <li><LinkButton href={menuCompany}>{t('header.company')}</LinkButton></li>
              <li><LinkButton href={menuProducts}>{t('header.products')}</LinkButton></li>
              <li><LinkButton href={menuPrCenter}>{t('header.pr-center')}</LinkButton></li>
              <li><LinkButton href={menuDownloads}>{t('header.downloads')}</LinkButton></li>
              <li><LinkButton href={menuContactUs}>{t('header.contact-us')}</LinkButton></li>
            </ol>
            <Dummy />
            <ul>
              <li><LinkKorean href='/ko' locale='ko' aria-label='Choose Korean' isKorean={isKorean}>Ko</LinkKorean></li>
              <li><LinkEnglish href='/en' locale='en' aria-label='Choose English' isEnglish={isEnglish}>En</LinkEnglish></li>
            </ul>
          </nav>
        </NavigationBar>
      </Contents>
    </Container>
  )
}

export default Header;
