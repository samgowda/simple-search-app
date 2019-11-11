import React from 'react';
import { connect } from 'react-redux';
import {
  HideMobileContainer,
  StyledContainer,
  StyledContent,
  StyledLinksContainer,
  StyledSectionLink,
} from './styles';

// Components
import { FaUikit } from 'react-icons/fa';
import Logo from '../MobileHeader/logo';

type ReduxProps = {
  pathname: string,
};

const links = [
  { name: 'Search', safe_name: 'search' },
  { name: 'Favorites', safe_name: 'favorites' },
];

const Nav = ({ pathname }: ReduxProps) => {

  const sectionName = pathname.slice(1);

  return (
    <HideMobileContainer>
      <StyledContainer data-cy="header">
        <Logo data-cy="logo"/>
        <StyledLinksContainer>
          <StyledContent>
            {links
              .map(link => (
                <StyledSectionLink
                  to={`/${link.safe_name}`}
                  key={`nav-${link.safe_name}`}
                  active={link.safe_name === sectionName}
                >
                <span>{link.name}</span>
                <img
                  role="presentation"
                  src="/img/icons/nav_active.svg"
                  alt="active nav icon"
                />
                </StyledSectionLink>
              ))
            }
            <FaUikit color="white" />
          </StyledContent>
        </StyledLinksContainer>
      </StyledContainer>
    </HideMobileContainer>
  );
};

const mapStateToProps = ({ router }) => ({
  pathname: router.location.pathname,
});

export default connect(mapStateToProps)(Nav);
