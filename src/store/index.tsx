import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from "./reducers/global";
import userReducer from "./reducers/user";

const reducer = combineReducers({
    global: globalReducer,
    user: userReducer,
});

const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;