import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../styles/Home.module.sass';
import { Rem, mixin, colors } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import LinkButton from '../components/utilities/linkButton';
import YouTubePlayer from '../components/utilities/youTubePlayer';
import SubjectCenter from '../components/pages/home/subjectCenter';
import HomeDescription from '../components/pages/home/description';
import MoreLink from '../components/pages/home/moreLink';
import SubjectLeft from '../components/pages/home/subjectLeft';
import Carousel from '../components/pages/home/carousel';
import { images } from '../assets/images';

const ImageProductSource = `/image.product.png?${(Math.random() * 7).toString(7)}`

const Container = styled.div({
  width: '100%',
});

const Contents = styled.main({
  ...mixin.widthSettings,
});

const ImageItem = styled.div({
  margin: '0 auto',
  width: '100%',
  maxWidth: Rem(1030),
});

const ImageProduct = styled.i({
  background: `url(${ImageProductSource}) no-repeat 50% 50%/contain`,
  display: 'block',
  paddingTop: '30%',
  height: 0,
  ...mixin.imageRendering,
});

const YouTubeButton = styled.button(({ imageSource }) => ({
  backgroundImage: `url(${imageSource})`,
  '& i': {
    width: Rem(70),
    height: Rem(79),
    background: `url(${images.icons.youTube.button}) no-repeat 50% 50%/contain`,
    filter: 'invert(100%) sepia(79%) saturate(2%) hue-rotate(105deg) brightness(111%) contrast(101%)',
    transition: 'all .3s linear',
  },
  '&:hover, &:focus': {
    '& i': {
      filter: 'invert(57%) sepia(70%) saturate(543%) hue-rotate(151deg) brightness(96%) contrast(95%)',
    },
  },
  '&:focus-visible': {
    outline: `${colors.accent} auto ${Rem(5)}`,
  },
}));

YouTubeButton.defaultProps = {
  type: 'button',
};

function Home(props) {
  const { i18n, t } = useTranslation('common')

  const menuCompany = `/${i18n.language}/company`
  const menuProducts = `/${i18n.language}/products`
  const menuPrCenter = `/${i18n.language}/pr-center`

  const youTubeSourceKo = `jnb7td19VbY`
  const youTubeSourceEn = `jnb7td19VbY`

  const [visibleYouTubePlayer, setVisibleYouTubePlayer] = useState(false);

  return (
    <Container className={`${styles.container} container`}>
      <Carousel />
      <Contents className={styles.contents}>
        <section>
          <SubjectCenter subjectCenter={t('home.subject1')} />
          <HomeDescription
            descriptionPrimary={t('home.description1-1')}
            descriptionSecondary={t('home.description1-2')}
          />
          <MoreLink linkHref={menuCompany} linkLabel={t('home.more-link')} />
        </section>
        <section>
          <SubjectCenter subjectCenter={t('home.subject2')} />
          <ImageItem><ImageProduct /></ImageItem>
          <HomeDescription
            descriptionPrimary={t('home.description2-1')}
            descriptionSecondary={t('home.description2-2')}
          />
          <MoreLink linkHref={menuProducts} linkLabel={t('home.more-link')} />
        </section>
        <div className={styles.relations}>
          <section>
            <div className={styles['heading-group']}>
              <SubjectLeft subjectLeft={t('home.subject3')} />
            </div>
            <div className={styles['video--you-tube']}>
              {i18n.language === 'ko' ?
                <>
                  {visibleYouTubePlayer
                    ?
                    <YouTubePlayer htmlSrc={youTubeSourceKo} />
                    :
                    <YouTubeButton
                      imageSource={`/youtube.home.ko.png?${(Math.random() * 7).toString(7)}`}
                      onClick={() => setVisibleYouTubePlayer(true)}
                      aria-haspopup='true'
                      aria-label='YouTube 영상 재생'
                    >
                      <i />
                    </YouTubeButton>
                  }
                </> :
                <>
                  {visibleYouTubePlayer
                    ?
                    <YouTubePlayer htmlSrc={youTubeSourceEn} />
                    :
                    <YouTubeButton
                      imageSource={`/youtube.home.en.png?${(Math.random() * 7).toString(7)}`}
                      onClick={() => setVisibleYouTubePlayer(true)}
                      aria-haspopup='true'
                      aria-label='YouTube video play'
                    >
                      <i />
                    </YouTubeButton>
                  }
                </>
              }
            </div>
          </section>
          <section>
            <div className={styles['heading-group']}>
              <SubjectLeft subjectLeft={t('home.subject4')} />
              <div className={styles['link--see-more']}>
                <LinkButton href={menuPrCenter}>{t('home.more-link')}</LinkButton>
              </div>
            </div>
            <div className={styles.press}>
              <LinkButton href={menuPrCenter}>
                <strong>{t('home.description4-a')}</strong>
                <p>{t('home.description4-p1')}</p>
                <p>{t('home.description4-p2')}</p>
                <p>{t('home.description4-p3')}</p>
              </LinkButton>
            </div>
          </section>
        </div>
      </Contents>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Home, '깨끗한 지하수 연구기업 Clean Groundwater Tech company', '');
