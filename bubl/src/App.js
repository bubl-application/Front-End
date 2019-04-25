import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from './components/Login';
import SchoolsList from "./components/SchoolsList";
import PrivateRoute from "./components/PrivateRoute";
// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/schools">Schools</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/schools" component={SchoolsList} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
