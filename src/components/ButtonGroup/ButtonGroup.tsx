import React from 'react';
import styled from 'styled-components';

type ButtonGroupProps = {
    children: React.ReactNode;
}

const StyledButtonGroup = styled.div`
    display: flex;
    border-radius: 4px;
    overflow: hidden;
`;

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => {
    return (
        <StyledButtonGroup>
            {children}
        </StyledButtonGroup>
    );
};

export default ButtonGroup;