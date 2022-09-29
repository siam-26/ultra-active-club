import React from 'react';
import './Exercisedetails.css';

const Exercisedetails = (props) => {
    const { exercisedetails } = props;
    let time = 0;
    for (const detail of exercisedetails) {
        time = time + detail.time;
    }
    return (
        <div className='exercise-details-container-div'>
            <h3>Exercise Details</h3>

            <div className='exercise-details-div'>
                <h4 style={{ display: "inline" }}>Exercise Details:</h4><span style={{ marginLeft: "35px" }}>{time} mins</span>
            </div>

            <div className='btn-activity-div'>
                <button className='btn-activity'>Activity Completed</button>
            </div>
        </div >
    );
};

export default Exercisedetails;