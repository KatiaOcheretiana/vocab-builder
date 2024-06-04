import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { login, registration } from './operations';

type InitialStateProps = {
  user: { name: null | string; email: null | string };
  token: string;
  isLoading: boolean;
  error: null | string;
};

const initialState: InitialStateProps = {
  user: { name: null, email: null },

  token: '',
  isLoading: false,
  error: null,
};

const handlePending = (state: Draft<InitialStateProps>) => {
  state.isLoading = true;
};

const handleFulfilled = (state: Draft<InitialStateProps>) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (
  state: Draft<InitialStateProps>,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => handlePending(state))
      .addCase(registration.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(registration.rejected, (state, action: PayloadAction<any>) =>
        handleRejected(state, action)
      )
      .addCase(login.pending, (state: Draft<InitialStateProps>) =>
        handlePending(state)
      )
      .addCase(
        login.fulfilled,
        (state: Draft<InitialStateProps>, action: PayloadAction<any>) => {
          handleFulfilled(state);
          state.user.name = action.payload.name;
          state.user.email = action.payload.email;
          state.token = action.payload.token;
        }
      )
      .addCase(
        login.rejected,
        (state: Draft<InitialStateProps>, action: PayloadAction<any>) =>
          handleRejected(state, action)
      );
  },
});

export const authReducer = authSlice.reducer;
