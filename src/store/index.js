import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterApi } from "./api";

export function makeStore() {
  return configureStore({
    devTools: import.meta.env.VITE_APP_ENV !== "production",
    reducer: combineReducers({
      [counterApi.reducerPath]: counterApi.reducer
    }),
    middleware: (getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware({ serializableCheck: false })
        .concat(counterApi.middleware);
      return middleware;
    }
  });
}

export const store = makeStore();

export default { store };