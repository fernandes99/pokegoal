import { useEffect, useState } from "react"
import { Button } from "../../components/button"
import { Container, Spinner } from "../../components/general"
import { capitalize } from "../../utils/general"
import { requests } from "../../utils/requests"
import { PokemonContainer } from "./components/pokemon"
import { Actions, Box, Text, Title, Content, ExploringBox } from "./styles"

export const ExplorePage = () => {
    const [ pokemon, setPokemon ] = useState<any>(null);
    const [ exploring, setExploring ] = useState<boolean>(true);
    let timer: any;

    const findPokemon = () => {
        setExploring(true);
        clearTimeout(timer);

        timer = setTimeout(async () => {
            const pkmFinded = await requests.get.pokemon();
            const pkmSpecie = await requests.get.specie(pkmFinded.species.name);
            const pkmColor = pkmSpecie.color.name;

            pkmFinded.name = capitalize(pkmFinded.name.replaceAll('-', ' '));
            pkmFinded.color = pkmColor;

            console.log('Specie:', pkmSpecie);
            console.log('Pokemon:', pkmFinded);

            setPokemon(pkmFinded);
            setExploring(false);
        }, 1500);
    }

    useEffect(() => {
        findPokemon();
    }, [])

    return (
        <Container>
            { exploring ?
                <ExploringBox>
                    <Spinner />
                    <Title>Explorando</Title>
                </ExploringBox>
                :
                <Box>
                    {pokemon ? <PokemonContainer data={pokemon}/> : null}

                    <Content>
                        <Title color={pokemon?.color}>Você encontrou um <strong>{pokemon?.name}</strong>.</Title>
                        <Text>O que deseja fazer?</Text>

                        <Actions>

                            <Button.Default text="Correr" />
                            <Button.Default onClick={() => findPokemon()} text="Encontrar outro" />
                            <Button.Primary text="Jogar pokebola" />
                        </Actions>
                    </Content>
                </Box>
            }

        </Container>
    )
}