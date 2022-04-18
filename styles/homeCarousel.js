import styled from '@emotion/styled';
import { images } from '../assets/images';
import { colors, mq, Rem } from './designSystem';

export const HomeCarousel = styled.div({
  '& .slick-list, & .slick-slider': {
    position: 'relative',
    display: 'block',
  },
  '& .slick-track': {
    position: 'relative',
    display: 'flex',
    top: 0,
    left: 0,
  },
  '& .slick-loading': {
    '& .slick-slide, & .slick-track': {
      visibility: 'hidden',
    },
  },
  '& .slick-slider': {
    [mq.maxTablet]: {
      userSelect: 'none',
      touchAction: 'pan-y',
    },
    '& .slick-list, & .slick-track': {
      transform: 'translate3d(0,0,0)',
    },
  },
  '& .slick-list': {
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    '&:focus': {
      outline: 0,
    },
    '&.dragging': {
      cursor: 'pointer',
    },
  },
  '& .slick-slide': {
    width: '100%',
    height: '100%',
    minHeight: '1px',
    '[dir=rtl] &': {
      flexDirection: 'row-reverse',
    },
    '& img': {
      display: 'block',
      width: '100%',
    },
    '&.slick-loading img': {
      display: 'none',
    },
    '&.dragging img': {
      pointerEvents: 'none',
    },
    '.slick-initialized &': {
      display: 'block',
    },
    '.slick-vertical &': {
      display: 'block',
      height: 'auto',
      border: '1px solid transparent',
    },
  },
  '& .slick-arrow.slick-hidden': {
    display: 'none',
  },
  '& .slick-dots, & .slick-next, & .slick-prev': {
    position: 'absolute',
    display: 'block',
    padding: 0,
  },
  '& .slick-next, & .slick-prev': {
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    top: '50%',
    zIndex: 9,
    transform: 'translate(0,-50%)',
    marginTop: Rem(70),
    border: 'none',
    borderRadius: '100%',
    width: Rem(50),
    height: Rem(50),
    cursor: 'pointer',
    fontSize: 0,
    color: 'transparent',
    outline: 0,
    [mq.minXsmall]: {
      marginTop: Rem(130),
    },
    [mq.minXlarge]: {
      transform: 'translate(-50%,-50%)',
    },
    '&:hover': {
      outline: 0,
    },
    '&:focus-visible': {
      outline: `${colors.accent} auto ${Rem(5)}`,
    },
  },
  '& .slick-prev': {
    backgroundImage: `url(${images.icons.carouselPrevious})`,
    left: Rem(15),
    [mq.minXlarge]: {
      right: 'auto',
      left: '50%',
      marginLeft: `-${Rem(600)}`
    },
    '[dir=rtl] &': {
      right: Rem(15),
      left: 'auto',
    },
  },
  '& .slick-next': {
    backgroundImage: `url(${images.icons.carouselNext})`,
    right: Rem(15),
    [mq.minXlarge]: {
      right: 'auto',
      left: '50%',
      marginLeft: Rem(600)
    },
    '[dir=rtl] &': {
      right: 'auto',
      left: Rem(20),
    },
  },
  '& .slick-dotted.slick-slider': {
    marginBottom: Rem(30),
  },
  '& .slick-dots': {
    bottom: Rem(25),
    width: '100%',
    margin: 0,
    listStyle: 'none',
    textAlign: 'center',
    '& li': {
      position: 'relative',
      display: 'inline-block',
      width: Rem(20),
      height: Rem(20),
      margin: `0 ${Rem(5)}`,
      padding: 0,
      cursor: 'pointer',
      '& button': {
        fontSize: 0,
        lineHeight: 0,
        display: 'block',
        width: Rem(20),
        height: Rem(20),
        padding: Rem(5),
        cursor: 'pointer',
        color: 'transparent',
        border: 0,
        outline: 0,
        background: 'transparent',
        '&:focus, &:hover': {
          outline: 0,
        },
      },
    },
  },
})
