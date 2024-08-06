import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Education {
  id: string;
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

interface Project {
  title: string;
  stack: string;
  description: string;
}

interface Skill {
  title: string;
  description: string;
}

interface resumeState {
  user: User | null;
  education: Education[];
  experience: Experience | null;
  project: Project | null;
  skill: Skill | null;
}

const initialState: resumeState = {
  user: null,
  education: [],
  experience: null,
  project: null,
  skill: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: resumeState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setEducation: (state: resumeState, action: PayloadAction<Education[]>) => {
      state.education = action.payload;
    },
    setExperience: (state: resumeState, action: PayloadAction<Experience>) => {
      state.experience = action.payload;
    },
    setProject: (state: resumeState, action: PayloadAction<Project>) => {
      state.project = action.payload;
    },
    setSkill: (state: resumeState, action: PayloadAction<Skill>) => {
      state.skill = action.payload;
    },
    addEducation: (state: resumeState, action: PayloadAction<Education>) => {
      state.education = [...state.education, action.payload];
    },
    removeEducation: (state: resumeState, action: PayloadAction<string>) => {
      state.education = state.education.filter(
        (edu) => edu.id !== action.payload,
      );
    },
  },
});

export const {
  setUser,
  setEducation,
  setExperience,
  setProject,
  setSkill,
  addEducation,
  removeEducation,
} = userSlice.actions;

export default userSlice.reducer;
