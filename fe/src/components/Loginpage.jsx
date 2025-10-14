import React, { Component } from "react";

class LoginPage extends Component {
  state = {
    username: "",
  };

  handleChange = (e) => this.setState({ username: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username.trim()) return;
    this.props.onLogin({ username: this.state.username });
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h2>Login / Signup</h2>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginPage;
