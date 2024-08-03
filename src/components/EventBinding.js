import React from 'react';

const EventBinding = () => {

    const showAlert = () => {
        alert("Welcome to Reactjs")
    }

    const showMessage = (msg) => {
        alert(msg)
    }
    const onCityChange = () => {
        alert('city Chnaged')
    }
    const onTextChange = () => {
        alert('Text Chnaged')
    }
    const onNameChange = (event) => {
        debugger;
       console.log(event.target.value)
    }


    return (
        <div>
            <button onClick={showAlert}>Show Alert </button>
            <button onClick={ () => showAlert() }>Show Alert 2 </button>

            <button onClick={ () => showMessage('Btn 1')}>Show Btn 1 Msg</button>
            <button onClick={ () => showMessage('Btn 2')}>Show Btn 2 Msg</button>
            <select onChange={onCityChange}>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Nagpur</option>
            </select>
            <input type='text' onChange={onTextChange}/>
            <br></br>
            <input type='text' onChange={(event) => onNameChange(event)}/>
        </div>
    );
};

export default EventBinding;