const defaultFontSize: number = 16;
const paddingHorizontal = 25;
const defaultWidth = 1134;
const totalWidth = paddingHorizontal * 2 + defaultWidth;

export const rem = (px: number): string => `${px / defaultFontSize}rem`;
export const em = (px: number): string => `${px / defaultFontSize}em`;

interface ClampProps {
  line: number;
  height: number;
  lineHeight: number;
}
export const clamp = ({
  line,
  height,
  lineHeight = 1.2,
}: ClampProps): string => (`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};
  max-height: ${rem(height)};
  line-height: ${lineHeight};
`);

export const mq = {
  maxMobile: `@media screen and (max-width: ${rem(480)})`,
  minTablet: `@media screen and (min-width: ${rem(481)})`,
  maxTablet: `@media screen and (max-width: ${rem(768)})`,
  minXsmall: `@media screen and (min-width: ${rem(769)})`,
  maxXsmall: `@media screen and (max-width: ${rem(1024)})`,
  minSmall: `@media screen and (min-width: ${rem(1025)})`,
  maxSmall: `@media screen and (max-width: ${rem(1200)})`,
  minLarge: `@media screen and (min-width: ${rem(1201)})`,
  maxLarge: `@media screen and (max-width: ${rem(1920)})`,
  minXlarge: `@media screen and (min-width: ${rem(1921)})`,
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
  배경색: '#ffe3e8',
};

export const styles = {
  widthSettings: {
    margin: '0 auto',
    paddingRight: rem(paddingHorizontal),
    paddingLeft: rem(paddingHorizontal),
    width: '100%',
    maxWidth: rem(totalWidth),
  },
  col: {
    display: 'block',
    flex: '1 0 0%',
    width: '100%',
    maxWidth: '100%',
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
};
