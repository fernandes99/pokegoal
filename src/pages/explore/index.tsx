import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/user";
import pokeballWobble from "../../assets/sounds/pokeballWobble.mp3";

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { capitalize, getPercentage, randomIntFromInterval } from "../../utils/general"
import { requests } from "../../utils/requests"
import { storage } from "../../utils/storage";

import { Button } from "../../components/button"
import { Container, Spinner } from "../../components/general"
import { PokemonContainer } from "./components/pokemon"
import { Actions, Box, Text, Title, Content, ExploringBox, CatchingBox, PokemonBox } from "./styles"
import { pkmColors, rateInPercentage } from "../../utils/pokemon"
import { PokeballSVG } from "../../components/pokeball/pokeball"
import { setLoading } from "../../store/reducers/global";

export const ExplorePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ pokemon, setPokemon ] = useState<any>(null);
    const [ exploring, setExploring ] = useState<boolean>(true);
    const [ catching, setCatching ] = useState<boolean>(false);
    const [ catched, setCatched ] = useState<boolean>(false);
    const [ pkmRate, setPkmRate ] = useState<any>();
    const [ currentLife, setCurrentLife ] = useState<number>(0);
    const [ callbackCatched, setCallbackCatched ] = useState<boolean>(false);

    const toastOptions:any = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { top: 20, margin: '0 20px' }
    };


    let timer: any;

    const getUser = async () => {
        const userData = storage.get('user');
        if (!userData) navigate('/entrar');

        dispatch(setUserData(userData));
    }

    const findPokemon = () => {
        // WIP: Inserir estado para o pokemon atual de vez de usar props (para retirar o uso de trigger eventos de dano ataque);

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
            pkmFinded.rate = rateInPercentage(pkmFinded.specie.capture_rate);
            pkmFinded.hp = pkmFinded.stats.find((item: any) => item.stat.name === "hp").base_stat;

            console.log('Specie:', pkmSpecie);
            console.log('Pokemon:', pkmFinded);

            pkmFinded.sound.volume = 0.2;
            pkmFinded.sound.play();

            setCurrentLife(pkmFinded.hp);
            setPkmRate(pkmFinded.rate);
            setPokemon(pkmFinded);
            setExploring(false);
        }, 1500);
    }

    const hitPokemon = () => {
        const damage = randomIntFromInterval(2, 30);
        const current = currentLife - damage;

        setCurrentLife(current);
        
        const event = new CustomEvent('pkm-hit', { detail: { currentLife: current }});
        document.dispatchEvent(event);

        if (current <= 0) {
            toast.success(`Você derrotou ${pokemon?.name}`, toastOptions);
            dispatch(setLoading(true));

            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }

    useEffect(() => {
        if (!currentLife || !pokemon) return;

        const percentage = getPercentage(currentLife, pokemon.hp);
        
        if (percentage <= 5) return setPkmRate(pkmRate + pkmRate * 2);
        if (percentage <= 20) return setPkmRate(pkmRate + pkmRate);
        if (percentage <= 50) return setPkmRate(pkmRate + pkmRate / 2);
        if (percentage <= 90) return setPkmRate(pkmRate + pkmRate / 5);

    }, [currentLife])

    const catchPokemon = () => {
        const pkbSound = new Audio(pokeballWobble);

        pkbSound.playbackRate = 1.5;
        pkbSound.play();

        setCatching(true);

        const rate = rateInPercentage(pkmRate);
        const random = randomIntFromInterval(0, 100);

        console.log('Rate:', rate);

        setCatched(rate >= random);
    }

    const callbackCatch = () => {
        if (catched) {
            dispatch(setLoading(true));

            const pokedexData = { name: pokemon?.name, id: pokemon?.id };
            const userData = storage.get('user');

            toast.success(`Parabéns você conseguiu capturar um ${pokemon?.name}`, toastOptions);
            setCallbackCatched(true);

            userData.pokedex.push(pokedexData);
            storage.set('user', userData);

            dispatch(setUserData(userData));

            setTimeout(() => {
                dispatch(setLoading(false));
                findPokemon();
            }, 2000);
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
                            <Button.Primary color="#dd6054" onClick={() => hitPokemon()} text="Atacar" />
                            <Button.Primary onClick={() => catchPokemon()} text="Jogar pokebola" />
                        </Actions>
                    </Content>
                </Box>
            }
            <ToastContainer />
        </Container>
    )
}