import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
    name: 'global',
    initialState: {
        loading: false as boolean
    },
    reducers: {
        setLoading (state: any, action: any) {
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = global.actions;
export default global.reducer;