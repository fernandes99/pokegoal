import { Link } from "react-router-dom"
import { storage } from "../../../../utils/storage";
import { CardItem, List } from "./styles"

type CardPropsType = {
    title: string;
    color: string;
    path: string;
    onClick?: any;
}

export const Menu = () => {
    const Card = (props: CardPropsType) => {
        return (
            <CardItem style={{ 'background': props.color }} onClick={() => props.onClick ? props.onClick() : null}>
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
            <Card title='Sair' color='#7b8ca1' path='/entrar' onClick={() => storage.clear()}></Card>
        </List>
    )
}