import React from 'react';
import styled from 'styled-components';

type IconProps =  {
  children: React.ReactElement;
}

const StyledButton = styled.button`
  color: #C5CDDA;
  border: none;
  background: none;
  cursor: pointer;
  border-bottom: solid 2px transparent;
  width: 100%;
  padding: 8px;
  &:hover {
    color: #3540FF;
    border-color: #3540FF;
  }

`

const Icon: React.FC<IconProps> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);

export default Icon;