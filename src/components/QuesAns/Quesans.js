import React from 'react';
import './Quesans.css';

const Quesans = () => {
    return (
        <div className='quesans-div'>
            <div>
                <p><b>1.</b>How does <b>React</b> work?</p>
                <p><b>Ans:</b> React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.It is a components based library.</p>
                <br />

                <p><b>2.</b>What are the differences between <b>Props</b> and <b>State?</b></p>
                <p><b>Ans:</b>In <b>Props,</b>The Data is passed from one component to another and it is immutable. And in <b>State,</b>The Data is passed within the component only and it is mutable.</p>
                <br />

                <p><b>3.</b>Other than data load,What are the uses of useEffect()?</p>
                <p><b>Ans:</b>The useEffect Hook allows us to perform side effects in components.Other than data load or fetching data,it directly updating the DOM, and timers.It also capable for handling life-cycle methods in class components.</p>
            </div>
        </div>

    );
};

export default Quesans;