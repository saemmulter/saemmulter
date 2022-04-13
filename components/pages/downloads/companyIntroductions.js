import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import LinkButton from '../../utilities/linkButton';
import styles from '../../../styles/Downloads.module.sass';

const Container = styled.div();

const DownloadList = styled.div();

const Thumbnail = styled.div({
  position: 'relative',
  paddingTop: '70.83333333%',
  height: 0,
});

const ImageSource = styled.i(({ thumbnail }) => ({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `url(${thumbnail}) no-repeat 50% 50%/contain`,
}));

function DownloadItem({ downlaod }) {
  const { i18n } = useTranslation('common')

  if (i18n.language === 'en') {
    return (
      <div className={styles['download-item']}>
        <div className={styles['download-thumbnail']}>
          <Thumbnail><ImageSource thumbnail={downlaod.thumbnailEn} /></Thumbnail>
        </div>
        <div className={styles['download-description']}>
          <h3>{downlaod.term}</h3>
          <div
            className={styles['download-paragraphes']}
            dangerouslySetInnerHTML={{ __html: downlaod.descriptionEn }}
          />
          <div className={styles['download-link']}><LinkButton href=''>Download</LinkButton></div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles['download-item']}>
        <div className={styles['download-thumbnail']}>
          <Thumbnail><ImageSource thumbnail={downlaod.thumbnailKo} /></Thumbnail>
        </div>
        <div className={styles['download-description']}>
          <h3>{downlaod.term}</h3>
          <div
            className={styles['download-paragraphes']}
            dangerouslySetInnerHTML={{ __html: downlaod.descriptionKo }}
          />
          <div className={styles['download-link']}><LinkButton href=''>내려받기</LinkButton></div>
        </div>
      </div>
    )
  }
}

function DownloadsCompanyIntroduction() {
  const { t } = useTranslation('common')

  const downlaods = [
    {
      id: 1,
      thumbnailEn: `/download-1-en.png?${(Math.random() * 7).toString(7)}`,
      thumbnailKo: `/download-1-ko.png?${(Math.random() * 7).toString(7)}`,
      term: `${t('downloads.term1')}`,
      descriptionEn: `
        <p>If you want to know more about the Saemmulter Inc., please download our company introduction.</p>
        <p>Our company introduction includes product introduction, competitor product comparison, business model, market size, growth plan.</p>
      `,
      descriptionKo: `
        <p>주식회사 샘물터에 대해 더 알고싶다면 샘물터 회사소개서를 다운로드 해주세요.</p>
        <p>주식회사 샘물터 회사소개서에는 제품 소개, 경쟁사 제품 비교, 비즈니스 모델, 시장 규모, 성장 계획 등이 포함되어 있습니다.</p>
      `,
      attachEn: '',
      attachKo: '',
    },
  ]

  return (
    <Container>
      <DownloadList>
        {downlaods.reverse().map(downlaod => (
          <DownloadItem
            downlaod={downlaod}
            key={downlaod.id}
          />
        ))}
      </DownloadList>
    </Container>
  )
}

export default DownloadsCompanyIntroduction;
