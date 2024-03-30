import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps =  {
    children: string;
    variant?: 'primary' | 'secondary';
    fullWidht?: boolean;
    onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
     ${props => {
      switch (props.variant) {
        case "primary":
          return css`
            background-color: #3540FF;
            box-shadow: 0px 10px 16px 0px rgba(203, 212, 250, 0.7);
            color: white;
            border: none;
          `;
        case "secondary":
          return css`
            background-color: #F9FAFE;
            color: #A2A8C1;
            border: solid 1px #E2E4EC;
            &:hover {
              background-color: #F3F5FC;
              color: #3540FF;
            }
          `;
        default:
          return;
        }
      }
    };
    width: ${props => props.fullWidht ? '100%' : 'auto'};
    padding: 10px 20px;
    gap: 10px;
    border-radius: 4 0 0 4; cursor: pointer;
`;    


const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidht, onClick }) => {
    return (
        <StyledButton variant={variant} fullWidht={fullWidht} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;