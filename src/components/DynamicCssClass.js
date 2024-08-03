import React, { useState } from "react";

const DynamicCssClass = () => {

    const [div1Color, setDiv1] = useState("");
    const [div2Active, setdiv2Active] = useState(true);

    const [num1, setnum1] = useState("");
    const [num2, setnum2] = useState("");

    const [div4Color, setDiv4] = useState("");

    const chnageDiv4 = (event) => {
        setDiv4(event.target.value)
    }

    const addDiv1Color = (color) => {
        setDiv1(color)
    }

    const toggleDiv2 = () => {
        setdiv2Active(!div2Active)
    }
    const changeNum2 = (event) => {
        setnum2(event.target.value)
    }
    const changeNum1 = (event) => {
        setnum1(event.target.value)
    }

  return (
    <div>
      <div className="mt-2 p-2 bg-secondary text-white rounded">
        <h1>Dynamic Css and  Dynamic class</h1> 
      </div>
      <div className="row pt-3">
        <div className="col-3">
          <div className="p-3 text-center" style={{'background-color': div1Color, 'color':'green'}}>
            <h4>Div-1 </h4>
          </div>
        </div>
        <div className="col-3">
          <div className="p-3 text-center" style={{'background-color':div2Active ? 'green':'red' }}>
            <h4>Div-2 </h4>
          </div>
        </div>
        <div className="col-3">
          <div className={`p-3 text-center ${num1 == num2  ? 'bg-success': 'bg-danger'}`}>
            <h4>Div-3 </h4>
          </div>
        </div>
        <div className="col-3">
          <div className={`p-3 text-center ${div4Color}`}>
            <h4>Div-4 </h4>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-3 text-center">
          <button className="btn btn-danger" onClick={()=>addDiv1Color('red')}>Add Red</button>
          <button className="btn btn-primary mx-2" onClick={()=>addDiv1Color('blue')}>Add Blue</button>
        </div>
        <div className="col-3 text-center">
          <button className="btn btn-success" onClick={toggleDiv2}> Toggle</button>
        </div>
        <div className="col-3">
          <div className="inline-text">
            <input type="text" placeholder="Num-1" onChange={(event)=>changeNum1(event)} className="width-50" />
            <input type="text" placeholder="Num-2" onChange={(event)=>changeNum2(event)} className="width-50" />
          </div>
        </div>
        <div className="col-3">
          <div className="inline-text">
            <input type="text" onChange={(event)=>chnageDiv4(event)} className="width-50" />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCssClass;
