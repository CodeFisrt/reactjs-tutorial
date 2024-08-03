import React, { useState } from "react";

const ConditionRender = () => {

  const [isDiv1Visiable,setDiv1] = useState(true);
  const [isDiv2Visiable, setDiv2] = useState(false);

  const [input1,setInput1]= useState('');
  const [input2,setInput2]= useState('');

  const [isAcitve, setActive]= useState(false);
  const [selecteCountry, setselecteCountry]= useState("");

  const chnageActive = (event) => {
    setActive(event.target.checked)
  }
  const chnageCountry = (event) => {
    setselecteCountry(event.target.value)
  }

  const changeInput1 = (event) => {
    setInput1(event.target.value)
  }
  const changeInput2 = (event) => {
    setInput2(event.target.value)
  }
  const showDiv1 = () => {
    setDiv1(true)
  }
  const hideDiv1 = () => {
    setDiv1(false)
  }
  const showHideDiv2 = () => {
    setDiv2(!isDiv2Visiable)
  }

  return (
    <div>
      <div className="mt-2 p-2 bg-secondary text-white rounded">
        <h1>Conditional Rendering</h1>  
      </div>
      <div className="row pt-3">
        <div className="col-3">
            {
                isDiv1Visiable &&  <div className="bg-danger p-3 text-center">
                     <h4>Div-1 </h4>
                 </div>
            }
         
        </div>
        <div className="col-3">
            {
                isDiv2Visiable &&  <div className="bg-success p-3 text-center">
                <h4>Div-2 </h4>
              </div>
            } 
        </div>
        <div className="col-3"> 
            {
                input1 == input2 &&  <div className="bg-secondary p-3 text-center">
                <h4>Div-3 </h4>
              </div>
            }
         
        </div>
        <div className="col-3">
            {
                isAcitve || selecteCountry == 'USA' &&  <div className="bg-primary p-3 text-center">
                <h4>Div-4 </h4>
              </div>
            }
          
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-3 text-center">
          <button className="btn btn-danger" onClick={hideDiv1}>Hide</button>
          <button className="btn btn-primary mx-2" onClick={showDiv1}>Show</button>
        </div>
        <div className="col-3 text-center">
          <button className="btn btn-success" onClick={showHideDiv2}>Toggle</button>
        </div>
        <div className="col-3">
          <div className="inline-text">
            <input type="text" onChange={(event)=> changeInput1(event)} placeholder="Num-1" className="width-50" />
            <input type="text" onChange={(event)=> changeInput2(event)} placeholder="Num-2" className="width-50" />
          </div>
        </div>
        <div className="col-3">
          <div className="inline-text">
            <input type="checkbox"  onChange={(event)=> chnageActive(event)} className="width-50" />
            <select onChange={(event)=> chnageCountry(event)}>
              <option  >Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Shrilanka">Shrilanka</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionRender;
