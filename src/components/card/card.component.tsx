import { Monster } from '../../App';
import './card.styles.css';

type CardProps = {
    card: Monster;
}

const Card = ({ card }: CardProps) => { //Line3
    const { id, name, email } = card; //如果省略此行，需将Line3替换为{card:{id, name, email}}
    return (
    <div className='card-container'>
        <img
            alt={` ${name}`}
            src={`https://robohash.org/${id}?set=set2&szie=180*180`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
        </div>
    )
};
   
export default Card;

//bulit in class components
/*
import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render() {
        const { name, id, email } = this.props.card;
        return (
            <div className='card-container'>
                        <img
                            alt={` ${name}`}
                            src={`https://robohash.org/${id}?set=set2&szie=180*180`}
                            />
                        <h1>{ name }</h1>
                        <p>{ email }</p>
                      </div>
        )
    }
}

export default Card;
*/