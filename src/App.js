import React from "react";
import NavBar from "./NavBar";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";


/** App component. Renders list of jokes. */

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}


export default App;
