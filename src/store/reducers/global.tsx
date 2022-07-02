import { createSlice } from "@reduxjs/toolkit";

const global = createSlice({
    name: 'global',
    initialState: {
        loading: true as boolean
    },
    reducers: {
        setLoading (state: any, action: any) {
            state.loading = action.payload;
        }
    }
})

export const { setLoading } = global.actions;
export default global.reducer;