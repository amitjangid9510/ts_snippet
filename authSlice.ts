import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from '../../utils/api';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

interface SignupData {
  email: string;
  password: string;
  name?: string;
}

export const signupUser = createAsyncThunk<User,SignupData,{ rejectValue: string }>('userAuth/signupUser',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', userData);
      return res.data as User;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Signup failed');
    }
  }
);

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});

export const { clearAuthError } = authSlice.actions;
export default authSlice.reducer;
