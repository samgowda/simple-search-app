import React, { useState } from 'react';

// Components
import Logo from './logo';

// Styles
import {
  StyledHeader,
  StyledHeaderButton,
  StyledHeaderContent,
  StyledLink,
} from './styles';

const MobileHeader = () => {

  // NOTE: Dummy functionality to demonstrate possible mobile view
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = (toggle: boolean) => {
    setShowDrawer(toggle);
  };

  return (
    <>
      <StyledHeader data-cy="header">
        <StyledHeaderContent>
          <StyledHeaderButton
            onClick={() => toggleDrawer(!showDrawer)}
            data-cy="hamburger"
          >
            {showDrawer ?
              <img
                role="presentation"
                src="/img/icons/hamburger_close.svg"
                alt="hamburger icon close"
              /> :
              <img
                role="presentation"
                src="/img/icons/hamburger.svg"
                alt="hamburger icon open"
              />
            }
          </StyledHeaderButton>
          <Logo data-cy="logo"/>
          <StyledLink to="/favorites">Favorites</StyledLink>

        </StyledHeaderContent>
      </StyledHeader>
    </>
  );
};

export default MobileHeader;
