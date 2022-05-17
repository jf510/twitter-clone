import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";

function Login() {
  return (
    <div className="login">
      <div className="login__header">
        <Link to={"/home"}>
          <FlutterDashIcon className="login__twitterIcon" />
        </Link>
        <h2> Welcome to Warbler</h2>
      </div>
      <div className="login__form">
        <form>
          <h3>Enter Username</h3>
          <input type='text' placeholder='Enter username'></input>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
