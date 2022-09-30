import React from 'react';
import './Exercisedetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Exercisedetails = (props) => {
    const { exercisedetails } = props;
    let time = 0;
    for (const detail of exercisedetails) {
        time = time + detail.time;
    }

    //Toast
    const notify = () => toast("Hey! Congratulations!!!");

    return (
        <div className='exercise-details-container-div'>


            <div className='exercise-details-div'>
                <h4 style={{ display: "inline" }}>Exercise Time:</h4><span style={{ marginLeft: "35px" }}>{time} mins</span>
            </div>


            <div className='btn-activity-div'>
                <button onClick={notify} className='btn-activity' style={{ fontWeight: "bold" }}>Activity Completed</button><ToastContainer />
            </div>

        </div >
    );
};

export default Exercisedetails;