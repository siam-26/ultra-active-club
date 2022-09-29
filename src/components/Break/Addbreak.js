import React from 'react';
import './Addbreak.css';

const Addbreak = (props) => {
    const { cards } = props;

    return (
        <div className='break-area-div'>
            <h3>Add A Break</h3>

            <div className='btn-break-area-div'>
                {
                    cards.map(card => <button className='btn-break-area'>{card.timer}s</button>)
                }
            </div>

        </div>
    );
};

export default Addbreak;