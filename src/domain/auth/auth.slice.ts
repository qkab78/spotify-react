import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Auth } from "./entities/auth";
import { authenticateUser } from "./use-cases";

enum AUTH_SLICE { NAME = 'auth' }

const initialState: Auth = { isAuthenticated: false, accessToken: '', refreshToken: '' };


const authSlice = createSlice({
  name: AUTH_SLICE.NAME,
  reducers: {},
  initialState,
  extraReducers: (builder) => builder.addCase(authenticateUser.fulfilled, (state, action) => {
    state.isAuthenticated = action.payload.isAuthenticated;
    state.accessToken = action.payload.accessToken;
    state.refreshToken = action.payload.refreshToken;
  })
})

const authState = (state: RootState) => state.auth

const authSelector = createSelector(authState, (state) => state)

export { authSlice, authSelector, AUTH_SLICE }