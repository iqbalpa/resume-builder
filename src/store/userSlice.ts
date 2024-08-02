import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state: UserState) => {
      state.user = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
