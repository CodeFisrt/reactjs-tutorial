import axios from 'axios';
import React, { useState } from 'react';

const GetApi = () => {
    const [userList,setUserList] = useState([]);
    const [userData, setUserData] = useState([]);

const getUsers = async () => {
    const apiResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
    debugger;
    setUserList(apiResponse.data)
}

const getUserList =  async () => {
    const response =  await axios.get("https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
    debugger;
    setUserData(response.data.data)
}

    return (
        <div>
            
            <div className='row'>
                <div className='col-4'>
                <button className='btn btn-success' onClick={getUsers}>Get Users</button>
                    <ul>
                        {
                            userList.map((item)=>{
                                return (<li>{item.name}</li>)
                            })
                        }
                    </ul>
                </div>
                <div className='col-4'>
                <button className='btn btn-success' onClick={getUserList}>Get Users 2</button>
                    <ul>
                        {
                            userData.map((item)=>{
                                return (<li>{item.userName}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GetApi;