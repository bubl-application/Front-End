import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {getSchools} from "../actions";

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
    const schoolDisplayed = [];

    return (      
        <div>
          <h2>Select a school</h2>
          {this.props.fetchingSchools && this.props.schools.length === 0 && <p>Loading...</p>}
          <ul>
            {this.props.schools.map(school => {
              if (!schoolDisplayed.includes(school.school_id)) {
                schoolDisplayed.push(school.school_id)
                return <li><Link to={`/schools/${school.school_id}`}>{school.schoolName}</Link></li>
              }
            })}          
  
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