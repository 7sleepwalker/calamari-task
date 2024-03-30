import React from 'react';
import styled from 'styled-components';

import { Specialist } from '../../api/getSpecialistApi';
import Typography from '../Typography';
import IconButton from '../IconButton';
import Avatar from '../Avatar';
import Card from '../Card';

import CalendarIcon from '../../assets/svg/calendar.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import BellIcon from '../../assets/svg/bell.svg';
import MailIcon from '../../assets/svg/mail.svg';
import MoreIcon from '../../assets/svg/more.svg';
import Rating from '../Rating';

const StyledWrapper = styled.div`
    max-width: 450px;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;  
    gap: 40px;
    text-align: center;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
`;

const StyledHeart = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;


const StyledDropDown = styled.div`
    cursor: pointer;
    &:hover {
        background-color: #F3F5FC;
        color: #3540FF;
        border-radius: 4px;
    }
`;

const StyledProfileMeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    gap: 24px;
`;

const StyledProfileIcons = styled.div`
    display: flex;
    gap: 9px;
    border-bottom: 1px solid #F2F4F6;
`;

const StyledFooter = styled.div`
    display: flex;
    border-top: 1px solid #F2F4F6;
`;

const StyledAction = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    color: #A2A8C1;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    text-transform: uppercase;
    flex: 1 1 50%;
    padding: 10px;
    height: 59px;

    &:not(:last-child) {
        border-right: 1px solid #F2F4F6;
    }

    &:hover {
        background: #3540FF;
        color: #fff;
    }
`;

type SpecialistRepresentationProps = {
    specialist: Specialist;
    onLike: (specialist: Specialist) => void;
    onRate: (id: number, rate: number) => void;
}

const SpecialistRepresentation: React.FC<SpecialistRepresentationProps> = ({ specialist, onLike, onRate }) => (
    <StyledWrapper>
        <Card>
            <StyledContent>
                <StyledHeader>
                    <StyledDropDown><MoreIcon /></StyledDropDown>
                    <StyledHeart onClick={() => onLike(specialist)}><HeartIcon /></StyledHeart>
                </StyledHeader>
                <StyledProfileMeta>
                    <Avatar name={`${specialist.name} ${specialist.surname}`} src={specialist.avatar} />
                    <div>
                        <Typography variant="h3">{`${specialist.name} ${specialist.surname}`}</Typography>
                        <Typography variant='p1'>{specialist.profession}</Typography>
                    </div>
                </StyledProfileMeta>
                <StyledProfileIcons>
                    <IconButton>
                        <BellIcon />
                    </IconButton>
                    <IconButton>
                        <CalendarIcon />
                    </IconButton>
                    <IconButton>
                        <MailIcon />
                    </IconButton>
                </StyledProfileIcons>
                <div>
                    <Rating userRate={specialist.myRate} rate={specialist.rate} rateAmount={specialist.rateAmount} onClick={(rate) => onRate(specialist.id, rate)} />
                </div>
                <StyledFooter>
                    <StyledAction>Profile</StyledAction>
                    <StyledAction>Book a visit</StyledAction>
                </StyledFooter>
            </StyledContent>
        </Card>
    </StyledWrapper>
);

export default SpecialistRepresentation;