import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import specialistsReducer from './specialistList.store'

export const store = configureStore({
    reducer: {
      specialistList: specialistsReducer,
    },
})
  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

