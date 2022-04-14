import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import styles from '../styles/Contactus.module.sass';
import { mq, mixin, Rem } from '../styles/designSystem';
import withHead from '../components/utilities/withHead';
import Cover from '../components/layout/cover';
import Subject from '../components/assets/subject';
import ContactUsLocation from '../components/pages/contact-us/location';
import ContactUsRequest from '../components/pages/contact-us/request';

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

const Description = styled.div(({ directionColumn }) => ({
  paddingTop: Rem(20),
  [mq.maxTablet]: {
    margin: directionColumn ? `0 ${Rem(15)}` : null,
  },
  [mq.minXsmall]: {
    ...mixin.col,
    overflow: 'hidden',
    paddingLeft: directionColumn ? Rem(20) : null,
  },
}));

function ContactUs(props) {
  const { t } = useTranslation('common')

  return (
    <Container className={`${styles.container} container`}>
      <Cover subject={t('header.contact-us')} />
      <Contents className='contents'>
        <Definition directionColumn={false}>
          <Subject
            subjectBorder={false}
            subjectName={t('contact-us.subject1')}
          />
          <Description directionColumn={false}>
            <ContactUsLocation />
          </Description>
        </Definition>
        <Definition directionColumn={true}>
          <Subject
            subjectBorder={true}
            subjectName={t('contact-us.subject2')}
          />
          <Description directionColumn={true}>
            <ContactUsRequest />
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

export default withHead(ContactUs, '문의 Contact Us', 'contact-us');
