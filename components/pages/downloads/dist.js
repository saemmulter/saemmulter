import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import LinkButton from '../../utilities/linkButton';
import styles from '../../../styles/Downloads.module.sass';
import { mq } from '../../../styles/designSystem';

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

function DownloadsDist({
  term,
  thumbnail,
  description,
  preview,
  attach
}) {
  const { t } = useTranslation('common')

  return (
    <div className={styles['download-item']}>
      <div className={styles['download-thumbnail']}>
        <Thumbnail><ImageSource thumbnail={thumbnail} /></Thumbnail>
      </div>
      <div className={styles['download-description']}>
        <h3>{term}</h3>
        <div
          className={styles['download-paragraphes']}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <ul className={styles['download-links']}>
          <li><LinkButton href={preview}>{t('downloads.button1')}</LinkButton></li>
          <li><LinkButton href={attach}>{t('downloads.button2')}</LinkButton></li>
        </ul>
      </div>
    </div>
  )
}

export default DownloadsDist;
