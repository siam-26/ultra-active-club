import React from 'react';
import './Cards.css';

const Cards = (props) => {
    const { img, name, time } = props.card;

    return (

        <div className='card'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <p>{time} minutes</p>
            </div>
            <div className='btn-div'>
                <button onClick={() => props.handler(props.card)} className='btn-select'>Select</button>
            </div>


        </div>


    );
};

export default Cards;