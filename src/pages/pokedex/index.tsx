import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { setLoading } from "../../store/reducers/global";
import { setUserData } from "../../store/reducers/user";

import { storage } from "../../utils/storage";

import { Container } from "../../components/general";
import { Title, CapituredBox } from "./styles";
import { PokemonList } from "./components";

export const PokedexPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const getUser = () => {
        const userData = storage.get('user');
        if (!userData) navigate('/entrar');

        dispatch(setUserData(userData));
    }

    useEffect(() => {
        dispatch(setLoading(true));
        getUser();
        dispatch(setLoading(false));
    }, []);

    return (
        <>
            <Container>
                <CapituredBox>
                    <Title>Capturados:</Title>
                    { user.pokedex && <PokemonList data={user.pokedex} /> }
                </CapituredBox>
            </Container>
        </>
    );
}