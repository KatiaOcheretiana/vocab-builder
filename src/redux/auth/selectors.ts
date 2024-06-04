import { RootState } from '../store';

export const selectUserName = (state: RootState) => state.auth.user.name;
