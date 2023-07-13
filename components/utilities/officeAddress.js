import { useTranslation } from 'react-i18next';

function SaemmulterAddress() {
  const { t } = useTranslation('common')

  return (
    <address>
      {t('address.primary')}
      <span>{t('address.secondary')}</span>
    </address>
  )
}

export default SaemmulterAddress;
