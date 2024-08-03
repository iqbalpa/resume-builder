import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const MAX_STEP = 6;

interface stepState {
  step: number;
}

const initialState: stepState = {
  step: 1,
};

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    nextStep: (state: stepState) => {
      if (state.step === MAX_STEP) {
        state.step = MAX_STEP;
      } else {
        state.step += 1;
      }
    },
    prevStep: (state: stepState) => {
      if (state.step === 1) {
        state.step = 1;
      } else {
        state.step -= 1;
      }
    },
  },
});

export const { nextStep, prevStep } = stepSlice.actions;

export default stepSlice.reducer;
