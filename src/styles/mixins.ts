import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Globals
import { COLORS, FONTS, l1, LAYOUT } from '../styles';
import { media } from '../styles/breakpoints';

export const NavButton = styled(Link)`
  ${l1}
  img {
    opacity: 0;
    width: 15px;
    margin-left: 2px;
  }

  ${(props: {active?: boolean }) => props.active && `
    span {
      color: ${COLORS.YELLOW}
    }
    img {
      display: block;
      opacity: 1;
    }
  `}
`;

export const SecondaryButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: ${FONTS.PRIMARY_BOLD};
  color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.WHITE};
  border-radius: 10px;
`;

/*
 * Accounts for max-width and gutters across all breakpoints
 */
export const ContainerBlock = styled.div`
  margin: 0 auto;
  max-width: ${LAYOUT.MAXWIDTH}px;
  padding-left: ${LAYOUT.MOBILE_GUTTER}px;
  padding-right: ${LAYOUT.MOBILE_GUTTER}px;
  width: 100%;

  ${media.tabletXLarge`
    padding-left: ${LAYOUT.GUTTER}px;
    padding-right: ${LAYOUT.GUTTER}px;
  `}
`;
