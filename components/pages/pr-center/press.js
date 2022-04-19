import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../../../styles/Prcenter.module.sass';
import LinkButton from '../../utilities/linkButton';
import { mq, Rem } from '../../../styles/designSystem';

const PressList = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  [mq.minXsmall]: {
    margin: `0 -${Rem(10)}`,
  },
  [mq.minXlarge]: {
    margin: `0 -${Rem(25)}`,
  },
});

const ImageThumbnail = styled.i(({ imageSource }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  transition: 'all .2s linear',
  display: 'block',
  background: `url(${imageSource}) no-repeat 50% 50%/cover`,
  width: '100%',
  height: '100%',
}));

function PressItem({ press }) {
  const { i18n } = useTranslation('common')

  if (i18n.language === 'en') {
    return (
      <LinkButton
        className={styles['press-item']}
        href={`https://papago.naver.net/website?locale=en&source=ko&target=en&url=${encodeURIComponent(`${press.link}`)}`}
      >
        <div className={styles['press-thumbnail']}>
          <ImageThumbnail imageSource={press.thumbnailEn} />
        </div>
        <div className={styles['press-summary']}>
          <strong>{press.subject}</strong>
          <p>{press.description}</p>
          <div className={styles['press-source']}>
            <time dateTime={press.dateTimeMachine}>{press.dateTimeHuman}</time>
            <cite>{press.journal}</cite>
          </div>
        </div>
      </LinkButton>
    )
  } else {
    return (
      <LinkButton
        className={styles['press-item']}
        href={`${press.link}`}
      >
        <div className={styles['press-thumbnail']}>
          <ImageThumbnail imageSource={press.thumbnailKo} />
        </div>
        <div className={styles['press-summary']}>
          <strong>{press.subject}</strong>
          <p>{press.description}</p>
          <div className={styles['press-source']}>
            <time dateTime={press.dateTimeMachine}>{press.dateTimeHuman}</time>
            <cite>{press.journal}</cite>
          </div>
        </div>
      </LinkButton>
    )
  }
}

function CompanyPress() {
  const { t } = useTranslation('common')

  const presses = [
    {
      id: 1,
      subject: `${t('press.subject1')}`,
      description: `${t('press.description1')}`,
      dateTimeMachine: '2020-07-13',
      dateTimeHuman: '2020/07/13',
      journal: `${t('press.journal1')}`,
      thumbnailEn: `/press-en-001.png?${(Math.random() * 7).toString(7)}`,
      thumbnailKo: `/press-ko-001.png?${(Math.random() * 7).toString(7)}`,
      link: `https://www.ecomedia.co.kr/news/newsview.php?ncode=1065584739451001`,
    },
    {
      id: 2,
      subject: `${t('press.subject2')}`,
      description: `${t('press.description2')}`,
      dateTimeMachine: '2020-08-30',
      dateTimeHuman: '2020/08/30',
      journal: `${t('press.journal2')}`,
      thumbnailEn: `/press-002.png?${(Math.random() * 7).toString(7)}`,
      thumbnailKo: `/press-002.png?${(Math.random() * 7).toString(7)}`,
      link: `https://www.hellodd.com/news/articleView.html?idxno=72720`,
    },
    {
      id: 3,
      subject: `${t('press.subject3')}`,
      description: `${t('press.description3')}`,
      dateTimeMachine: '2020-09-10',
      dateTimeHuman: '2020/09/10',
      journal: `${t('press.journal3')}`,
      thumbnailEn: `/press-003.png?${(Math.random() * 7).toString(7)}`,
      thumbnailKo: `/press-003.png?${(Math.random() * 7).toString(7)}`,
      link: `https://www.etnews.com/20200910000100`,
    },
    {
      id: 4,
      subject: `${t('press.subject4')}`,
      description: `${t('press.description4')}`,
      dateTimeMachine: '2020-12-18',
      dateTimeHuman: '2020/12/18',
      journal: `${t('press.journal4')}`,
      thumbnailEn: `/press-004.png?${(Math.random() * 7).toString(7)}`,
      thumbnailKo: `/press-004.png?${(Math.random() * 7).toString(7)}`,
      link: `https://www.gocj.net/news/articleView.html?idxno=112866`,
    },
  ];

  return (
    <PressList>
      {presses.map(press => (
        <PressItem
          press={press}
          key={press.id}
        />
      ))}
    </PressList>
  )
}

export default CompanyPress;
