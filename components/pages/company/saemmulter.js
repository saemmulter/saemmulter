import { useTranslation } from 'react-i18next';
import ParagraphSecondary from '../../assets/paragraphSecondary';

function Paragraph({ paragraph }) {
  return <ParagraphSecondary>{paragraph.paragraph}</ParagraphSecondary>
}

function CompanySaemmulter() {
  const { t } = useTranslation('common')

  const paragraphes = [
    {
      id: 1,
      paragraph: `${t('saemmulter.paragraph1')}`,
    },
    {
      id: 2,
      paragraph: `${t('saemmulter.paragraph2')}`,
    },
    {
      id: 3,
      paragraph: `${t('saemmulter.paragraph3')}`,
    },
  ];

  return (
    <>
      {paragraphes.map(paragraph => (
        <Paragraph
          paragraph={paragraph}
          key={paragraph.id}
        />
      ))}
    </>
  )
}

export default CompanySaemmulter;
