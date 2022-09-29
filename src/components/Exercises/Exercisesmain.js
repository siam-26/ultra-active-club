import React, { useEffect, useState } from 'react';
import Calculationside from '../CalculationsSide/Calculationside';
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

            <div className='card-part-div'>

                <div className='header'>
                    <h1>FITNESS WORLD-FW</h1>
                    <p>Select Your Workouts</p>
                </div>


                <div className='card-info'>

                    {
                        cards.map(card => <Cards
                            key={card.id}
                            card={card}></Cards>)
                    }
                </div>
            </div>


            <div className='calculations-div'>
                <Calculationside></Calculationside>
            </div>

        </div>
    );
};

export default Exercisesmain;