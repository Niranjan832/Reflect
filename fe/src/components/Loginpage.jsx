import React, { Component } from "react";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    pageType: "login", // "login" or "signup"
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { pageType, username, password } = this.state;

    if (!username || !password) return alert("All fields are required");

    if (pageType === "login") {
      alert(`Logging in as ${username}`);
      this.props.onLogin({ username, password });
    } else {
      alert(`Registering new user: ${username}`);
      this.props.onLogin({ username, password });
    }

    this.setState({ username: "", password: "" });
  };

  togglePageType = () => {
    this.setState({
      pageType: this.state.pageType === "login" ? "signup" : "login",
      username: "",
      password: "",
    });
  };

  render() {
    const { pageType, username, password } = this.state;

    return (
      <div className="login-page">
        <div className="login-card">
          <h2>{pageType === "login" ? "Welcome Back" : "Create Account"}</h2>
          <p className="subtitle">
            {pageType === "login"
              ? "Log in to access your dashboard"
              : "Sign up to get started"}
          </p>
          <form onSubmit={this.handleSubmit}>
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
            <button type="submit">
              {pageType === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="toggle-text">
            {pageType === "login"
              ? "New to this platform?"
              : "Already have an account?"}{" "}
            <span className="toggle-link" onClick={this.togglePageType}>
              {pageType === "login" ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginPage;
