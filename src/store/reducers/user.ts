import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '../../models/user';

interface UserState {
  user: UserInfo | undefined;
}

const initialState = { user: undefined } as UserState

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser(state, {payload}: PayloadAction<UserInfo>) {
      state.user = payload;
    },
  },
})

export const { fetchUser } = user.actions
export default user.reducer;

