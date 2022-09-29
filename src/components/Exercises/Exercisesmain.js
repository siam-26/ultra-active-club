import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Exercisesmain.css';

const Exercisesmain = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('fitness.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    return (
        <div className='container-div-main'>
            <div className='card-info'>

                {
                    cards.map(card => <Cards
                        key={card.id}
                        card={card}></Cards>)
                }
            </div>

            <div className='calculations-div'>
                <p>gg</p>
            </div>
        </div>
    );
};

export default Exercisesmain;