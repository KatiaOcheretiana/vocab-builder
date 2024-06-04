import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  //   persistReducer,
  persistStore,
} from 'redux-persist';

import { authReducer } from './auth/authSlice';

// const persistConfig = {
//   key: 'favorite',
//   storage,
// };

const reducers = combineReducers({
  //   favorite: persistReducer<any>(persistConfig, favoriteReducer),

  auth: authReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
