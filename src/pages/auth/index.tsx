import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { requests } from "../../utils/requests";

import { Container, Spinner } from "../../components/general"
import { Box, Title, Text, Input, Button, Form } from "./styles"
import { RootState } from "../../store";
import { setUserName } from "../../store/reducers/user";

export const AuthPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    console.log(`User: ${user}`);

    const [ pokemon, setPokemon ] = useState<any>(null);

    const fetchPokemonHome = async () => {
        let random = await requests.get.pokemon();
        setPokemon(random);

        setInterval(async () => {
            random = await requests.get.pokemon();
            setPokemon(random);
        }, 5000);
    }

    useEffect(() => {
        fetchPokemonHome();
    }, []);

    return (
        <Container>
            <Box className='auth-box'>
                { pokemon
                    ?
                        <Box className='auth-image'>
                            <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name}></img>
                        </Box>
                    :
                        <Box className='auth-spinner'>
                            <Spinner></Spinner>
                        </Box>
                }
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Text>Bem vindo ao</Text>
                    <Title>Poke<strong>Goal</strong></Title>
                    <Input placeholder="Insira seu nome" onChange={(e) => dispatch(setUserName(e.target.value))} />
                    <Button type="submit">Jogar</Button>
                </Form>
            </Box>
        </Container>
    )
}