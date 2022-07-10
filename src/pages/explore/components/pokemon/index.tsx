import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setLoading } from "../../../../store/reducers/global"

import { Tag } from "../../../../components/tag"
import { Box, Title, Info, PkmImage, Tags } from "./styles"
import { pkmColorsType } from "../../../../utils/pokemon"
import { Life } from "../life"
import { getPercentage } from "../../../../utils/general"

export const PokemonContainer: React.FC<any> = (props: any) => {
    const dispatch = useDispatch();
    const pokemon = props.data;
    const pokemonImage = pokemon.sprites.other?.home?.front_default || pokemon.sprites.other?.officialArtwork?.front_default || pokemon.sprites.front_default;
    const [ currentLife, setCurrentLife ] = useState<number>(pokemon.hp);
    const [ percentage, setPercentage ] = useState<any>();

    let current = pokemon.hp;

    useEffect(() => {
        document.addEventListener('pkm-hit', (event: any) => {
            current = current - event.detail.damage;
            setCurrentLife(current);
        });

        dispatch(setLoading(false));
    }, []);

    useEffect(() => {
        setPercentage(getPercentage(currentLife, pokemon.hp));
    }, [currentLife]);

    return (
        <Box>
            <PkmImage color={pokemon.color} src={pokemonImage} alt={pokemon.name} />

            <Life full={pokemon.hp} current={currentLife} percentage={percentage}/>

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