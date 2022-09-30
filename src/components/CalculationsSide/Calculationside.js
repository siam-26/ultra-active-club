import React from 'react';
import './Calculationside.css';

const Calculationside = () => {
    return (
        <div className='user-info'>
            <div className='name-location'>
                <h3>Name: Sayed Siam</h3>
                <p className='location-p'><small>Dhaka,Bangladesh</small></p>
            </div>

            <div className='more-info'>
                <div>
                    <p className='h-inch'>5.6</p>
                    <p className='my-info-text'>Height</p>
                </div>

                <div>
                    <p className='weight-70'>70<small className='small'>kg</small></p>
                    <p className='my-info-text'>Weight</p>
                </div>

                <div>
                    <p className='age-25'>26<small className='small'>years</small></p>
                    <p className='my-info-text'>Age</p>
                </div>
            </div>

        </div>
    );
};
export default Calculationside;