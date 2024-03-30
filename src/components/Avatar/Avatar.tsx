import React from 'react';
import styled, { css } from 'styled-components';

type AvatarProps =  {
  name: string;
  src?: string;
  size?: number;
}

const StyledAvatar = styled.div<{ size: AvatarProps['size'] }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: #DEEAFF;
`;    

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const StyledTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #3540FF
`


const Avatar: React.FC<AvatarProps> = ({ name, src, size = 100 }) => {
  const [firstWord, secondWord] = name.split(' ');

    return (
        <StyledAvatar size={size}>
          <StyledImage src={src} alt={name} />
          <StyledTitle>{firstWord?.[0]}{secondWord?.[0]}</StyledTitle>
        </StyledAvatar>
    );
};

export default Avatar;