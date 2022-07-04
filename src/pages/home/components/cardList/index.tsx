import { Link } from "react-router-dom"
import { CardItem, List } from "./styles"

export const CardList = () => {
    const Card = (props: any) => {
        return (
            <CardItem style={{ 'background': props.color }}>
                <Link to={props.path}>
                    <div className="content">
                        <h3>{ props.title }</h3>
                    </div>
                </Link>
            </CardItem>
        )
    }

    return (
        <List>
            <Card title='Explorar' color='#5E51EB' path='/explorar'></Card>
            <Card title='Pokedéx' color='#3C90F5' path='/pokedex'></Card>
            <Card title='Inventário' color='#FD9B1E' path='/inventario'></Card>
        </List>
    )
}