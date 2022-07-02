import { Button } from "../../components/button"
import { Container } from "../../components/general"
import { PokemonContainer } from "./components/pokemon"
import { Actions, Box, Subtitle, Title } from "./styles"

export const ExplorePage = () => {
    return(
        <Container>
            <PokemonContainer name="Pikachu"/>

            <Box>
                <Title color="#E9BB00">Você encontrou um <b>Pikachu</b>.</Title>
                <Subtitle>O que deseja fazer?</Subtitle>

                <Actions>
                    <Button.Primary text="Jogar pokebola" />
                    <Button.Default text="Correr" />
                </Actions>
            </Box>
        </Container>
    )
}