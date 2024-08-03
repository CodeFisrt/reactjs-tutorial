import React, { useState } from 'react';

const UseStateArray = () => {

    const [cityList,setCityList] = useState(['Pune','Nagpur']);

    const [cityName, setCityName] = useState("");

    const changeCity = (event)=> {
        setCityName(event.target.value)
    }
    const addCity =() => {
        setCityList(oldList => [...oldList,cityName])
    }

    return (
        <div>
            <p>{cityList}</p>
            <div className='row'>
                <div className='col-3'>
                    <input type='text' onChange={(event)=>changeCity(event)} className='form-control'/>
                </div>
                <div className='col-3'>
                    <input type='button' onClick={addCity} className='btn btn-success' value="Add City"/>
                </div>
            </div>
        </div>
    );
};

export default UseStateArray;