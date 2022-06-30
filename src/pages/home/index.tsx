import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/general";
import { RootState } from "../../store";
import { setUserName } from "../../store/reducers/user";

import { storage } from "../../utils/storage"
import { CardList } from "./components/cardList/index";
import { Text, Title } from "./styles"

export const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);

    const getUser = async () => {
        const userData = storage.get('user');
        if (!userData) navigate('/entrar');

        dispatch(setUserName(userData.name));
    }

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line

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