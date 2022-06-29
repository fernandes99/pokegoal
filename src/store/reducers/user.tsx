import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        id: 0 as Number,
        name: '' as String,
    },
    reducers: {
        setUserName (state: any, action: any) {
            state.name = action.payload;
        }
    }
})

export const { setUserName } = user.actions;
export default user.reducer;