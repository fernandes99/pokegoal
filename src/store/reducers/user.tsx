import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        id: 0 as Number,
        name: '' as String,
        items: {
            pokeballs: 0 as Number,
        }
    },
    reducers: {
        setUserName (state: any, action: any) {
            state.name = action.payload;
        },
        setUserId (state: any, action: any) {
            state.id = action.payload;
        },
        setUserPokeballs (state: any, action: any) {
            state.items.pokeballs = action.payload;
        }
    }
})

export const { setUserName, setUserId, setUserPokeballs } = user.actions;
export default user.reducer;