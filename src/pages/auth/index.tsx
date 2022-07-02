import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { requests } from "../../utils/requests";
import { storage } from "../../utils/storage";
import { getRandomValue } from "../../utils/general";

import { Container, Spinner } from "../../components/general"
import { Box, Title, Text, Input, Button, Form } from "./styles"
import { RootState } from "../../store";
import { setUserId, setUserName, setUserPokeballs } from "../../store/reducers/user";
import { setLoading } from "../../store/reducers/global";

export const AuthPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const [ pokemon, setPokemon ] = useState<any>(null);

    const fetchPokemonHome = async () => {
        let random = await requests.get.pokemon();
        setPokemon(random);

        setInterval(async () => {
            random = await requests.get.pokemon();
            setPokemon(random);
        }, 5000);
    }

    const handleAuth = (event: any) => {
        dispatch(setLoading(true));
        event.preventDefault();

        if (!user.name) return alert('Insira um nome');

        const id = getRandomValue();
        
        dispatch(setUserId(id));
        dispatch(setUserPokeballs(10));
        storage.set('user', user);
        navigate('/');
    }

    useEffect(() => {
        fetchPokemonHome();
        dispatch(setLoading(false));
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
                <Form onSubmit={(event: any) => handleAuth(event)}>
                    <Text>Bem vindo ao</Text>
                    <Title>Poke<strong>Goal</strong></Title>
                    <Input placeholder="Insira seu nome" onChange={(e) => dispatch(setUserName(e.target.value))} />
                    <Button type="submit">Jogar</Button>
                </Form>
            </Box>
        </Container>
    )
}