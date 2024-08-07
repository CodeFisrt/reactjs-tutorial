import React from 'react';

const MapOperator = () => {
    const cityArray = ["Pune", "Mumbai",'Jaipur', 'Nagpur'];

    const studentArray = [
        {name:'aaa',city:'Mumbai',rollN0:121},
        {name:'bbb',city:'Pune',rollN0:122},
        {name:'ccc',city:'Panji',rollN0:123},
        {name:'ddd',city:'Bhopal',rollN0:124},
        {name:'eee',city:'Indore',rollN0:125}
    ]
    return (
      <div>
        <div className="row">
          <div className="col-6">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Roll No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentArray.map((stud,index)=>{
                                return (<tr>
                                    <td>{index+1}</td>
                                    <td>{stud.name}</td>
                                    <td>{stud.city}</td>
                                    <td>{stud.rollN0}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ul>
              {
                cityArray.map((cityName)=>{
                    return (<li> {cityName}</li>)
                })
              }
            </ul>
          </div>
          <div className="col-3">
            <select className="form-select">
              {cityArray.map((item) => {
                return <option>{item}</option>;
              })}
            </select>
          </div>
          <div className="col-3">
            <select>
              {studentArray.map((student) => {
                return <option value={student.rollN0}> {student.name}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    );
};

export default MapOperator;