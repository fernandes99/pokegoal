import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setLoading } from "../../../../store/reducers/global"
import { PokemonPropsType } from "./types"

import { Tag } from "../../../../components/tag"
import { Box, Title, Info, PkmImage, Tags } from "./styles"
import { pkmColorsType } from "../../../../utils/pokemon"

export const PokemonContainer: React.FC<any> = (props: any) => {
    const dispatch = useDispatch();
    const pokemon = props.data;
    const pokemonImage = pokemon.sprites.other?.home?.front_default || pokemon.sprites.other?.officialArtwork?.front_default || pokemon.sprites.front_default;

    useEffect(() => {
        dispatch(setLoading(false));
    }, []);

    return (
        <Box>
            <PkmImage color={pokemon.color} src={pokemonImage} alt={pokemon.name} />

            <Info>
                <Title>{pokemon.name}</Title>
                <Tags>
                    {pokemon.types.map((item: any, index: number) => {
                        const name = item.type.name;
                        const color = pkmColorsType[name];
                        return (<Tag key={index} text={name} color={color}/>)
                    })}
                </Tags>
            </Info>
        </Box>
    );
}