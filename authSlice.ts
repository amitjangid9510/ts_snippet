import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../utils/api';

// Define the shape of user data your API returns (adjust according to actual response)
interface User {
  id: string;
  email: string;
  name: string;
  // add other user properties as needed
}

// Define the state type
interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

// Define the type for signup form data input (adjust fields as needed)
interface SignupData {
  email: string;
  password: string;
  name?: string;
}

// Async thunk with typed args and return type
export const signupUser = createAsyncThunk<
  User,        // Return type of thunk payload on success
  SignupData,  // Argument to the thunk (input data)
  { rejectValue: string }  // Type for rejectWithValue
>(
  'userAuth/signupUser',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/signup', userData);
      return res.data as User;
    } catch (err: any) {
      // Provide a typed rejection value string
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
