import styled from 'styled-components';
// Globals
import { COLORS, LAYOUT } from '../../styles';
import { media } from '../../styles/breakpoints';
import { NavButton } from '../../styles/mixins';

export const HideMobileContainer = styled.div`
  display: none;

  ${media.tabletXLarge`
    display: block;
  `}
`;

export const StyledContainer = styled.div`
  background: ${COLORS.BLACK};
  display: flex;
  align-items: center;
  height: ${LAYOUT.NAV.M_HEIGHT}px;
  justify-content: center;
  flex-direction: row;
  display: flex;
  padding-left: ${LAYOUT.GUTTER}px;
`;

export const StyledLinksContainer = styled.div`
  width: 100%;
  padding-right: ${LAYOUT.GUTTER}px;
`;

export const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: flex-end;
`;

export const StyledSectionLink = styled(NavButton)`
  align-items: center;
  color: ${COLORS.WHITE};
  display: flex;
  height: 100%;
  padding-right: 52px;
`;
