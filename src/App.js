import logo from "./logo.svg";
import "./App.css";

import Register from "./Register";
import Login from "./Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
