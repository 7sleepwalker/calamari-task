import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SpecialistRepresentation from '../SpecialistRepresentation';
import { Specialist } from '../../api/getSpecialistApi';

const StyledSpecialistList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;    
`;

const ITEMS_PER_PAGE = 8;

type SpecialistListProps = {
    specialistList: Specialist[];
    onLike: (specialist: Specialist) => void;
    onRate: (id: number, rate: number) => void;
};

const SpecialistList: React.FC<SpecialistListProps> = ({ specialistList, onLike, onRate }) => {
    const [hasMore, setMore] = useState(true);
    const [page, setPage] = useState(1);

    const handleLoadMore = () => {
        if (hasMore) {
            setPage((prev) => prev + 1);
            setMore(specialistList.length > page * ITEMS_PER_PAGE);
        }
    };

    const isBottom = (el: HTMLElement) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    useEffect(() => {
        const handleScroll = () => {
            const wrappedElement = document.getElementById('specialist-list');
            if (wrappedElement && isBottom(wrappedElement)) {
                handleLoadMore();
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <StyledSpecialistList id="specialist-list">
            {specialistList.slice(0, ITEMS_PER_PAGE * page)?.map(specialist => (
                <SpecialistRepresentation key={specialist.id} specialist={specialist} onLike={onLike} onRate={onRate}  />
            ))}
        </StyledSpecialistList>
    );
};

export default SpecialistList;