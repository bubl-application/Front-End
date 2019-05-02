import React from 'react';
import { Route, NavLink } from "react-router-dom";
import Login from './components/Login';
import SchoolsList from "./components/SchoolsList";
import PrivateRoute from "./components/PrivateRoute";
// import './App.css';
import BublPage from './components/BublPage';
import Bubl from './components/Bubl';
import { NavBar, NavLinkStyled } from './StyledComponents';

function App() {
  return (
    <div className="App">
        <div>
        <NavBar>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/schools">Schools</NavLink>
        </NavBar>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/schools" component={SchoolsList} />
        {/* <Route exact path="/schools" component={SchoolsList} /> */}
        <Route path="/schools/:id" component={BublPage} />
        <Route exact path="/bubl/:id" component={Bubl} />
        </div>
    </div>
  );
}

export default App;
