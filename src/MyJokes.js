import React from "react";
import MyJokeCard from "./MyJokeCard";
import "./MyJokes.css"

function MyJokes ({myJokes, removeFromMyJokes}) {
  // let votes = window.localStorage.getItem('votes');




  return (
    <div >
      <h1> Favorite Jokes </h1>
      <ul>
      {myJokes.sort((a, b) => b.votes - a.votes)
        .map(j => (
          <li><MyJokeCard
            joke={j}
            text={j.joke}
            key={j.id}
            id={j.id}
            votes={j.votes}
            removeFromMyJokes={removeFromMyJokes}
          />
          </li>
        ))}
      </ul>
    </div>
  )

}

export default MyJokes