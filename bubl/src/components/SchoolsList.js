import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';

class SchoolsList extends Component {

  // this file will be converted into redux later.
  state = {
    schools: []
  };

  componentDidMount() {
    axios
    .get("http://localhost:5000/api/schools", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      // console.log(res);
      
      this.setState({ schools: res.data });
      // dispatch(getFriendsSuccess(res.data))
    })
  }

  render() {
    return (
        <div>
          <ul>
            {/* {this.props.schools.length > 0  && (
            )} */}
          
            {this.state.schools.map(friend => {
              return <li><Link to={`/schools/${friend.id}`}>{friend.name}</Link></li> }
            )}          
  
          </ul>
        </div>
      )
    }

}

export default SchoolsList;
