import React from "react";
import axios from "axios";

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

    axios
    .post("http://localhost:5000/api/login", this.state.credentials)
    .then(res => {
      console.log(res.data.payload);
      
      localStorage.setItem("token", res.data.payload);
      // dispatch({ type: LOGIN_SUCCESS });
    })
    .then(() => this.props.history.push("/schools"))
    .catch(err => {
      console.log("login err: ", err);
      if (err.response && err.response.status === 403) {
        localStorage.removeItem("token");
      }
      // dispatch({ type: LOGIN_FAILURE });
    });

  }

  render() {
    
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            Log in
          </button>
        </form>
      </div>
    )
  }
}


export default Login;
