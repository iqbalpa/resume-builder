import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const MAX_STEP = 6;

interface stepState {
  step: number;
  visitedSteps: number[];
}

const initialState: stepState = {
  step: 1,
  visitedSteps: [1],
};

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    nextStep: (state: stepState) => {
      if (state.step < MAX_STEP) {
        state.step += 1;
        if (!state.visitedSteps.includes(state.step)) {
          state.visitedSteps.push(state.step);
        }
      }
    },
    prevStep: (state: stepState) => {
      if (state.step > 1) {
        state.visitedSteps = state.visitedSteps.filter(
          (step) => step !== state.step,
        );
        state.step -= 1;
      }
    },
  },
});

export const { nextStep, prevStep } = stepSlice.actions;

export default stepSlice.reducer;
