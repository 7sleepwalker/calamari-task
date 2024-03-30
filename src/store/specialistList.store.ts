import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { Specialist, getSpecialistApi } from '../api/getSpecialistApi'

export type SpecialistListState = {
    data: Specialist[];
    employees: Specialist[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: SpecialistListState = {
    data: [],
    employees: [],
    status: 'idle',
}

const updateSpecialistRate = (specialist: Specialist, rate: number): number => {
  const isRated = specialist.myRate !== null;
  const rateAmount = isRated ? specialist.rateAmount : specialist.rateAmount + 1;
  let oldRate = specialist.myRate || 0;
  return Math.round((specialist.rate * specialist.rateAmount - oldRate + rate) / (rateAmount) * 10) / 10;
}

export const fetchSpecialistList = createAsyncThunk('specialistList/fetchSpecialists', async () => await getSpecialistApi())

export const specialistListSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    addSpecialist: (state, action: PayloadAction<Specialist>) => {
      if (!state.employees.find(specialist => specialist.id === action.payload.id)) {
        state.employees.push(action.payload)
      }
    },
    removeSpecialist: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(specialist => specialist.id !== action.payload)
    },
    rateSpecialist: (state, action: PayloadAction<{id: number, rate: number}>) => {
      const specialist = state.data.find(specialist => specialist.id === action.payload.id)
      const employee = state.employees.find(specialist => specialist.id === action.payload.id)

      if (specialist) {
        specialist.myRate = action.payload.rate
      }
      if (employee) {
        employee.rate = updateSpecialistRate(employee, action.payload.rate);
        if (!employee.myRate) {
          employee.rateAmount += 1
        }
        employee.myRate = action.payload.rate
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSpecialistList.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchSpecialistList.fulfilled, (state, action) => {
        state.data = action.payload.map((specialist) => specialist);
        state.status = 'idle'
      })
  }
})

export default specialistListSlice.reducer