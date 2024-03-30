import React from 'react';
import styled from 'styled-components';

import StartIcon from '../../assets/svg/star.svg';

type IconProps =  {
  rate: number;
  rateAmount: number;
  userRate: number | null;
  onClick: (rate: number) => void;
}

const StyledRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;
`;


const StyledRateList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const StyledStar = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  color: ${props => props.isActive ? '#00E3EE' : '#C5CDDA'};
`

const StyledRate = styled.div`
  color: #000;
  font-size: 30px;
  line-height: 41px;
  fonrt-weight: 600;
`

const StyledRateAmount = styled.div`
  color: #A2A8C1;
  font-size: 12px;
  line-height: 16px;
  fonrt-weight: 400;
`


const RATE_SCALE = 5;

const Rating: React.FC<IconProps> = ({ userRate, rate, rateAmount, onClick }) => {


  return (<StyledRating>
    <StyledRateList>
      {new Array(RATE_SCALE).fill(0).map((_, index) => (
        <StyledStar isActive={typeof userRate === 'number' ? userRate > index : false} onClick={() => onClick(index + 1)}>
          <StartIcon />
        </StyledStar>
      ))}
    </StyledRateList>
    <div>
      <StyledRate>{rate}</StyledRate>
      <StyledRateAmount>({rateAmount})</StyledRateAmount>
    </div>
  </StyledRating>);
};

export default Rating;