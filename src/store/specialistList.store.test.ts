import { describe, expect, it } from '@jest/globals';
import { Specialist } from '../api/getSpecialistApi';
import { SpecialistListState, fetchSpecialistList, specialistListSlice } from './specialistList.store';

describe('specialistListSlice', () => {
    let initialState: SpecialistListState | undefined;

    beforeEach(() => {
        initialState = {
            employees: [],
            data: [],
            status: 'idle',
        };
    });

    it('should add a specialist', () => {
        const specialist: Specialist = {
            id: 1,
            name: 'John Doe',
            avatar: '',
            surname: '',
            profession: '',
            rate: 0,
            rateAmount: 0,
            myRate: null,
            favorite: false,
            gender: 'male'
        };
        const action = specialistListSlice.actions.addSpecialist(specialist);
        const nextState = specialistListSlice.reducer(initialState, action);

        expect(nextState.employees).toContainEqual(specialist);
    });

    it('should remove a specialist', () => {
        const specialist1: Specialist = {
            id: 1,
            name: 'John Doe',
            avatar: '',
            surname: '',
            profession: '',
            rate: 0,
            rateAmount: 0,
            myRate: null,
            favorite: false,
            gender: 'male'
        };
        const specialist2: Specialist = {
            id: 2,
            name: 'Jane Smith',
            avatar: '',
            surname: '',
            profession: '',
            rate: 0,
            rateAmount: 0,
            myRate: null,
            favorite: false,
            gender: 'female'
        };
        const initialStateWithSpecialists: SpecialistListState = {
            ...initialState,
            employees: [specialist1, specialist2],
            data: [],
            status: 'idle',
        };
        const action = specialistListSlice.actions.removeSpecialist(1);
        const nextState = specialistListSlice.reducer(initialStateWithSpecialists, action);

        expect(nextState.employees).not.toContainEqual(specialist1);
        expect(nextState.employees).toContainEqual(specialist2);
    });

    it('should rate a specialist', () => {
        const specialist1: Specialist = {
            id: 1,
            name: 'John Doe',
            myRate: 0,
            avatar: '',
            surname: '',
            profession: '',
            rate: 0,
            rateAmount: 0,
            favorite: false,
            gender: 'male'
        };
        const specialist2: Specialist = {
            id: 2,
            name: 'Jane Smith',
            myRate: 0,
            avatar: '',
            surname: '',
            profession: '',
            rate: 0,
            rateAmount: 0,
            favorite: false,
            gender: 'male'
        };
        const initialStateWithSpecialists: SpecialistListState = {
            ...initialState,
            data: [specialist1, specialist2],
            employees: [specialist1, specialist2],
            status: 'idle',
        };
        const action = specialistListSlice.actions.rateSpecialist({ id: 1, rate: 5 });
        const nextState = specialistListSlice.reducer(initialStateWithSpecialists, action);

        expect(nextState.data[0].myRate).toBe(5);
        expect(nextState.employees[0].myRate).toBe(5);
    });

    it('should update the status to "loading" when fetching specialist list', () => {
        const action = { type: fetchSpecialistList.pending.type };
        const nextState = specialistListSlice.reducer(initialState, action);

        expect(nextState.status).toBe('loading');
    });

    it('should update the data and status to "idle" when fetching specialist list is fulfilled', () => {
        const specialist1: Specialist = {
            id: 1,
            name: 'John Doe',
            myRate: 0,
            avatar: '',
            surname: '',
            profession: '',
            rate: 0,
            rateAmount: 0,
            favorite: false,
            gender: 'male'
        };
        const specialist2: Specialist = {
            id: 2,
            name: 'Jane Smith',
            myRate: 0,
            avatar: '',
            surname: '',
            profession: '',
            rate: 0,
            rateAmount: 0,
            favorite: false,
            gender: 'male'
        };
        const action = { type: fetchSpecialistList.fulfilled.type, payload: [specialist1, specialist2] };
        const nextState = specialistListSlice.reducer(initialState, action);

        expect(nextState.data).toEqual([specialist1, specialist2]);
        expect(nextState.status).toBe('idle');
    });
});