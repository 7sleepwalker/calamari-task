import React from 'react';
import styled, { css } from 'styled-components';

import SearchIcon from '../../assets/svg/search.svg';

type SearchProps =  {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
}

const StyledSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #FFF;
  padding: 8px 16px;
`;

const StyledSearchInput = styled.input`
  padding-left: 16px;
  border: none;
  background: transparent;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput: React.FC<SearchProps> = ({ placeholder, value, onChange }) => {
    return (
        <StyledSearchWrapper>
          <StyledSearchIcon>
            <SearchIcon />
          </StyledSearchIcon>
          <StyledSearchInput type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        </StyledSearchWrapper>
    );
};

export default SearchInput;