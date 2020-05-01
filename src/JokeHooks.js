import React, { useState, useEffect } from "react";
import "./Joke.css";

function JokeHooks({vote, votes, id, text}){


 
  return(
    <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={()=>(vote(id, +1))}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={()=>(vote(id, -1))}>
            <i className="fas fa-thumbs-down" />
          </button>
          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
  )

}

export default JokeHooks