import { useTranslation } from 'react-i18next';

function GoogleMap() {
  const { i18n } = useTranslation('common')

  if (i18n.language === 'en') {
    var MapSource = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.2711119830587!2d127.37673651527733!3d36.354211480042935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bde5c50085d%3A0xcc4edd760c07a153!2s239%20Daedeok-daero%2C%20Seo-gu%2C%20Daejeon!5e0!3m2!1sen!2skr!4v1649835637106!5m2!1sen!2skr`
  } else {
    var MapSource = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.270933647456!2d127.37673651496495!3d36.354215800377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bde5c50085d%3A0xcc4edd760c07a153!2z64yA7KCE6rSR7Jet7IucIOyEnOq1rCDrjIDrjZXrjIDroZwgMjM5!5e0!3m2!1sko!2skr!4v1649836975550!5m2!1sko!2skr`
  }

  return (
    <iframe
      src={MapSource}
      width="600" height="450"
      allowFullScreen={true}
      loading="lazy"
      title="Google Map"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}

export default GoogleMap;
