import { css } from 'styled-components';
import { media } from './breakpoints';

/*
 * Colors
 */
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const GRAY = '#6D6E71';
const LIGHT_GRAY = '#E6E7E8';
const DARK_NAVY = '#041E42';
const GREEN = '#2A8703';
const LIGHT_GREEN = '#DDE7A0';
const RED = '#FF0000';
const YELLOW = '#FFC220';

/*
 * Custom Fonts
 */
const PRIMARY_FONT_FAMILY = '"BogleWeb"';
const PRIMARY_BOLD = '"BogleWeb-Bold"';

export const COLORS = {
  BLACK,
  DARK_NAVY,
  GRAY,
  GREEN,
  LIGHT_GRAY,
  LIGHT_GREEN,
  RED,
  YELLOW,
  WHITE,
};

// To support future changes to responsive layout
export const LAYOUT = {
  MAXWIDTH: 1284,
  GUTTER: 40,
  MOBILE_GUTTER: 12,
  H_SPACING: 50,

  HEADER: {
    M_HEIGHT: 60,
    T_HEIGHT: 66,
    D_HEIGHT: 73,
  },
  NAV: {
    M_HEIGHT: 60,
    T_HEIGHT: 66,
    D_HEIGHT: 73,
  },
};

export const FONTS = {
  PRIMARY: PRIMARY_FONT_FAMILY,
  PRIMARY_BOLD,
};

export const ORDER = {
  NAV: 8,
  ICON: 7,
  BUTTON: 6,
};

// Possible Typography when Style Guide is created
export const heading = css`
  font-family: ${FONTS.PRIMARY_BOLD};
`;

export const secondaryHeading = css`
  font-family: ${FONTS.PRIMARY};
`;

const link = css`
  cursor: pointer;
`;

export const navLinkStyles = css`
  font-family: ${FONTS.PRIMARY_BOLD};
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  &:hover {
    color: ${COLORS.YELLOW}
  }
`;

export const l1 = css`
  ${link}
  ${navLinkStyles}
`;

export const hb1 = css`
  ${heading}
  font-size: 28px;

  ${media.tablet`
    font-size: 40px;
  `}

  ${media.desktop`
    font-size: 60px;
  `}
`;

export const hr2 = css`
  ${secondaryHeading}
  font-size: 16px;

  ${media.desktop`
    font-size: 24px;
  `}
`;

export const body = css`
  font-family: ${FONTS.PRIMARY};
`;

export const b1 = css`
  font-size: 11px;

  ${media.desktop`
    font-size: 14px;
  `}
`;
