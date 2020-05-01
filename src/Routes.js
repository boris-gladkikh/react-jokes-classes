import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import JokeListHooks from "./JokeListHooks";
import MyJokes from "./MyJokes";


function Routes() {
  const [myJokes, setMyJokes]  = useState([]);

    //adds a joke to "my jokes" list which is then displayed under "my jokes"
    function addToMyJokes(joke) {
      setMyJokes((myJokes) => (
        [...myJokes, joke]
      ));
      console.log("these are my jokes", myJokes)
  
    }

    function removeFromMyJokes(joke){
      setMyJokes((myJokes)=>(
        myJokes.filter(j => j.id !== joke.id)
      ))
    }

  return (
    <div>
      <Switch>
        <Route exact path="/jokelist" >
          <JokeListHooks myJokes={myJokes} setMyJokes={setMyJokes} addToMyJokes={addToMyJokes} />
        </Route>
        <Route exact path="/">
          <MyJokes myJokes={myJokes} setMyJokes={setMyJokes} removeFromMyJokes={removeFromMyJokes} />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes



