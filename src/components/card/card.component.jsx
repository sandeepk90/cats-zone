import React from 'react';
import './card.styles.css';

const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt='cat' src={`https://robohash.org/${props.cat.id}?set=set4&size=180x180`} />
            <h2>{props.cat.username}</h2>
            <p>Address:</p> {props.cat.address.street},{props.cat.address.city}
        </div>
    )
}

export default Card;
