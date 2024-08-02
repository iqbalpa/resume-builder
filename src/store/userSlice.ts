import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Education {
  univ: string;
  year: number;
  major: string;
  time: string; // ex: Aug. 2021 - Jul. 2025
}

interface resumeState {
  user: User | null;
  education: Education | null;
}

const initialState: resumeState = {
  user: null,
  education: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: resumeState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setEducation: (state: resumeState, action: PayloadAction<Education>) => {
      state.education = action.payload;
    },
  },
});

export const { setUser, setEducation } = userSlice.actions;

export default userSlice.reducer;
