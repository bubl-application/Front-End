import React, {Component} from 'react';
import { connect } from "react-redux";
import { Label, Input, LoginButton, Form, Button } from "../StyledComponents";

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
           [e.target.name]: e.target.value
         }
       });
   }

   render() {
      return (
         <Form>
            <h2>Register</h2>
            <Label htmlFor="firstName">First Name:</Label>
            <Input name="firstName" value={this.state.newUser.firstName} onChange={this.handleChange} placeholder="First Name" />
            <Label htmlFor="lastName">Last Name:</Label>
            <Input name="lastName" value={this.state.newUser.lastName} onChange={this.handleChange} placeholder="Last Name" />
            <Label htmlFor="username">Username:</Label>
            <Input name="username" value={this.state.newUser.username} onChange={this.handleChange} placeholder="Username" />
            <Label htmlFor="password">Password:</Label>
            <Input name="password" value={this.state.newUser.password} onChange={this.handleChange} placeholder="Password" />
            <Label htmlFor="age">Age:</Label>
            <Input name="age" value={this.state.newUser.age} onChange={this.handleChange} placeholder="Age" />
            <Label htmlFor="school_id">School:</Label>
            <Input name="school_id" value={this.state.newUser.school_id} onChange={this.handleChange} placeholder="School" />
            <LoginButton>Register</LoginButton>
         </Form>
      )
   }
}

const mapStateToProps = state => {
   return {

   };
 };
 
 export default connect(mapStateToProps)(Register);