import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseEffect = () => {

    const[userList, setUsers] =  useState([]);

    const [userName,setUserName]=useState("");

    const [userCity,setUserCity]=useState("");

    useEffect(()=>{
        console.log("Use Effect with-Out []")
    })

    useEffect(() => {
        getUsers();
        console.log("Use Effect with []")
    }, [])

    const getUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(result.data)
    }
    const changeName = (event) => {
        setUserName(event.target.value)
    }
    return (
        <div>
           
            <div className='row'>
                <div className='col-3'>
                    <ul>
                        {
                            userList.map((item)=>{
                                return(<li>{item.username}</li>)
                            })
                        }
                    </ul>
                </div>
                <div className='col-3'>
                    <input type='text' onChange={(event)=> changeName(event)} />
                </div>
            </div>
        </div>
    );
};

export default UseEffect;