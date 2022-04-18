import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../styles/Downloads.module.sass';
import { mq, mixin, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import Cover from '../components/layout/cover';
import Subject from '../components/assets/subject';
import DownloadsDist from '../components/pages/downloads/dist';

const Container = styled.div();

const Contents = styled.main({
  [mq.maxTablet]: {
    width: '100%',
    '& section > div:first-of-type': {
      marginRight: Rem(15),
      marginLeft: Rem(15),
    },
  },
  [mq.minXsmall]: {
    ...mixin.widthSettings,
  },
});

const Definition = styled.section(({ directionColumn }) => ({
  margin: `${Rem(50)} 0`,
  '&:first-of-type': {
    marginTop: 0,
  },
  '&:last-of-type': {
    marginBottom: 0,
  },
  [mq.minXsmall]: {
    display: 'flex',
    flexDirection: directionColumn ? null : 'column',
    margin: `${Rem(100)} 0`,
  },
}));

const Description = styled.div({
  paddingTop: Rem(20),
  [mq.minXsmall]: {
    ...mixin.col,
  },
})

function DownloadList({ download }) {
  const { i18n } = useTranslation('common')

  return (
    <Definition directionColumn={false}>
      <Subject
        subjectBorder={false}
        subjectName={download.subjectName}
      />
      {i18n.language === 'ko' ?
        <Description>
          <DownloadsDist
            thumbnail={download.thumbnailKo}
            term={download.term}
            description={download.descriptionKo}
            preview={download.previewKo}
            attach={download.attachKo}
          />
        </Description> :
        <Description>
          <DownloadsDist
            thumbnail={download.thumbnailEn}
            term={download.term}
            description={download.descriptionEn}
            preview={download.previewEn}
            attach={download.attachEn}
          />
        </Description>
      }
    </Definition>
  )
}

function Download(props) {
  const { t } = useTranslation('common')

  const downloads = [
    {
      id: 1,
      subjectName: `${t('downloads.subject1')}`,
      thumbnailEn: `/download-1-en.png?${(Math.random() * 7).toString(7)}`,
      thumbnailKo: `/download-1-ko.png?${(Math.random() * 7).toString(7)}`,
      term: `${t('downloads.term1')}`,
      descriptionEn: `
        <p>If you want to know more about the Saemmulter, please download our company introduction.</p>
        <p>Our company introduction includes product introduction, competitor product comparison, business model, market size, growth plan.</p>
      `,
      descriptionKo: `
        <p>주식회사 샘물터에 대해 더 알고싶다면 샘물터 회사소개서를 다운로드 해주세요.</p>
        <p>주식회사 샘물터 회사소개서에는 제품 소개, 경쟁사 제품 비교, 비즈니스 모델, 시장 규모, 성장 계획 등이 포함되어 있습니다.</p>
      `,
      previewEn: 'https://saemmulter.github.io/attach/documents/saemmulter_introduction.pdf',
      previewKo: 'https://saemmulter.github.io/attach/documents/saemmulter_introduction.pdf',
      attachEn: 'https://saemmulter.github.io/attach/downloads/saemmulter_introduction.zip',
      attachKo: 'https://saemmulter.github.io/attach/downloads/saemmulter_introduction.zip',
    },
    {
      id: 2,
      subjectName: `${t('downloads.subject2')}`,
      thumbnailEn: `/download-2-en.png?${(Math.random() * 7).toString(7)}`,
      thumbnailKo: `/download-2-ko.png?${(Math.random() * 7).toString(7)}`,
      term: `${t('downloads.term2')}`,
      descriptionEn: `
        <p>If you want to know more about the Saemmulter’s products, please download our company leaflet.</p>
        <p>Saemmulter leaflet includes SaaS service introduction, Woomulsem's specification, and features.</p>
      `,
      descriptionKo: `
        <p>주식회사 샘물터의 제품에 대해 더 알고싶다면 샘물터 리플렛을 다운로드 해주세요.</p>
        <p>주식회사 샘물터 리플렛에는 SaaS 서비스 소개와 우물셈의 제품 사양, 그리고 특장점이 포함되어 있습니다.</p>
      `,
      previewEn: 'https://saemmulter.github.io/attach/documents/saemmulter_leaflet.pdf',
      previewKo: 'https://saemmulter.github.io/attach/documents/saemmulter_leaflet.pdf',
      attachEn: 'https://saemmulter.github.io/attach/downloads/saemmulter_leaflet.zip',
      attachKo: 'https://saemmulter.github.io/attach/downloads/saemmulter_leaflet.zip',
    },
  ]

  return (
    <Container className={`${styles.container} container`}>
      <Cover subject={t('header.downloads')} />
      <Contents className='contents'>
        {downloads.map(download => (
          <DownloadList
            download={download}
            key={download.id}
          />
        ))}
      </Contents>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default withHead(Download, '다운로드 Downloads', 'downloads');
