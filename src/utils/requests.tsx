import { arrayBuffer } from "stream/consumers";
import { configs } from "./configs";

export const requests = {
    get: {
        pokemon: async (name?: string, id?: number) => {
            const value = name || id;

            if (value) {
                return await fetch(`${configs.urls.pokeApi}/pokemon/${value}`, { mode: 'cors' })
                    .then(res => res.json());
            }

            const pkmRandom = await fetch(`${configs.urls.pokeApi}/pokemon?limit=99999&offset=0`, { mode: 'cors' })
                .then(res => res.json()
                .then(async data => {
                    const pkmIdxRandom = (Math.floor(Math.random() * data.count) + 1) - 1;
                    const pkmName = data.results[pkmIdxRandom].name;

                    return await fetch(`${configs.urls.pokeApi}/pokemon/${pkmName}`, { mode: 'cors' }).then(res => res.json());
                }));

            return pkmRandom;
        },

        specie: async (name: string) => {
            return await fetch(`${configs.urls.pokeApi}/pokemon-species/${name}`, { mode: 'cors' })
                    .then(res => res.json());
        },
    },
}