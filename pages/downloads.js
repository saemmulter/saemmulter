import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../styles/Downloads.module.sass';
import { mq, mixin, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import Cover from '../components/layout/cover';
import Subject from '../components/assets/subject';
import DownloadsCompanyIntroduction from '../components/pages/downloads/companyIntroductions';

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

function Download(props) {
  const { t } = useTranslation('common')

  return (
    <Container className={`${styles.container} container`}>
      <Cover subject={t('header.downloads')} />
      <Contents className='contents'>
        <Definition directionColumn={false}>
          <Subject
            subjectBorder={false}
            subjectName={t('downloads.subject1')}
          />
          <Description>
            <DownloadsCompanyIntroduction />
          </Description>
        </Definition>
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
