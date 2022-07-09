import { equal } from "assert";
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/general";
import { RootState } from "../../store";
import { setLoading } from "../../store/reducers/global";
import { setUserData } from "../../store/reducers/user";
import { UserStateType } from "../../store/types";

import { storage } from "../../utils/storage"
import { CardList } from "./components/cardList/index";
import { Text, Title } from "./styles"

export const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const getUser = async () => {
        const userData = storage.get('user');

        if (!userData?.pokedex) navigate('/entrar');

        dispatch(setUserData(userData));

        console.log('User Data:', userData);
    }

    useEffect(() => {
        getUser();
        dispatch(setLoading(false));
    }, []);

    return (
        <>
            <Container>
                <Text>Olá,</Text>
                <Title>{user.name}</Title>

                <CardList />
            </Container>
        </>
    );
}