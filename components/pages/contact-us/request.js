import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled'
import styles from '../../../styles/Contactus.module.sass'

const Container = styled.div({

})

function ContactUsRequest() {
  const { i18n, t } = useTranslation('common')

  return (
    <Container>
      <p className={styles['announcement']}>
        {i18n.language === 'en' && <strong>Fields marked ‘<b>*</b>’ are required.</strong>}
        {i18n.language === 'ko' && <strong>‘<b>*</b>’ 표시가 있는 항목은 필수입니다.</strong>}
      </p>
    </Container>
  )
}

export default ContactUsRequest;
