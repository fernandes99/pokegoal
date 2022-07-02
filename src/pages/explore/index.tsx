import { Button } from "../../components/button"
import { Container } from "../../components/general"
import { PokemonContainer } from "./components/pokemon"
import { Actions, Box, Text, Title, Content } from "./styles"

export const ExplorePage = () => {
    return(
        <Container>
            <Box>
                <PokemonContainer name="Pikachu"/>

                <Content>
                    <Title color="#E9BB00">Você encontrou um <strong>Pikachu</strong>.</Title>
                    <Text>O que deseja fazer?</Text>

                    <Actions>
                        <Button.Primary text="Jogar pokebola" />
                        <Button.Default text="Correr" />
                    </Actions>
                </Content>
            </Box>
        </Container>
    )
}