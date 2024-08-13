import axios from "axios";
import React, { useState } from "react";

const User = () => {
    const [userList,setUser] = useState([]);
    const [userObj,setUserObj]= useState({
        "userId": 0,
        "userName": "",
        "emailId": "",
        "fullName": "",
        "role": "",
        "createdDate":new Date(),
        "password": "",
        "projectName": "",
        "refreshToken": "",
        "refreshTokenExpiryTime": new Date()
      })

      const updateFormValue = (event,key)=> {
        setUserObj(oldObj=> ( {...oldObj,[key]:event.target.value}))
      }

    const getUsers = async () => {
        const res = await axios.get("https://projectapi.gerasim.in/api/BudgetPlanner/GetAllUsers");
        setUser(res.data.data);
    }

    const onSaveUser = async () => { 
        const res = await axios.post("https://projectapi.gerasim.in/api/BudgetPlanner/AddNewUser",userObj );
        if(res.data.result) {
            alert("User Created Success")
        } else {
            alert(res.data.message)
        }
    }
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <div className="card">
            <div className="card-header bg-success">
              <div className="row">
                <div className="col-6">User List</div>
                <div className="col-6 text-end">
                  <button className="btn btn-primary" onClick={getUsers}>Load Data</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Full Name</th>
                    <th>Project Name</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        userList.map((item,index)=> {
                            return( <tr>
                                <td>{index+1} </td>
                                <td>{item.userName}</td>
                                <td>{item.emailId}</td>
                                <td>{item.fullName}</td>
                                <td>{item.projectName}</td>
                              </tr>)
                        })
                    }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header bg-success">New User -</div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <label>User Name</label>
                  <input type="text" className="form-control" onChange={(event)=>updateFormValue(event,'userName')} />
                </div>
                <div className="col-6">
                  <label>Email Id</label>
                  <input type="text" className="form-control" onChange={(event)=>updateFormValue(event,'emailId')} />
                </div>
                <div className="col-6">
                  <label>Full nmame</label>
                  <input type="text" className="form-control" onChange={(event)=>updateFormValue(event,'fullName')} />
                </div>
                <div className="col-6">
                  <label>Role</label>
                  <input type="text" className="form-control" onChange={(event)=>updateFormValue(event,'role')} />
                </div>
                <div className="col-6">
                  <label>password</label>
                  <input type="text" className="form-control" onChange={(event)=>updateFormValue(event,'password')} />
                </div>
                <div className="col-6">
                  <label>Project Name</label>
                  <input type="text" className="form-control" onChange={(event)=>updateFormValue(event,'projectName')} />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className="btn btn-success" onClick={onSaveUser}>Save User</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
