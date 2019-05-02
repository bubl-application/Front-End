import React, {Component} from 'react';
import { connect } from "react-redux";
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
           [e.target.name]: e.target.value
         }
       });

      console.log(this.state);
   }

   render() {
      return (
         <Form>
            <h2>Register</h2>
            <Input name="username" value={this.state.newUser.username} onChange={this.handleChange} placeholder="Username" />
            <Input name="password" value={this.state.newUser.password} onChange={this.handleChange} placeholder="Password" />
            <Input name="firstName" value={this.state.newUser.firstName} onChange={this.handleChange} placeholder="First Name" />
            <Input name="lastName" value={this.state.newUser.lastName} onChange={this.handleChange} placeholder="Last Name" />
            <Input name="age" value={this.state.newUser.age} onChange={this.handleChange} placeholder="Age" />
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