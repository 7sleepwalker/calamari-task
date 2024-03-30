import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { fetchSpecialistList, specialistListSlice } from '../../store/specialistList.store';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import SpecialistList from '../../components/SpecialistList';
import { Specialist } from '../../api/getSpecialistApi';
import SearchInput from '../../components/SearchInput';
import ButtonGroup from '../../components/ButtonGroup';
import Typography from '../../components/Typography';
import Button from '../../components/Button';

const StyledSearchSpecialist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 48px;

    & > * {
        flex: 1 1 100%;
        width: 100%;
    }
`;

const StyledSearchSpecialistHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: 1024px) {
        justify-content: space-around;
    }
`;

const StyledInputWrapper = styled.div`
    max-width: 300px;
`;

const SearchSpecialist: React.FC = () => {
    const [list, setList] = useState<'all' | 'employees'>('all');
    const specialistListStore = useAppSelector(state => state.specialistList);
    const dispatch = useAppDispatch();

    const handleListChange = (list: 'all' | 'employees') => {
        setList(list);
    }

    const handleSpecialistLike = (specialist: Specialist) => {
        dispatch(specialistListSlice.actions.addSpecialist(specialist));
    };

    const handleSpecialistDisLike = (specialist: Specialist) => {
        dispatch(specialistListSlice.actions.removeSpecialist(specialist.id));
    };

    const handleSpecialistRate = (id: number, rate: number) => {
        dispatch(specialistListSlice.actions.rateSpecialist({ id, rate }));
    };

    useEffect(() => {
        dispatch(fetchSpecialistList());
    }, []);
    
    if (specialistListStore.status === 'loading') {
        return <Typography variant="h3">Loading...</Typography>;
    }
    
    return (
        <StyledSearchSpecialist>
            <StyledSearchSpecialistHeader>
                <Typography variant="h2">Favorite Specialist</Typography>
                <ButtonGroup>
                    <Button onClick={() => handleListChange('all')} variant={list === 'all' ? 'primary' : 'secondary'}>All favorite</Button>
                    <Button onClick={() => handleListChange('employees')} variant={list === 'employees' ? 'primary' : 'secondary'}>My specialist</Button>
                </ButtonGroup>
                <StyledInputWrapper>
                    <SearchInput placeholder='Szukaj' onChange={() => {}} value={''} />
                </StyledInputWrapper>
            </StyledSearchSpecialistHeader>
            {list === 'all' && <SpecialistList specialistList={specialistListStore.data} onLike={handleSpecialistLike} onRate={handleSpecialistRate} />}
            {list === 'employees' && <SpecialistList specialistList={specialistListStore.employees} onLike={handleSpecialistDisLike} onRate={handleSpecialistRate} />}
            
        </StyledSearchSpecialist>
    );
};

export default SearchSpecialist;