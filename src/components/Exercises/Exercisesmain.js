import React, { useEffect, useState } from 'react';
import Addbreak from '../Break/Addbreak';
import Calculationside from '../CalculationsSide/Calculationside';
import Cards from '../Cards/Cards';
import Exercisedetails from '../Exercisedetails/Exercisedetails';
import './Exercisesmain.css';

const Exercisesmain = () => {
    const [cards, setCards] = useState([]);
    const [exercisedetails, setExercisedetails] = useState([]);
    useEffect(() => {
        fetch('fitness.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    function btn_handler(card) {
        const newCard = [...exercisedetails, card];
        setExercisedetails(newCard);
    }
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
                            card={card}
                            // cards={cards}
                            handler={btn_handler}
                        >
                        </Cards>)
                    }
                </div>
            </div>


            <div className='calculations-div'>
                <Calculationside></Calculationside>
                <Addbreak></Addbreak>
                <Exercisedetails exercisedetails={exercisedetails}></Exercisedetails>
            </div>

        </div>
    );
};

export default Exercisesmain;