const defaultFontSize: number = 16;
const paddingHorizontal = 25;
const defaultWidth = 1134;
const totalWidth = paddingHorizontal * 2 + defaultWidth;

export const rem = (px: number): string => `${px / defaultFontSize}rem`;

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
