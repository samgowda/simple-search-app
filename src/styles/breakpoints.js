import { css } from "styled-components";

export const BreakpointWidth = {
  desktop: 800,
  desktopLarge: 1024,
  desktopXLarge: 1440,
  desktopXXLarge: 1920,
  smallScreen: 380,
  tablet: 580,
  tabletLarge: 640,
  tabletXLarge: 768,
};

/**
 * Open Issue https://github.com/Microsoft/TypeScript/issues/28010
 * Typescript spread args throws wrong argument count error with dynamic argument count
 */
export const media = Object.keys(BreakpointWidth).reduce(
  (mediaQueries, label) => (
    {
      ...mediaQueries,
      [label]: (...args) => css`
        @media (min-width: ${BreakpointWidth[label]}px) {
          ${css.call(this, ...args)}
        }
      `,
    }
  ),
  {},
);
