import { css } from 'styled-components';

// tslint:disable:no-var-requires

export const webFonts = css`
  @font-face {
    font-family: 'BogleWeb';
    src: url('${require('./fonts/BogleWeb-Regular.woff')}') format('woff'),
    url('${require('./fonts/BogleWeb-Regular.ttf')}') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'BogleWeb-Bold';
    src: url('${require('./fonts/BogleWeb-Bold.woff')}') format('woff'),
    url('${require('./fonts/BogleWeb-Bold.ttf')}') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`;
