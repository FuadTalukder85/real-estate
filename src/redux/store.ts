import { configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "./api/BaseApi";

export const store = configureStore({
  reducer: { [BaseApi.reducerPath]: BaseApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
