import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { images } from '../../../assets/images';
import { mq, Rem } from '../../../styles/designSystem';
import styles from '../../../styles/Company.module.sass';

const Item = styled.div({
  display: 'flex',
  [mq.minSmall]: {
    flexDirection: 'row-reverse',
  },
  '&::before': {
    content: '""',
    display: 'block',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    width: Rem(70),
    height: Rem(70),
    [mq.minSmall]: {
      width: Rem(300),
      height: Rem(300),
    },
  },
  '&:nth-of-type(1)::before': {
    backgroundImage: `url(${images.icons.company.smile})`,
  },
  '&:nth-of-type(2)::before': {
    backgroundImage: `url(${images.icons.company.growth})`,
  },
});

function CompanyValues() {
  const { t } = useTranslation('common')

  return (
    <div className={styles.values}>
      <Item className={styles.item}>
        <div className={styles.context}>
          <h3>
            {t('values.term1-1')}
            {' '}
            <span>{t('values.term1-2')}</span>
          </h3>
          <p>{t('values.description1')}</p>
        </div>
      </Item>
      <Item className={styles.item}>
        <div className={styles.context}>
          <h3>
            {t('values.term2-1')}
            {' '}
            <span> {t('values.term2-2')}</span>
          </h3>
          <p>{t('values.description2')}</p>
        </div>
      </Item>
    </div>
  )
}

export default CompanyValues;
