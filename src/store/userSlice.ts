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
  startTime: string;
  endTime: string;
}

interface Experience {
  company: string;
  role: string;
  startTime: string;
  endTime: string;
  description: string;
}

interface resumeState {
  user: User | null;
  education: Education | null;
  experience: Experience | null;
}

const initialState: resumeState = {
  user: null,
  education: null,
  experience: null,
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
    setExperience: (state: resumeState, action: PayloadAction<Experience>) => {
      state.experience = action.payload;
    },
  },
});

export const { setUser, setEducation, setExperience } = userSlice.actions;

export default userSlice.reducer;
