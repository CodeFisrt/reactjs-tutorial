import React from 'react';

const DataBinding = () => {
    const tutorialName = "Reactjs Tutorial";
    const rollNo = 121;
    const isActive =  true;
    const currentDate = new Date();
    const student = {
        name: 'AAA',
        city: 'Pune',
        state: 'MH'
    };
    const cityList = ['Pune','Mumbai','Jaipur'];
    return (
        <div>
            <h4>Data Binding</h4>
            <input type='text' value={tutorialName} />
            <span>{rollNo}</span>
            <table>
                <tr>
                    <td> tutorialName - {tutorialName} </td>
                    <td>rollNo - {rollNo} </td>
                    <td>isActive - {isActive ? 'Active':'De-Active'} </td>
                    <td>currentDate - {currentDate.toString()}</td>
                </tr>
                <tr>
                    <td>
                    student  name- {student.name} , city : {student.city}
                    </td>
                </tr>
                <tr>
                    <td> {cityList.toString()}</td>
                </tr>
            </table>
        </div>
    );
};

export default DataBinding;