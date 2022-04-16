import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import LinkButton from '../utilities/linkButton';
import { images } from '../../assets/images';
import { colors, fontWeights, mixin, mq, Rem } from '../../styles/designSystem';
import styles from '../../styles/Header.module.sass';

const NavigationBar = styled.nav(({ open }) => ({
  [mq.maxTablet]: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: Rem(270),
    height: '100%',
    transform: open ? 'translateX(0)' : 'translateX(100vw)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: colors.white,
  },
}));

const ImageSlogan = styled.i({
  width: Rem(177),
  height: Rem(10),
  background: `url(${images.logos.saemmulterSlogan}) no-repeat 100% 50%/contain`,
});

const Dummy = styled.div({
  ...mixin.colAuto,
});

const LinkKorean = styled.a(({ isKorean }) => ({
  fontWeight: isKorean ? fontWeights.black : fontWeights.regular,
  opacity: isKorean ? 1 : 0.7
}));

const LinkEnglish = styled.a(({ isEnglish }) => ({
  fontWeight: isEnglish ? fontWeights.black : fontWeights.regular,
  opacity: isEnglish ? 1 : 0.7
}));

function GlobalNavigation({ open, setOpen }) {
  const { i18n, t } = useTranslation('common')

  if (i18n.language === 'ko') {
    var isKorean = true
    var isEnglish = false
  } else {
    var isKorean = false
    var isEnglish = true
  }

  const menuCompany = `/${i18n.language}/company`
  const menuProducts = `/${i18n.language}/products`
  const menuPrCenter = `/${i18n.language}/pr-center`
  const menuDownloads = `/${i18n.language}/downloads`
  const menuContactUs = `/${i18n.language}/contact-us`

  const router = useRouter()

  return (
    <NavigationBar open={open} className={styles.nav}>
      <div className={styles['menu-control']}>
        <ImageSlogan aria-label='Clean Groundwater Tech' />
      </div>
      <Dummy />
      <ol data-router={router.pathname} onClick={() => setOpen(!open)}>
        <li><LinkButton href={menuCompany}>{t('header.company')}</LinkButton></li>
        <li><LinkButton href={menuProducts}>{t('header.products')}</LinkButton></li>
        <li><LinkButton href={menuPrCenter}>{t('header.pr-center')}</LinkButton></li>
        <li><LinkButton href={menuDownloads}>{t('header.downloads')}</LinkButton></li>
        <li><LinkButton href={menuContactUs}>{t('header.contact-us')}</LinkButton></li>
      </ol>
      <Dummy />
      <ul>
        <li><LinkKorean href={`/ko${router.pathname}`} locale='ko' aria-label='Choose Korean' isKorean={isKorean}>Ko</LinkKorean></li>
        <li><LinkEnglish href={`/en${router.pathname}`} locale='en' aria-label='Choose English' isEnglish={isEnglish}>En</LinkEnglish></li>
      </ul>
    </NavigationBar>
  )
}

export default GlobalNavigation;
