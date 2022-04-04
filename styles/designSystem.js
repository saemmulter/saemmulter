const paddingHorizontal = 15;
const defaultWidth = 1250;
const totalWidth = paddingHorizontal * 2 + defaultWidth;

export const mq = {
  maxMobile: `@media screen and (max-width: ${Rem(480)})`,
  minTablet: `@media screen and (min-width: ${Rem(481)})`,
  maxTablet: `@media screen and (max-width: ${Rem(768)})`,
  minXsmall: `@media screen and (min-width: ${Rem(769)})`,
  maxXsmall: `@media screen and (max-width: ${Rem(1024)})`,
  minSmall: `@media screen and (min-width: ${Rem(1025)})`,
  maxSmall: `@media screen and (max-width: ${Rem(1200)})`,
  minLarge: `@media screen and (min-width: ${Rem(1201)})`,
  maxLarge: `@media screen and (max-width: ${Rem(1280)})`,
  minXlarge: `@media screen and (min-width: ${Rem(1281)})`,
};

export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const colors = {
  black: '#000',
  white: '#FFF',
  default: '#5A433D',
  accent: '#1EBBEF',
  primary: 'rgba(rgba(90, 67, 61, 0.7)',
  important: '#222',
  background: '#F2F2F2',
};

export const mixin = {
  widthSettings: {
    margin: '0 auto',
    paddingRight: Rem(paddingHorizontal),
    paddingLeft: Rem(paddingHorizontal),
    width: '100%',
    maxWidth: Rem(totalWidth),
  },
  col: {
    display: 'block',
    flex: '1 0 0%',
    width: '100%',
    maxWidth: '100%',
  },
  colAuto: {
    flex: '0 0 auto',
    width: 'auto',
  },
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  clearfix: {
    '&::after': {
      display: 'block',
      clear: 'both',
      content: '""',
    },
  },
  screenReaderOnly: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    clipPath: 'inset(50%)',
    border: 0,
  },
  imageRendering: {
    imageRendering: '-webkit-optimize-contrast',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
  },
};

export const Clamp = (clamp, height, lineheight) => (`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${clamp};
  max-height: ${height / 16}rem;
  line-height: ${lineheight};
`);

export function Rem(px) {
  const result = px / 16;
  return `${result}rem`;
};

export function Em(px) {
  const result = px / 16;
  return `${result}em`;
};
