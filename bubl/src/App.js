import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import SchoolsList from "./components/SchoolsList";
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import BublPage from './components/BublPage';
import Bubl from './components/Bubl';
import { NavBar } from './StyledComponents';

function App() {
  return (
    <div className="App">
        <div>
        <NavBar>
          <NavLink to="/login" activeClassName="activeNav">Login</NavLink>
          <NavLink to="/register" activeClassName="activeNav">Register</NavLink>
          <NavLink to="/schools" activeClassName="activeNav">Schools</NavLink>
        </NavBar>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/schools" component={SchoolsList} />
        {/* <Route exact path="/schools" component={SchoolsList} /> */}
        <Route path="/register" component={Register}/>        
        <Route path="/schools/:id" component={BublPage} />
        <Route exact path="/bubl/:id" component={Bubl} />
        </div>
    </div>
  );
}

export default App;
