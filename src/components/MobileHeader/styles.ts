import styled from 'styled-components';

// Breakpoints
import { media } from '../../styles/breakpoints';

// Styles
import { COLORS, LAYOUT, ORDER } from '../../styles';
import { ContainerBlock } from '../../styles/mixins';

// Components
import { Link } from 'react-router-dom';

export const StyledHeader = styled.nav`
  background: ${COLORS.BLACK};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: ${ORDER.NAV};
  height: ${LAYOUT.HEADER.M_HEIGHT}px;

  ${media.tabletXLarge`
    display: none
  `}
`;

export const StyledHeaderContent = styled(ContainerBlock)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  img {
    display: flex;
    width: 80px;
  }
`;

export const StyledHeaderButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0;

  > * {
    object-fit: contain;
  }

  img {
    max-height: 30px;
    max-width: 30px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${COLORS.WHITE};
`;
