import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import styled from '@emotion/styled';
import { HomeCarousel } from '../../../styles/homeCarousel';
import { mq, fontWeights, Rem, colors, mixin } from '../../../styles/designSystem';

const CompanySmallSource = `/main.carousel.small.company.png?${(Math.random() * 7).toString(7)}`
const ProductsSmallSource = `/main.carousel.small.products.png?${(Math.random() * 7).toString(7)}`
const PressSmallSource = `/main.carousel.small.press.png?${(Math.random() * 7).toString(7)}`
const CompanyLargeSource = `/main.carousel.large.company.png?${(Math.random() * 7).toString(7)}`
const ProductsLargeSource = `/main.carousel.large.products.png?${(Math.random() * 7).toString(7)}`
const PressLargeSource = `/main.carousel.large.press.png?${(Math.random() * 7).toString(7)}`

const ItemCompany = styled.div({
  position: 'relative',
  '& img': {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    ...mixin.imageRendering,
  },
  '& .item-company': {
    position: 'absolute',
    top: '50%',
    right: Rem(30),
    transform: 'translate(0,-50%)',
    marginTop: Rem(180),
    textAlign: 'right',
    [mq.minXsmall]: {
      marginTop: `-${Rem(20)}`,
    },
    [mq.minXlarge]: {
      right: 'auto',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: Rem(1250),
    },
    '& strong': {
      fontWeight: fontWeights.black,
      fontSize: Rem(30),
      color: colors.important,
      [mq.minXsmall]: {
        fontSize: Rem(72),
      },
    },
    '& p': {
      paddingTop: Rem(20),
      fontWeight: fontWeights.regular,
      fontSize: Rem(20),
      color: colors.default,
      [mq.minXsmall]: {
        paddingTop: Rem(10),
        fontSize: Rem(24),
      },
    },
  },
});

const ImageCarouselCompany = styled.img({
  backgroundImage: `url(${CompanySmallSource})`,
  [mq.minXsmall]: {
    backgroundImage: `url(${CompanyLargeSource})`,
    height: '728px',
  },
});

const Item = styled.div({
  position: 'relative',
  '& img': {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    ...mixin.imageRendering,
  },
  '& .item': {
    position: 'absolute',
    top: '50%',
    right: Rem(80),
    left: Rem(80),
    transform: 'translate(0,-50%)',
    marginTop: Rem(150),
    height: Rem(205),
    color: colors.white,
    [mq.minXsmall]: {
      right: Rem(110),
      left: Rem(110),
      marginTop: Rem(160),
      height: Rem(218),
    },
    [mq.minXlarge]: {
      right: 'auto',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: Rem(1030),
    },
    '& strong': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      height: Rem(58),
      fontWeight: fontWeights.black,
      fontSize: Rem(16),
      textTransform: 'uppercase',
      lineHeight: 1.25,
      [mq.minXsmall]: {
        height: Rem(114),
        fontWeight: fontWeights.black,
        fontSize: Rem(32),
      },
    },
    '& p': {
      marginTop: Rem(40),
      fontWeight: fontWeights.bold,
      fontSize: Rem(14),
      letterSpacing: '-.05em',
      lineHeight: 1.5,
      [mq.minXsmall]: {
        marginTop: Rem(50),
        fontSize: Rem(18),
      },
    },
  },
});

const ImageCarouselProducts = styled.img({
  backgroundImage: `url(${ProductsSmallSource})`,
  [mq.minXsmall]: {
    backgroundImage: `url(${ProductsLargeSource})`,
    height: '728px',
  },
});

const ImageCarouselPress = styled.img({
  backgroundImage: `url(${PressSmallSource})`,
  [mq.minXsmall]: {
    backgroundImage: `url(${PressLargeSource})`,
    height: '728px',
  },
});

function Carousel() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          draggable: true,
        },
      },
    ],
  };

  const { t } = useTranslation('common')

  return (
    <HomeCarousel>
      <Slider {...settings}>
        <ItemCompany>
          <ImageCarouselCompany
            src={`/bg-main-carousel.png`}
            alt=''
          />
          <div className='item-company'>
            <strong>{t('carousel.subject1')}</strong>
            <p>{t('carousel.description1')}</p>
          </div>
        </ItemCompany>
        <Item>
          <ImageCarouselProducts
            src={`/bg-main-carousel.png`}
            alt='' />
          <div className='item'>
            <strong>
              {t('carousel.subject2-1')}
              {' '}
              <span>{t('carousel.subject2-2')}</span>
              {' '}
              {t('carousel.subject2-3')}
            </strong>
            <p>{t('carousel.description2')}</p>
          </div>
        </Item>
        <Item>
          <ImageCarouselPress
            src={`/bg-main-carousel.png`}
            alt=''
          />
          <div className='item'>
            <strong>
              {t('carousel.subject3-1')}
              {' '}
              <span>{t('carousel.subject3-2')}</span>
              {' '}
              {t('carousel.subject3-3')}
            </strong>
            <p>{t('carousel.description3')}</p>
          </div>
        </Item>
      </Slider>
    </HomeCarousel>
  )
}

export default Carousel;
