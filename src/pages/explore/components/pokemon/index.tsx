import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setLoading } from "../../../../store/reducers/global"

import { Tag } from "../../../../components/tag"
import { Box, Info, PkmImage, Title, Tags } from "./styles"
import { PokemonPropsType } from "./types"

export const PokemonContainer: React.FC<PokemonPropsType> = (props: PokemonPropsType) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(false));
    }, []);

    return (
        <Box>
            <PkmImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png" alt={props.name} />

            <Info>
                <Title>{props.name}</Title>
                <Tags>
                    <Tag text="Elétrico" color="#E9BB00"/>
                </Tags>
            </Info>
        </Box>
    );
}