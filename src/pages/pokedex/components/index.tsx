import { useEffect, useState } from "react";
import { BRType } from "../../../assets/settings/translate";
import { Tag } from "../../../components/tag";
import { capitalize } from "../../../utils/general";
import { pkmColors, pkmColorsType } from "../../../utils/pokemon";
import { requests } from "../../../utils/requests";
import { List, Item, Tags } from "./styles"

export const PokemonList = (props: any) => {
    console.log(props.data);
    const [ pokemons, setPokemons ] = useState([]);
    let arrayPkms = [] as any;

    const populateList = async () => {
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
        populateList();
    }, [])

    useEffect(() => {
        console.log(pokemons)
    }, [pokemons])

    return (
        <List>
            { pokemons?.map((pkm: any, index: number) => {
                if (!pkm.id) return null;
                const firstColorType = pkmColorsType[pkm.types[0].type.name];

                return (
                    <Item color={firstColorType} key={index}>
                        <p>{pkm.name}</p>
                        <Tags>
                            {pkm.types.map((item: any, index: number) => {
                                const name = item.type.name;
                                const color = pkmColorsType[name];
                                const BRName = BRType[name];

                                return(<Tag fontSize="11px" text={BRName} color={color} filled={true} />)
                            })}
                        </Tags>
                        <img src={pkm.image} />
                        <div className="detail"></div>
                    </Item>
                )
                })}
        </List>
    )
}