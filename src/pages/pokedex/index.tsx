import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { setLoading } from "../../store/reducers/global";
import { setUserData } from "../../store/reducers/user";

import { storage } from "../../utils/storage";

import { Container } from "../../components/general";
import { Box, PokedexList, PokedexItem } from "./styles";

export const PokedexPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const getUser = async () => {
        const userData = storage.get('user');
        if (!userData) navigate('/entrar');

        dispatch(setUserData(userData));
    }

    useEffect(() => {
        getUser();
        dispatch(setLoading(false));
    }, []);

    return (
        <>
            <Container>
                <PokedexList>
                    <PokedexItem>
                        
                    </PokedexItem>
                </PokedexList>
            </Container>
        </>
    );
}