import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Label, Input, LoginButton, Form } from "../StyledComponents";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = (e) => {
    e.preventDefault()

    this.props.login(this.state.credentials)
      .then(() => this.props.history.push("/schools"));
  }

  render() {
    
    return (
      <div>
        <Form onSubmit={this.handleLogin}>
          <h2>Login</h2>
          {this.props.loginError && <p>Error on login, try again</p>}
          <Label htmlFor="username">Enter Your Username:</Label>
          <Input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <Label htmlFor="password">Enter Your Password:</Label>
          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <LoginButton>
            Log in
          </LoginButton>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // isLoggingIn: state.isLoggingIn,
    loginError: state.loginError
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
