import React from 'react';
import styled, { css } from 'styled-components';

type TypographyProps =  {
    children: string;
    variant: 'h2' | 'h3' | 'p1';
}

const StyledHeader2 = styled.h2`
  font-size: 30px;
  line-height: 41px;
  color: #000;
  font-weight: 600;
  margin: 0;
`;

const StyledHeader3 = styled.h3`
  font-size: 19px;
  line-height: 26px;
  color: #000;
  font-weight: 600;
  margin: 0;
`;

const StyledParagraph = styled.p<TypographyProps>`
     ${props => {
      switch (props.variant) {
        case "p1":
          return css`
            font-size: 14px;
            font-weight: 400;
            color: #A2A8C1;
          `;
      
        default:
          return;
        }
      }
    };
    line-height: 19px;
    margin: 0;
`;    


const Typography: React.FC<TypographyProps> = ({ children, variant }) => {

  if (variant === 'h2') return (
    <StyledHeader2> 
      {children}
    </StyledHeader2>
  )

  if (variant === 'h3') return (
    <StyledHeader3> 
      {children}
    </StyledHeader3>
  )

  return (
      <StyledParagraph variant={variant}>
          {children}
      </StyledParagraph>
  );
};

export default Typography;