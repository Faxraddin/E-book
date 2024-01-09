import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './setUser'

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  version:1,
};

const reducer = combineReducers({
    user:userReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});