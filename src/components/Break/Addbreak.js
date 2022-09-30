import React, { useState } from 'react';
import './Addbreak.css';

const Addbreak = (props) => {
    const { cards } = props;
    const [breakprops, setBreakprops] = useState([]);

    function btn_breakprops(card) {
        const btnCards = [...breakprops, card];
        setBreakprops(btnCards);


    }
    Breaktime(breakprops);

    return (
        <div className='break-area-div'>
            <h3>Add A Break</h3>

            <div className='btn-break-area-div'>
                {
                    cards.map(card => <button onClick={() => btn_breakprops(cards)} className='btn-break-area' key={card.id}>{card.timer}s</button>)
                }

            </div>
            <Breaktime></Breaktime>

        </div>
    );
};

const Breaktime = (breakprops) => {


    return (
        <div>
            <h3>Exercise Details</h3>

            <div className='exercise-details-div'>
                <h4 style={{ display: "inline" }}>Break Time:</h4><span style={{ marginLeft: "35px" }}></span>
            </div>


        </div>
    )
}

export default Addbreak;