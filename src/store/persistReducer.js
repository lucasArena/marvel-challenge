import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'marvel-challenge',
      storage,
      whitelist: ['auth', 'characters'],
    },
    reducers
  );

  return persistedReducers;
};
