import { useTranslation } from 'react-i18next';

function SaemmulterAddress() {
  const { t } = useTranslation('common')

  return <address>{t('address')}</address>
}

export default SaemmulterAddress;
