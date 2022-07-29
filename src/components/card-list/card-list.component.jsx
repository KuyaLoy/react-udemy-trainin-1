import { Component } from "react";
import  Card  from "../card/card.component"
import './card-list.sytyle.css';

class CardList extends Component {

    render() {
        console.log(this.props); 

        const { monsters } = this.props;

        return(
                <div className="card-list">
                {monsters.map(monster => {
                    return (
                    
                        <Card monster={monster}/>

                )})}
            </div>
        );
    }

}

export default CardList;