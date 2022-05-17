import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="login">
      <div className="login__header">
        <Link to={"/home"}>
          <FlutterDashIcon className="login__twitterIcon" />
        </Link>
        <h1> Welcome to Warbler</h1>
      </div>
      <div className="login__container">
        <h3>Sign-In</h3>
        <form>
          <h5>Email</h5>
          <input
            
            type="email"
            placeholder="Enter username"
          ></input>

          <h5>Password</h5>
          <input
            
            type="password"
            placeholder="Enter username"
          ></input>

          <button type="submit" className="login__signinButton">
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to the Warbler Terms of Conduct and Privacy.
        </p>
        <button type="submit" className="login__signupButton">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
