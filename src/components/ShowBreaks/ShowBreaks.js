import React from 'react';
import './ShowBreaks.css';

const ShowBreaks = (props) => {
    const { showBreaks } = props;
    let getTimer = 0;
    for (getTimer of showBreaks) {
        getTimer = getTimer.timer;

    }
    localStorage.setItem('Timer', JSON.stringify(getTimer));

    return (
        <div>
            <h3>Exercise Details</h3>

            <div className='exercise-details-div'>
                <h4 style={{ display: "inline" }}>Break Time: </h4><span style={{ marginLeft: "35px" }}>{getTimer}s</span>
            </div>
        </div>
    );
};

export default ShowBreaks;