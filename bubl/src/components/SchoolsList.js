import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import {getSchools} from "../actions";
import axios from 'axios';

class SchoolsList extends Component {

  componentDidMount() {
    this.props.getSchools()
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
          {this.props.fetchingSchools && this.props.schools.length === 0 && <p>Loading...</p>}
          <ul>
            {/* {this.props.schools.length > 0  && (
            )} */}
          
            {this.props.schools.map(school => {
              return <li key={school.school_id}><Link to={`/schools/${school.school_id}`}>{school.schoolName}</Link></li> }
            )}          
  
          </ul>
        </div>
      )
    }

}

const mapStateToProps = state => {
  return { 
    schools: state.schools,
    fetchingSchools: state.fetchingSchools
  }
}

export default connect(mapStateToProps, {getSchools})(SchoolsList);