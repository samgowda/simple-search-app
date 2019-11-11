import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { StyledLogo } from './styles';

const Logo = () => (
  <StyledLogo>
    <Link to={'/gifs/search'}>
      <img
        src="/img/icons/logo.png"
        alt="Gifs logo"
      />
    </Link>
  </StyledLogo>
);

export default Logo;
