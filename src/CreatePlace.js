
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
//import Header from "./Header";
//import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";

function CreatePlace() {
  useEffect(() => {
    // if (localStorage.getItem("user-info")) {
    //   history.push("/add");
    // }
  });

  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [description, setDescription] = useState("");

  //utk redirection
  const history = useHistory();

  async function createPlace() {
    let item = { name, latitude, longitude, imagePath, description };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/v1/place", {
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
    localStorage.setItem("place", JSON.stringify(result));

    //redirect
    history.push("/");
  }

  return (
    
      
      <div className="col-sm-6 offset-sm-3">
        <h1>Create Place</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name"
        />
        <input
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="form-control"
          placeholder="latitude"
        />
        <br />
        <input
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="form-control"
          placeholder="longitude"
        />
        <br />
        <input
          type="text"
          value={imagePath}
          onChange={(e) => setImagePath(e.target.value)}
          className="form-control"
          placeholder="image path"
        />        
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="description"
        />
        <br />
        <Button onClick={createPlace} className="btn-primary">
          Sign-Up
        </Button>
      </div>
    
  );
}
export default CreatePlace;
