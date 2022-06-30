import { Link } from "react-router-dom"
import { Item, List } from "./styles"

export const CardList = () => {
    const Card = () => {
        return (
            <Item>
                
            </Item>
        )
    }

    return (
        <List>
            <Link to='/'>
                <Card></Card>
            </Link>
        </List>
    )
}