import React, { Component } from 'react';
import axios from 'axios';

class SchoolsList extends Component {

  // this file will be converted into redux later.
  state = {
    schools: [
      {
        id: 1,
        name: 'Ben',
        age: 30,
        email: 'ben@lambdaschool.com'
      },
      {
        id: 2,
        name: 'Austen',
        age: 45,
        email: 'austen@lambdaschool.com'
      },
      {
        id: 3,
        name: 'Ryan',
        age: 15,
        email: 'ryan@lambdaschool.com'
      },
      {
        id: 4,
        name: 'Dustin',
        age: 25,
        email: 'D-munny@lambdaschool.com'
      },
      {
        id: 5,
        name: 'Sean',
        age: 35,
        email: 'sean@lambdaschool.com'
      },
      {
        id: 6,
        name: 'Michelle',
        age: 67,
        email: 'michelle@gmail.com'
      }
    ]
  };

  componentDidMount() {
    // axios
    // .get("http://localhost:5000/api/schools", {
    //   headers: { Authorization: localStorage.getItem("token") }
    // })
    // .then(res => {
    //   // console.log(res);
      
    //   this.setState({ schools: res.data });
    //   // dispatch(getFriendsSuccess(res.data))
    // })
  }

  render() {
    return (      
        <div>
          <h2>Select a school</h2>
          <ul>
            {/* {this.props.schools.length > 0  && (
            )} */}
          
            {this.state.schools.map(friend => <li>{friend.name}</li> )}
  
          </ul>
        </div>
      )
    }

}

export default SchoolsList;
