import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import kids from '../assets/PNG/INDIVIDUAL/kids.png';
import bubl from '../assets/PNG/INDIVIDUAL/bubl.png';
import bubbles from '../assets/PNG/INDIVIDUAL/Group 48bubbles_around.png';
import bubblekids from '../assets/PNG/INDIVIDUAL/bubbles_around_kids.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 box1">
              <h1 className="content-title title-one">find friends</h1>
              <h1 className="content-title title-two">have fun</h1>
              <h1 className="content-title title-three">grow your</h1>
              <img
                className="bubblesBg"
                height="450"
                src={bubbles}
                alt="bubbles"
              />
              <img className="bublCta" height="90" src={bubl} alt="bubl logo" />
              <div className="row row1 cta-buttons">
                <NavLink to="/register" className="btn-block signupBtn">
                  SignUp
                </NavLink>
              </div>
              <div className="row row2 cta-buttons">
                <NavLink to="/login" className="btn-block loginBtn">
                  Login
                </NavLink>
              </div>
            </div>
            <div className="col-md-6 pt-4 box2">
              <img
                className="bubblekids"
                height="600"
                src={bubblekids}
                alt="bubbles"
              />
              <img
                className="kidsImage"
                height="400"
                src={kids}
                alt="illustration"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
