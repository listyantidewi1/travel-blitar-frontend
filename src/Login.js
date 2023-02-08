//import Header from "./Header";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  });

  async function login() {
    console.warn(username, password);
    let item = { username, password };
    let result = await fetch("http://localhost:8000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    //history.push("/add");
  }

  return (
    <div>
      <h1>Login</h1>
      <br />
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <Button onClick={login} className="btn btn-primary">
          Login
        </Button>
      </div>
    </div>
  );
}
export default Login;
