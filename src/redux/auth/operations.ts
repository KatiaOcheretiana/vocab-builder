import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';

type UserDataRegisterType = {
  name: string;
  email: string;
  password: string;
};

type UserDataLoginType = {
  email: string;
  password: string;
};

const setAuthToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };
export const login = createAsyncThunk(
  'auth/login',
  async (userData: UserDataLoginType, thunkAPI) => {
    try {
      const response = await axios.post('/users/signin', userData);
      setAuthToken(response.data.token);
      toast.success('Welcome!');
      return response.data;
    } catch (error: any) {
      toast.error(
        `Your email or password is wrong! Please try again. Password must be at least 7 characters long`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registration = createAsyncThunk(
  'auth/registration',
  async (userData: UserDataRegisterType, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', userData);
      const responseLogin = await axios.post('/users/signin', {
        email: userData.email,
        password: userData.password,
      });
      setAuthToken(response.data.token);
      toast.success('Welcome!');

      return responseLogin.data;
    } catch (error: any) {
      toast.error(
        `Your email or password is wrong! Please try again. Password must be at least 7 characters long`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const registration = createAsyncThunk(
//   'auth/registration',
//   async (userData: UserDataRegisterType, thunkAPI) => {
//     try {
//       const response = await axios.post('/users/signup', userData);
//       setAuthToken(response.data.token);
//       toast.success('Welcome!');

//       return response.data;
//     } catch (error: any) {
//       toast.error(
//         `Your email or password is wrong! Please try again. Password must be at least 7 characters long`
//       );
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
