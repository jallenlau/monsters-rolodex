import Card from '../card/card.component'
import './card-list.styles.css'

import { Monster } from '../../App'

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardListProps) => ( /*此处用（）代替 {} 是因为隐藏了 return()*/
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card card={monster} key={monster.id} />
        })}
    </div>
);
    
export default CardList;

//built in class components
/*
import { Component } from "react";
import Card from '../card/card.component'
import './card-list.styles.css'

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        
        return (  
            <div className='card-list'>
                {monsters.map((monster) => {
                    return (
                        <Card card={monster} key={monster.id}/>
                    )
                }
                )}
            </div>
        );
    }       
}

export default CardList;
*/

