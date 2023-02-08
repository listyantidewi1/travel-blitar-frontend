import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
//import Header from "./Header";
//import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  });

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");

  //utk redirection
  const history = useHistory();

  async function signUp() {
    let item = { name, username, password, email, roles };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    });
    //eksekusi input data ke tabel user
    result = await result.json();

    //print response dari backend di console
    console.warn("result", result);
    //localStorage.setItem("user-info", JSON.stringify(result));

    //redirect
    history.push("/login");
  }

  return (
    
      
      <div className="col-sm-6 offset-sm-3">
        <h1>Register</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          placeholder="username"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
        />        
        <input
          type="text"
          value={roles}
          onChange={(e) => setRoles(e.target.value)}
          className="form-control"
          placeholder="role"
        />
        <br />
        <Button onClick={signUp} className="btn-primary">
          Sign-Up
        </Button>
      </div>
    
  );
}
export default Register;
