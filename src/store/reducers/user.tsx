import { createSlice } from "@reduxjs/toolkit";
import { UserStateType } from "../types";

const user = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        name: '',
        items: {
            pokeballs: 0,
        },
        pokedex: []
    } as UserStateType,
    reducers: {
        setUserData (state: UserStateType, action: any) {
            Object.assign(state, action.payload)
        },
        setUserName (state: UserStateType, action: any) {
            state.name = action.payload;
        },
        setUserId (state: UserStateType, action: any) {
            state.id = action.payload;
        },
        setUserPokeballs (state: UserStateType, action: any) {
            state.items.pokeballs = action.payload;
        },
        removeFirstItemPokedex (state: UserStateType, action: any) {
            state.pokedex?.shift();
        },
        addPokemonInPokedex (state: UserStateType, action: any) {
            state.pokedex?.push(action.payload);
        },
        resetUserData (state: UserStateType, action: any) {
            state = action.payload;
        },
    }
})

export const { setUserData, setUserName, setUserId, setUserPokeballs, addPokemonInPokedex, resetUserData, removeFirstItemPokedex } = user.actions;
export default user.reducer;