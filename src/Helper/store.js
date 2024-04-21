import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'
import userSignUpReducer from './userSignUpSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        userSignUp: userSignUpReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});