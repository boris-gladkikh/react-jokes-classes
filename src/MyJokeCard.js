import React, { useState, useEffect } from "react";
import "./Joke.css";

function MyJokeCard({joke, votes,  text, removeFromMyJokes }) {



  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={() => removeFromMyJokes(joke)} >
          <i className="far fa-frown" />
        </button>
 
        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  )

}

export default MyJokeCard