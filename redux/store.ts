import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import modalSliceReducer from './modal/modalSlice';
import podcastPlayerSliceReducer from './player/playerSlice';

const middlewares = [...getDefaultMiddleware()];
if (process.env.NODE_ENV !== 'production') middlewares.push(logger);

export const store = configureStore({
  reducer: {
    modalDialog: modalSliceReducer,
    podcastPlayer: podcastPlayerSliceReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
