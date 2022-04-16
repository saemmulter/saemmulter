import React from 'react';
import { useTranslation } from 'react-i18next';
import { isIE } from 'react-device-detect';
import styled from '@emotion/styled';
import LinkButton from '../utilities/linkButton';
import { images } from '../../assets/images';
import { mq, fontWeights, Rem, colors } from '../../styles/designSystem';
import styles from '../../styles/Header.module.sass';
import ToggleNavigation from './toggleNavigation';
import GlobalNavigation from './globalNavigation';

const Container = styled.header(({ open }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: '9998',
  backgroundColor: 'rgba(255, 255, 255, 0.97)',
  width: '100%',
  [mq.maxTablet]: {
    '&::before': {
      content: open ? '""' : null,
      display: open ? 'block' : null,
      width: open ? '100%' : null,
      height: open ? '100%' : null,
      position: open ? 'fixed' : null,
      top: open ? 0 : null,
      left: open ? 0 : null,
      backgroundColor: open ? 'rgba(34, 34, 34, .5)' : null,
    },
  },
}));

const Contents = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `0 ${Rem(8)}`,
  width: '100%',
  height: Rem(58),
  [mq.maxTablet]: {
    justifyContent: 'space-between',
  },
  [mq.minXsmall]: {
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
  [mq.minSmall]: {
    backgroundImage: isKorean ? `url(${images.logos.ko.long.saemmulter})` : `url(${images.logos.en.long.saemmulter})`,
    width: Rem(254.51),
    height: Rem(50),
  },
}));

const IE = styled.div({
  padding: '10px',
  backgroundColor: '#fb4637',
  '& p': {
    textAlign: 'center',
    fontWeight: fontWeights.regular,
    fontSize: Rem(16),
    color: colors.white,
    '& strong': {
      fontWeight: fontWeights.black,
    },
    '& a': {
      color: colors.white,
      fontWeight: fontWeights.black,
      textDecoration: 'underline',
    },
  },
});

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

function Header() {
  const { i18n, t } = useTranslation('common')

  if (i18n.language === 'ko') {
    var isKorean = true
  } else {
    var isKorean = false
  }

  const menuMain = `/${i18n.language}`

  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <Container open={open}>
        <Contents className={styles.container}>
          <h1>
            <LinkButton href={menuMain}>
              <span>{t('header.main')}</span>
              <Identity isKorean={isKorean} />
            </LinkButton>
          </h1>
          <div
            className={styles['nav-container']}
            ref={node}
          >
            <ToggleNavigation
              open={open}
              setOpen={setOpen}
            />
            <GlobalNavigation
              open={open}
              setOpen={setOpen}
            />
          </div>
        </Contents>
      </Container>
      {isIE && <IE><p><strong>오래된 브라우저</strong>를 사용하고 있군요. 안전하고 편리한 인터넷을 위해 <LinkButton href="https://browsehappy.com/">브라우저를 업그레이드</LinkButton> 하세요.</p></IE>}
    </>
  )
}

export default Header;
