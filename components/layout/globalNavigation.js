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

const MenuLink = styled.li(({ currentRouter }) => ({
  '& a': {
    color: currentRouter ? colors.accent : colors.default,
  },
}));

const BlogLink = styled.a({
  color: colors.default,
});

const ImageSlogan = styled.i({
  width: Rem(177),
  height: Rem(10),
  background: `url(${images.logos.saemmulterSlogan}) no-repeat 100% 50%/contain`,
});

const Dummy = styled.div({
  ...mixin.colAuto,
});

const LinkLanguage = styled.li(({ isKorean }) => ({
  '& a': {
    fontWeight: isKorean ? fontWeights.black : fontWeights.regular,
    opacity: isKorean ? 1 : 0.7,
  },
}));

function GlobalNavigation({ open, setOpen }) {
  const { i18n, t } = useTranslation('common')

  const menuCompany = `/${i18n.language}/company`
  const menuProducts = `/${i18n.language}/products`
  const menuContents = `https://contents.saemmulter.com/`
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
      <ol onClick={() => setOpen(!open)}>
        <MenuLink currentRouter={router.pathname === '/company' ? true : false}>
          <LinkButton
            href={menuCompany}
            aria-label={router.pathname === '/company' ? t('header.active') : null}
          >
            {t('header.company')}
          </LinkButton>
        </MenuLink>
        <MenuLink currentRouter={router.pathname === '/products' ? true : false}>
          <LinkButton
            href={menuProducts}
            aria-label={router.pathname === '/products' ? t('header.active') : null}
          >
            {t('header.products')}
          </LinkButton>
        </MenuLink>
        {i18n.language === 'ko' ? <li><BlogLink href={menuContents}>콘텐츠</BlogLink></li> : null}
        <MenuLink currentRouter={router.pathname === '/pr-center' ? true : false}>
          <LinkButton
            href={menuPrCenter}
            aria-label={router.pathname === '/pr-center' ? t('header.active') : null}
          >
            {t('header.pr-center')}
          </LinkButton>
        </MenuLink>
        <MenuLink currentRouter={router.pathname === '/downloads' ? true : false}>
          <LinkButton
            href={menuDownloads}
            aria-label={router.pathname === '/downloads' ? t('header.active') : null}
          >
            {t('header.downloads')}
          </LinkButton>
        </MenuLink>
        <MenuLink currentRouter={router.pathname === '/contact-us' ? true : false}>
          <LinkButton
            href={menuContactUs}
            aria-label={router.pathname === '/contact-us' ? t('header.active') : null}
          >
            {t('header.contact-us')}
          </LinkButton>
        </MenuLink>
      </ol>
      <Dummy />
      <ul>
        <LinkLanguage isKorean={i18n.language === 'ko' ? true : false}>
          <LinkButton
            href={`/ko${router.pathname}`}
            locale='ko'
            aria-label={i18n.language === 'ko' ? '한국어 선택 / Choose Korean' : 'Choose Korean / 한국어 선택'}
          >
            Ko
          </LinkButton>
        </LinkLanguage>
        <LinkLanguage isKorean={i18n.language === 'ko' ? false : true}>
          <LinkButton
            aria-label={i18n.language === 'ko' ? '영어 선택 / Choose English' : 'Choose English / 영어 선택'}
            href={`/en${router.pathname}`}
            locale='en'
          >
            En
          </LinkButton>
        </LinkLanguage>
      </ul>
    </NavigationBar>
  )
}

export default GlobalNavigation;
