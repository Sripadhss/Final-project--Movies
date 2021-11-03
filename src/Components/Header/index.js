// Core
import React from 'react';
import { connect } from 'react-redux';
// Styles
import {
  HeaderWrapper,
  HeaderLogo,
  HeaderLogoWrapper,
  HeaderLogoButton,
  HeaderText,
} from './styles';
// Actions
import { resetFilters } from '../../actions/filtersActions';
// Components
import Filters from './Filters';

const Header = React.memo(({ resetFilters }) => {
  return (
    <HeaderWrapper>
      <HeaderLogoWrapper>
        <HeaderLogoButton
          type="button"
          onClick={() => {
            resetFilters();
          }}
        >
        
          <HeaderText>Movies</HeaderText>
        </HeaderLogoButton>
      </HeaderLogoWrapper>

      <Filters />
    </HeaderWrapper>
  );
});

export default connect(
  null,
  { resetFilters },
)(Header);
