import React, { useState } from 'react';

const UseState = () => {
    let corseName= "React";

    const [courseDuration, setCourseName] = useState("2 Months");
    const [state, setState] =  useState("MH");
    const [rollNo, setRollNo] =  useState(123);
    const [isActive,setISActive]=  useState(false);
    const [currentDate,setCurrentDate] = useState(new Date());

    const [student, setStudent] = useState({name:'ssss',age:12,city:'Pune'});
    const [cityList, setCityList] =  useState(['Pune','Mumbai']);

    const chnageName = () => {
        debugger;
        corseName = "Angular";
    }

    const chnageDuration = () => {
        setCourseName("Angular")
    }
    const chnageRollNo = (event)=>{
        setRollNo(event.target.value)
    } 
    const changeState = (event)=>{
        setState(event.target.value)
    } 
    const onActiveChange= (event)=> {
        debugger;
        setISActive(event.target.checked)

    }
    return (
        <div>
            <p>{JSON.stringify(student)}</p>
            <p>{cityList}</p>
          <div className='row'>
            <div className='col-3'>
                <p>{corseName}</p>
            </div>
            <div className='col-3'>
                <p>{courseDuration}</p>
            </div>
            <div className='col-3'>
                <p>{rollNo}</p>
            </div>
            <div className='col-3'>
                <p>{state}</p> 
                <p>{isActive ?'Active':'De-Active'}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
                 <button className='btn btn-primary' onClick={chnageName}>Change Course Name</button>
            </div>
            <div className='col-3'>
                 <button className='btn btn-primary' onClick={chnageDuration}>Change Duration</button>
            </div>
            <div className='col-3'>
                  <input type='text' onChange={(event)=>chnageRollNo(event)} />
            </div>
            <div className='col-3'>
                <select onChange={(event)=>changeState(event)}>
                    <option>Goa</option>
                    <option>MH</option>
                    <option>Punjab</option>
                    <option>Delhi</option>
                </select>
                <input type='checkbox' onChange={(event)=>onActiveChange(event)}/>
            </div>
          </div>

        </div>
    );
};

export default UseState;