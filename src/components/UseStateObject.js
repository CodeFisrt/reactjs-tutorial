import React, { useState } from 'react';

const UseStateObject = () => {

    const [studentObj, setStudentObj] = useState({
        name:'AAA',
        city: 'Pune',
        State: 'MH'
    })
    const changeName = (event) => {
        setStudentObj(oldObj => ( {...oldObj,name:event.target.value} ))
    }
    const chnageCity = (event)=> {
        setStudentObj(obj => ( {...obj,city:event.target.value} ))
    }
    return (
        <div className='container'>
            <p>{JSON.stringify(studentObj)}</p>
            <div className='row'>
                <div className='col-4'>
                    <label>Name</label>
                    <input type='text' onChange={(event)=> changeName(event)} className='form-control'/>
                </div> 
            </div>
            <div className='row'>
                <div className='col-4'>
                    <label>City</label>
                    <input type='text' onChange={(event)=>chnageCity(event)} className='form-control'/>
                </div>
                <div className='col-4'>
                    <label>State</label>
                    <input type='text' className='form-control'/>
                </div>
            </div>
        </div>
    );
};

export default UseStateObject;