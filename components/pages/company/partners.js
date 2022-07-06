import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { mixin } from '../../../styles/designSystem';
import styles from '../../../styles/Company.module.sass';

const AmmonteckKoSource = `/company.logo.ammonteck.ko.png?${(Math.random() * 7).toString(7)}`
const BakertillyKoSource = `/company.logo.bakertilly.ko.png?${(Math.random() * 7).toString(7)}`
const EocKoSource = `/company.logo.eoc.ko.png?${(Math.random() * 7).toString(7)}`
const IlabcollectiveKoSource = `/company.logo.ilabcollective.ko.png?${(Math.random() * 7).toString(7)}`
const GgulbKoSource = `/company.logo.ggulb.ko.png?${(Math.random() * 7).toString(7)}`
const SaeonKoSource = `/company.logo.saeon.ko.png?${(Math.random() * 7).toString(7)}`
const KwaterKoSource = `/company.logo.kwater.ko.png?${(Math.random() * 7).toString(7)}`
const InnoplusKoSource = `/company.logo.innoplus.ko.png?${(Math.random() * 7).toString(7)}`
const KmtKoSource = `/company.logo.kmt.ko.png?${(Math.random() * 7).toString(7)}`
const TheseacompanyKoSource = `/company.logo.theseacompany.ko.png?${(Math.random() * 7).toString(7)}`

const AmmonteckEnSource = `/company.logo.ammonteck.en.png?${(Math.random() * 7).toString(7)}`
const BakertillyEnSource = `/company.logo.bakertilly.en.png?${(Math.random() * 7).toString(7)}`
const EocEnSource = `/company.logo.eoc.en.png?${(Math.random() * 7).toString(7)}`
const IlabcollectiveEnSource = `/company.logo.ilabcollective.en.png?${(Math.random() * 7).toString(7)}`
const GgulbEnSource = `/company.logo.ggulb.en.png?${(Math.random() * 7).toString(7)}`
const SaeonEnSource = `/company.logo.saeon.en.png?${(Math.random() * 7).toString(7)}`
const KwaterEnSource = `/company.logo.kwater.en.png?${(Math.random() * 7).toString(7)}`
const InnoplusEnSource = `/company.logo.innoplus.en.png?${(Math.random() * 7).toString(7)}`
const KmtEnSource = `/company.logo.kmt.en.png?${(Math.random() * 7).toString(7)}`
const TheseacompanyEnSource = `/company.logo.theseacompany.en.png?${(Math.random() * 7).toString(7)}`

const PartnersList = styled.ul({
  '& i': {
    display: 'block',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    ...mixin.imageRendering,
  },
});

const ImageLogoAmmonteck = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${AmmonteckKoSource})` : `url(${AmmonteckEnSource})`,
}));

const ImageLogoBakertilly = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${BakertillyKoSource})` : `url(${BakertillyEnSource})`,
}));

const ImageLogoEoc = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${EocKoSource})` : `url(${EocEnSource})`,
}));

const ImageLogoIlabcollective = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${IlabcollectiveKoSource})` : `url(${IlabcollectiveEnSource})`,
}));

const ImageLogoGgulb = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${GgulbKoSource})` : `url(${GgulbEnSource})`,
}));

const ImageLogoSaeon = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${SaeonKoSource})` : `url(${SaeonEnSource})`,
}));

const ImageLogoKwater = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${KwaterKoSource})` : `url(${KwaterEnSource})`,
}));

const ImageLogoInnoplus = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${InnoplusKoSource})` : `url(${InnoplusEnSource})`,
}));

const ImageLogoKmt = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${KmtKoSource})` : `url(${KmtEnSource})`,
}));

const ImageLogoTheseacompany = styled.i(({ isKorean }) => ({
  backgroundImage: isKorean ? `url(${TheseacompanyKoSource})` : `url(${TheseacompanyEnSource})`,
}));

function CompanyPartners() {
  const { i18n, t } = useTranslation('common')

  if (i18n.language === 'ko') {
    var isKorean = true
  } else {
    var isKorean = false
  }

  return (
    <PartnersList className={styles['partners-list']}>
      {/* <li><ImageLogoAmmonteck isKorean={isKorean} aria-label={t('partners.org1')} /></li> */}
      <li><ImageLogoBakertilly isKorean={isKorean} aria-label={t('partners.org2')} /></li>
      <li><ImageLogoEoc isKorean={isKorean} aria-label={t('partners.org3')} /></li>
      <li><ImageLogoIlabcollective isKorean={isKorean} aria-label={t('partners.org4')} /></li>
      <li><ImageLogoGgulb isKorean={isKorean} aria-label={t('partners.org5')} /></li>
      {/* <li><ImageLogoSaeon isKorean={isKorean} aria-label={t('partners.org6')} /></li> */}
      <li><ImageLogoKwater isKorean={isKorean} aria-label={t('partners.org7')} /></li>
      <li><ImageLogoInnoplus isKorean={isKorean} aria-label={t('partners.org8')} /></li>
      <li><ImageLogoKmt isKorean={isKorean} aria-label={t('partners.org9')} /></li>
      <li><ImageLogoTheseacompany isKorean={isKorean} aria-label={t('partners.org10')} /></li>
    </PartnersList>
  )
}

export default CompanyPartners;
