import { configureStore } from '@reduxjs/toolkit'
import orebiReducer from './orebiSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
      key: 'root',
      storage,
}

const persistedReducer = persistReducer(persistConfig, orebiReducer)

export const store = configureStore({
      reducer: {
            orebi: persistedReducer

      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: false
            }),
})

export const persistor = persistStore(store)
