import React, {Component} from 'react';
import { connect } from "react-redux";
import { register } from "../actions";
import { Input, LoginButton, Form, Button } from "../StyledComponents";

class Register extends Component {
   state = {
      newUser: {
         username: "",
         password: "",
         firstName: "",
         lastName: "",
         age: "",
         school_id: ""
      }
   }

   handleChange = e => {
      e.preventDefault();

      this.setState({
         newUser: {
           ...this.state.newUser,
           [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
         }
       });
   }

   handleSubmit = e => {
    e.preventDefault()
    
      this.props.register(this.state.newUser)
      .then(res => (res === false) ? null : this.props.history.push("/login")      
      );
   }

   render() {
      return (
         <Form onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            {this.props.registerError && <p>Error on sign up, try again</p>}
            <label for="firstName">First Name:</label>
            <Input name="firstName" value={this.state.newUser.firstName} onChange={this.handleChange} placeholder="First Name" />
            <label for="lastName">Last Name:</label>
            <Input name="lastName" value={this.state.newUser.lastName} onChange={this.handleChange} placeholder="Last Name" />
            <label for="username">Username:</label>
            <Input name="username" value={this.state.newUser.username} onChange={this.handleChange} placeholder="Username" />
            <label for="password">Password:</label>
            <Input name="password" type='password' value={this.state.newUser.password} onChange={this.handleChange} placeholder="Password" />
            <label for="age">Age:</label>
            <Input name="age" type='number' value={this.state.newUser.age} onChange={this.handleChange} placeholder="Age" />
            <label for="school_id">School:</label>
            <Input name="school_id" type='number' value={this.state.newUser.school_id} onChange={this.handleChange} placeholder="School" />
            <LoginButton>Register</LoginButton>
         </Form>
      )
   }
}

const mapStateToProps = state => {
   return {
    registerError: state.registerError
   };
 };
 
 export default connect(mapStateToProps, {register})(Register);