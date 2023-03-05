// import { configureStore } from '@reduxjs/toolkit';
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import userReducer from './slices/userSlice';
// import newsReducer from './news/news-slice';

// export const store = configureStore({
//     reducer: {
//         user: userReducer,
//         contacts: newsReducer,
//     }
// });

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from './slices/userSlice';
import newsReducer from './news/news-slice';

const rootreduser = combineReducers({
    user: userReducer,
    posts: newsReducer,
});

const persistConfig = {
  key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootreduser);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);