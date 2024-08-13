import logo from './logo.svg';
import './App.css';
import Teacher from './components/Teacher';
import Employee from './components/Employee';
import DataBinding from './components/DataBinding';
import EventBinding from './components/EventBinding';
import UseState from './components/UseState';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';
import ConditionRender from './components/ConditionRender'; 
import MapOperator from './components/MapOperator';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GetApi from './components/GetApi';
import User from './components/User';

function App() {
  return (
    <div classNameName="">
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/data-binding">DataBinding</Link> 
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/Event-binding">EventBinding</Link> 
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/usestate">useState</Link> 
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/condition-render">Hide n Show</Link> 
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/get-api">Get API</Link> 
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to="/User">User</Link> 
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<DataBinding></DataBinding>} ></Route>
          <Route path='/data-binding' element={<DataBinding></DataBinding>} ></Route>
          <Route path='/get-api' element={<GetApi></GetApi>} ></Route>
          <Route path='/User' element={<User></User>} ></Route>
          <Route path='/Event-binding' element={<EventBinding></EventBinding>} ></Route>
          <Route path='/usestate' element={<UseState></UseState>} ></Route>
          <Route path='/condition-render' element={<ConditionRender></ConditionRender>} ></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
