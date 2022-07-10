import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/user";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { capitalize, randomIntFromInterval } from "../../utils/general"
import { requests } from "../../utils/requests"
import { storage } from "../../utils/storage";

import { Button } from "../../components/button"
import { Container, Spinner } from "../../components/general"
import { PokemonContainer } from "./components/pokemon"
import { Actions, Box, Text, Title, Content, ExploringBox, CatchingBox, PokemonBox } from "./styles"
import { pkmColors, rateInPercentage } from "../../utils/pokemon"
import { PokeballSVG } from "../../components/pokeball/pokeball"

export const ExplorePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ pokemon, setPokemon ] = useState<any>(null);
    const [ exploring, setExploring ] = useState<boolean>(true);
    const [ catching, setCatching ] = useState<boolean>(false);
    const [ catched, setCatched ] = useState<boolean>(false);
    const [ callbackCatched, setCallbackCatched ] = useState<boolean>(false);

    let timer: any;

    const getUser = async () => {
        const userData = storage.get('user');
        if (!userData) navigate('/entrar');

        dispatch(setUserData(userData));
    }

    const findPokemon = () => {
        setExploring(true);
        clearTimeout(timer);

        timer = setTimeout(async () => {
            const pkmFinded = await requests.get.pokemon();
            const pkmSpecie = await requests.get.specie(pkmFinded.species.name);
            const pkmColor = pkmColors[pkmSpecie.color.name];
            const pkmSound = new Audio(`https://pokemoncries.com/cries/${pkmFinded.id}.mp3`);

            pkmFinded.name = capitalize(pkmFinded.name.replaceAll('-', ' '));
            pkmFinded.color = pkmColor;
            pkmFinded.specie = pkmSpecie;
            pkmFinded.sound = pkmSound;

            console.log('Specie:', pkmSpecie);
            console.log('Pokemon:', pkmFinded);

            pkmFinded.sound.volume = 0.2;
            pkmFinded.sound.play();

            setPokemon(pkmFinded);
            setExploring(false);
        }, 1500);
    }

    const catchPokemon = () => {
        setCatching(true);

        const rate = rateInPercentage(pokemon.specie.capture_rate);
        const random = randomIntFromInterval(0, 100);

        console.log('Rate:', rate);

        setCatched(rate >= random);
    }

    const callbackCatch = () => {
        const toastOptions:any = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: { top: 20, margin: '0 20px' }
        };

        if (catched) {
            const pokedexData = { name: pokemon?.name, id: pokemon?.id };
            const userData = storage.get('user');

            toast.success(`Parabéns você conseguiu capturar um ${pokemon?.name}`, toastOptions);
            setCallbackCatched(true);

            userData.pokedex.push(pokedexData);
            storage.set('user', userData);

            dispatch(setUserData(userData));
        }
        else toast.error(`Pokemon escapou! Tente novamente.`, toastOptions);

        setCatching(false);
    }

    useEffect(() => {
        getUser();
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
                    { pokemon && (
                        <PokemonBox>
                            { catching &&
                                <CatchingBox>
                                    <PokeballSVG success={catched} callback={() => callbackCatch()}/>
                                </CatchingBox>
                            }
                            <PokemonContainer data={pokemon}/>
                        </PokemonBox>
                    )}

                    <Content style={catching ? { opacity: .5, pointerEvents: 'none' } : {}}>
                        <Title>Você encontrou um <strong>{pokemon?.name}</strong>.</Title>
                        <Text>O que deseja fazer?</Text>

                        <Actions>
                            <Button.Default onClick={() => navigate('/')} text="Fugir" />
                            <Button.Default onClick={() => findPokemon()} text="Encontrar outro" />
                            <Button.Primary onClick={() => catchPokemon()} text="Jogar pokebola" />
                        </Actions>
                    </Content>
                </Box>
            }
            <ToastContainer />
        </Container>
    )
}