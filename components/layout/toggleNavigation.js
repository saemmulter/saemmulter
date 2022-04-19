import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { mq, Rem } from '../../styles/designSystem';
import { images } from '../../assets/images';

const ButtonNavigation = styled.button(({ open }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: 'transparent',
  padding: `${Rem(7)} 0`,
  width: Rem(34),
  height: Rem(34),
  [mq.minXsmall]: {
    display: 'none',
  },
  '& i': {
    display: 'block',
    width: open ? `${Rem(21)}` : `${Rem(20)}`,
    height: open ? `${Rem(2)}` : `${Rem(4)}`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    transition: 'all .3s linear',
    transformOrigin: '2px',
    position: 'relative',
    width: open ? Rem(21) : Rem(20),
    '&:nth-of-type(1)': {
      backgroundImage: open ? `url(${images.icons.menuOpen})` : `url(${images.icons.menuClose})`,
      transform: open ? 'translateY(-1px) rotate(45deg)' : null,
    },
    '&:nth-of-type(2)': {
      backgroundImage: open ? `url(${images.icons.menuOpen})` : `url(${images.icons.menuClose})`,
      opacity: open ? 0 : null,
    },
    '&:nth-of-type(3)': {
      backgroundImage: open ? `url(${images.icons.menuOpen})` : `url(${images.icons.menuClose})`,
      transform: open ? 'translateY(0px) rotate(-45deg)' : null,
    },
  },
}));

ButtonNavigation.defaultProps = {
  type: 'button',
};

function ToggleNavigation({ open, setOpen }) {
  const { t } = useTranslation('common')

  return (
    <ButtonNavigation
      aria-label={open ? t('header.label.menu-close') : t('header.label.menu-open')}
      aria-pressed={open}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <i />
      <i />
      <i />
    </ButtonNavigation>
  )
}

export default ToggleNavigation;
