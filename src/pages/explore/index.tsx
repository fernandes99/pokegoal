import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { capitalize, randomIntFromInterval } from "../../utils/general"
import { requests } from "../../utils/requests"

import { Button } from "../../components/button"
import { Container, Spinner } from "../../components/general"
import { PokemonContainer } from "./components/pokemon"
import { Actions, Box, Text, Title, Content, ExploringBox, CatchingBox } from "./styles"
import { pkmColors, rateInPercentage } from "../../utils/pokemon"
import { PokeballSVG } from "../../components/pokeball/pokeball"
import { message } from "antd"

export const ExplorePage = () => {
    const navigate = useNavigate();
    const [ pokemon, setPokemon ] = useState<any>(null);
    const [ exploring, setExploring ] = useState<boolean>(true);
    const [ catching, setCatching ] = useState<boolean>(false);
    const [ catched, setCatched ] = useState<boolean>(false);

    let timer: any;

    const findPokemon = () => {
        setExploring(true);
        clearTimeout(timer);

        timer = setTimeout(async () => {
            const pkmFinded = await requests.get.pokemon();
            const pkmSpecie = await requests.get.specie(pkmFinded.species.name);
            const pkmColor = pkmColors[pkmSpecie.color.name];

            pkmFinded.name = capitalize(pkmFinded.name.replaceAll('-', ' '));
            pkmFinded.color = pkmColor;
            pkmFinded.specie = pkmSpecie;

            console.log('Specie:', pkmSpecie);
            console.log('Pokemon:', pkmFinded);

            setPokemon(pkmFinded);
            setExploring(false);
        }, 1500);
    }

    const catchPokemon = () => {
        setCatching(true);

        const rate = rateInPercentage(pokemon.specie.capture_rate);
        const random = randomIntFromInterval(0, 100);

        setCatched(random > rate);
    }

    const callbackCatch = () => {
        message.success(`Parabéns você conseguiu capturar um ${pokemon?.name}`);
        setCatching(false);
    }

    useEffect(() => {
        findPokemon();
    }, [])

    return (
        <Container>
            { catching ?
                <CatchingBox>
                    <PokeballSVG success={catched} callback={() => callbackCatch()}/>
                </CatchingBox>
                : ( exploring ?
                    <ExploringBox>
                        <Spinner />
                        <Title>Explorando</Title>
                    </ExploringBox>
                    :
                    <Box>
                        { pokemon ? <PokemonContainer data={pokemon}/> : null }

                        <Content>
                            <Title>Você encontrou um <strong>{pokemon?.name}</strong>.</Title>
                            <Text>O que deseja fazer?</Text>

                            <Actions>
                                <Button.Default onClick={() => navigate('/')} text="Correr" />
                                <Button.Default onClick={() => findPokemon()} text="Encontrar outro" />
                                <Button.Primary onClick={() => catchPokemon()} text="Jogar pokebola" />
                            </Actions>
                        </Content>
                    </Box>
                )
            }
        </Container>
    )
}