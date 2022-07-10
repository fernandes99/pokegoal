export type UserStateType = {
    id: Number,
    name: String,
    items: {
        pokeballs: Number,
    },
    pokedex?: [
        {
            id: Number,
            name: String
        }?
    ]
};