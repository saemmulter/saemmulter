import Link from 'next/link';
import LinkButton from '../../utilities/linkButton';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

const Container = styled.header({
  width: '100%',
});

const Contents = styled.div({
  display: 'flex',
  width: '100%',
});

function Header() {
  const { t } = useTranslation('common');
  return (
    <Container>
      <Contents>
        <LinkButton href='/company'>{t('header.company')}</LinkButton>
        <LinkButton href='/products'>{t('header.products')}</LinkButton>
        <LinkButton href='/pr-center'>{t('header.pr-center')}</LinkButton>
        <LinkButton href='/downloads'>{t('header.downloads')}</LinkButton>
        <LinkButton href='/contact-us'>{t('header.contact-us')}</LinkButton>

        <Link href='/ko' locale='ko' passHref><button type='button'>Ko</button></Link>
        <Link href='/en' locale='en' passHref><button type='button'>En</button></Link>
      </Contents>
    </Container>
  )
}

export default Header;
