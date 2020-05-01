import React, { Component } from "react";
import JokeList from "./JokeList";
import JokeListHooks from "./JokeListHooks";


/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <JokeList /> */}
        <JokeListHooks />
      </div>
    );
  }
}

export default App;
