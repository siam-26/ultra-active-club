import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
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
                    <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> FITNESS WORLD-FW</h1>
                    <p>Select Your Workouts</p>
                </div>


                <div className='card-info'>

                    {
                        cards.map(card => <Cards
                            key={card.id}
                            card={card}

                            handler={btn_handler}
                        >
                        </Cards>)
                    }
                </div>
            </div>


            <div className='calculations-div'>
                <Calculationside></Calculationside>
                <Addbreak cards={cards}></Addbreak>
                <Exercisedetails exercisedetails={exercisedetails}></Exercisedetails>
                {/* <Breaktime></Breaktime> */}

            </div>

        </div>
    );
};

export default Exercisesmain;