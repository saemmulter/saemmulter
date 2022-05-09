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

const LinkLanguage = styled.a(({ isKorean }) => ({
  fontWeight: isKorean ? fontWeights.black : fontWeights.regular,
  opacity: isKorean ? 1 : 0.7
}));

function GlobalNavigation({ open, setOpen }) {
  const { i18n, t } = useTranslation('common')

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
        <li><LinkButton href={menuCompany} aria-label={router.pathname === '/company' ? t('header.active') : null}>{t('header.company')}</LinkButton></li>
        <li><LinkButton href={menuProducts} aria-label={router.pathname === '/products' ? t('header.active') : null}>{t('header.products')}</LinkButton></li>
        <li><LinkButton href={menuPrCenter} aria-label={router.pathname === '/pr-center' ? t('header.active') : null}>{t('header.pr-center')}</LinkButton></li>
        <li><LinkButton href={menuDownloads} aria-label={router.pathname === '/downloads' ? t('header.active') : null}>{t('header.downloads')}</LinkButton></li>
        <li><LinkButton href={menuContactUs} aria-label={router.pathname === '/contact-us' ? t('header.active') : null}>{t('header.contact-us')}</LinkButton></li>
      </ol>
      <Dummy />
      <ul>
        {i18n.language === 'ko'
          ?
          <>
            <li>
              <LinkLanguage
                href={`/ko${router.pathname}`}
                locale='ko'
                aria-label='한국어 선택 / Choose Korean'
                isKorean={true}
              >
                Ko
              </LinkLanguage>
            </li>
            <li>
              <LinkLanguage
                href={`/en${router.pathname}`}
                locale='en'
                aria-label='영어 선택 / Choose English'
                isKorean={false}
              >
                En
              </LinkLanguage>
            </li>
          </>
          :
          <>
            <li>
              <LinkLanguage
                href={`/ko${router.pathname}`}
                locale='ko'
                aria-label='Choose Korean / 한국어 선택'
                isKorean={false}
              >
                Ko
              </LinkLanguage>
            </li>
            <li>
              <LinkLanguage
                href={`/en${router.pathname}`}
                locale='en'
                aria-label='Choose English / 영어 선택'
                isKorean={true}
              >
                En
              </LinkLanguage>
            </li>
          </>
        }
      </ul>
    </NavigationBar>
  )
}

export default GlobalNavigation;
