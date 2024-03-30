import React from 'react';
import styled from 'styled-components';

type CardProps =  {
    children: React.ReactNode;
}

const StyledCard = styled.div`
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 3px 16px 0px rgba(231, 234, 247, 0.35);
`

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    );
};

export default Card;