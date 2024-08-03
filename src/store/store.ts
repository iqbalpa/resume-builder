import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import stepReducer from './stepSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    step: stepReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
