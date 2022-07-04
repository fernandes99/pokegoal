import { useEffect, useState } from "react";
import { capitalize } from "../../../utils/general";
import { pkmColors } from "../../../utils/pokemon";
import { requests } from "../../../utils/requests";
import { List, Item, Text } from "./styles"

export const PokemonList = (props: any) => {
    console.log(props.data);
    const [ pokemons, setPokemons ] = useState([]);
    let arrayPkms = [] as any;

    const populated = async () => {
        props.data.forEach(async (item: any, index: number) => {
            const pokemon:any = await getPokemonInfo(item.id);

            arrayPkms.push(pokemon);

            if (index == props.data.length - 1) {
                setPokemons(arrayPkms);
            }
        });
    }

    const getPokemonInfo = async (id: number) => {
        const data:any = await requests.get.pokemon(undefined, id);
        const specie:any = await requests.get.specie(data.name);
        const color = pkmColors[specie.color.name];
        const image = data.sprites.other?.home?.front_default || data.sprites.other?.officialArtwork?.front_default || data.sprites.front_default;

        data.name = capitalize(data.name.replaceAll('-', ' '));
        data.color = color;
        data.image = image;

        return data;
    }

    useEffect(() => {
        populated();
    }, [])

    useEffect(() => {
        console.log(pokemons)
    }, [pokemons])

    return (
        <List>
            { pokemons?.map((item: any, index: number) => {
                if (!item.id) return null;

                return (
                    <Item color={item.color} key={index}>
                        <Text>{item.name}</Text>
                        <img src={item.image} />
                    </Item>
                )
                })}
        </List>
    )
}