import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import GoogleMap from './googleMap';
import { images } from '../../../assets/images';
import SaemmulterAddress from '../../utilities/officeAddress';
import SaemmulterEmail from '../../utilities/officeEmail';
import SaemmulterTel from '../../utilities/officeTel';
import styles from '../../../styles/Contactus.module.sass'
import { mixin, mq, Rem } from '../../../styles/designSystem';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [mq.minXsmall]: {
    flexDirection: 'row',
  },
});

const MapContainer = styled.div({
  [mq.minXsmall]: {
    width: '50%',
  },
  [mq.minSmall]: {
    width: Rem(600),
  },
});

const InfoContainer = styled.div({
  [mq.maxTablet]: {
    margin: `0 ${Rem(15)}`,
  },
  [mq.minXsmall]: {
    ...mixin.col,
    paddingLeft: Rem(20),
  },
  [mq.minSmall]: {
    paddingLeft: Rem(50),
  },
  '& i': {
    display: 'block',
    width: Rem(25),
    height: Rem(25),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    [mq.minXsmall]: {
      width: Rem(30),
      height: Rem(30),
    },
  },
});

const IconAddress = styled.i({
  backgroundImage: `url(${images.icons.contactUs.location.address})`,
});

const IconEmail = styled.i({
  backgroundImage: `url(${images.icons.contactUs.location.email})`,
});

const IconTel = styled.i({
  backgroundImage: `url(${images.icons.contactUs.location.tel})`,
});

function ContactUsLocation() {
  const { t } = useTranslation('common')

  return (
    <Container>
      <MapContainer>
        <div className={styles['google-map']}>
          <GoogleMap />
        </div>
      </MapContainer>
      <InfoContainer>
        <dl className={styles['location-definition']}>
          <dt><IconAddress aria-label={t('contact-us.term1')} /></dt>
          <dd><SaemmulterAddress /></dd>
          <dt><IconEmail aria-label={t('contact-us.term2')} /></dt>
          <dd><SaemmulterEmail /></dd>
          <dt><IconTel aria-label={t('contact-us.term3')} /></dt>
          <dd><SaemmulterTel /></dd>
        </dl>
      </InfoContainer>
    </Container>
  )
}

export default ContactUsLocation;
