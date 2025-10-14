import React, { Component } from "react";

class LoginRegister extends Component {
  state = {
    pageType: "login", // "login" or "register"
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { pageType, username, password } = this.state;

    if (!username || !password) return alert("All fields are required");

    if (pageType === "login") {
      // Simulated login
      alert(`Logging in as ${username}`);
      this.props.onLogin({ username, password });
    } else {
      // Simulated register
      alert(`Registering new user: ${username}`);
      this.props.onLogin({ username, password });
    }

    // Reset form
    this.setState({ username: "", password: "" });
  };

  togglePageType = () => {
    this.setState({
      pageType: this.state.pageType === "login" ? "register" : "login",
      username: "",
      password: "",
    });
  };

  render() {
    const { pageType, username, password } = this.state;

    return (
      <div className="auth-container">
        <h2>{pageType === "login" ? "Login" : "Register"}</h2>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">{pageType === "login" ? "Login" : "Register"}</button>
        </form>

        <p className="toggle-text">
          {pageType === "login" ? "New user?" : "Already have an account?"}{" "}
          <span className="toggle-link" onClick={this.togglePageType}>
            {pageType === "login" ? "Register" : "Login"}
          </span>
        </p>
      </div>
    );
  }
}

export default LoginRegister;
