import { useEffect, useState } from "react"
import { Button } from "../../components/button"
import { Container } from "../../components/general"
import { setLoading } from "../../store/reducers/global"
import { requests } from "../../utils/requests"
import { PokemonContainer } from "./components/pokemon"
import { Actions, Box, Text, Title, Content } from "./styles"

export const ExplorePage = () => {
    const [ pokemon, setPokemon ] = useState<any>(null);

    const findPokemon = async () => {
        setLoading(true);

        const pkmFinded = await requests.get.pokemon();
        const pkmSpecie = await requests.get.specie(pkmFinded.species.name);
        const pkmColor = pkmSpecie.color.name;

        console.log('spc', pkmSpecie);

        pkmFinded.color = pkmColor;

        setPokemon(pkmFinded);
        setLoading(false);
    }

    useEffect(() => {
        findPokemon();
    }, [])

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon])

    return(
        <Container>
            <Box>
                {pokemon ? <PokemonContainer data={pokemon}/> : null}

                <Content>
                    <Title color="#E9BB00">Você encontrou um <strong>Pikachu</strong>.</Title>
                    <Text>O que deseja fazer?</Text>

                    <Actions>

                        <Button.Default text="Correr" />
                        <Button.Default onClick={() => alert('teste')} text="Encontrar outro" />
                        <Button.Primary text="Jogar pokebola" />
                    </Actions>
                </Content>
            </Box>
        </Container>
    )
}