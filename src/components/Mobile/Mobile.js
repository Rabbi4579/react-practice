import React, { useState } from 'react';
import './Mobile.css'
const Mobile = (props) => {
const [power, setPower] = useState(10)
const batteryPower = () =>{
    if(power > 0){
        const newPower = power - 1;
        setPower(newPower)
    }
    else{
        setPower(0)
        alert('Sorry!! Zero limit reached')
    }
}
const batteryIncrease = () =>{
    if(power < 10){
        const newPower = power + 1;
        setPower(newPower)
    }
    else{
        alert('Dont get more then 10')
        setPower(10)
    }
}
    return (
        <div className='mobile'>
            <h2 style={{marginBottom: '30px'}}>Mobile components</h2>
            <p>Charge:{power} </p>
            <button onClick={batteryIncrease}>Battery Increase</button>
            <button onClick={batteryPower}>Battery Down</button>
        </div>
    );
};

export default Mobile;