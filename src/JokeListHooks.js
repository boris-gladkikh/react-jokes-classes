import React, { useState, useEffect } from "react";
import axios from "axios";
import JokeHooks from "./JokeHooks";
import "./JokeList.css";

function JokeListHooks({ numJokes = 5, addToMyJokes }) {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGettingJokes, setIsGettingJokes] = useState(true);


  /*once we change our jokes state, we make a request to API
    and update our jokes state with new jokes */
  useEffect(function fetchJokes() {
    async function getJokes() {
      try {
        // load jokes one at a time, adding not-yet-seen jokes
        let jokes = [];
        let seenJokes = new Set();

        while (jokes.length < numJokes) {
          let res = await axios.get("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" }
          });
          let { ...joke } = res.data;

          if (!seenJokes.has(joke.id)) {
            seenJokes.add(joke.id);
            jokes.push({ ...joke, votes: 0 });
          } else {
            console.log("duplicate found!");
          }
        }
        setJokes(jokes);
        setIsLoading(false)
      } catch (err) {
        console.error(err);
      }
    }

    if (isGettingJokes) {
      getJokes();
      setIsGettingJokes(false);
    }
  }, [isGettingJokes, numJokes]);

  async function handleClick() {
    setIsLoading(true);
    setIsGettingJokes(true);

  }

  /* change vote for this id by delta (+1 or -1) */


  function vote(id, delta) {
    setJokes((jokes) => (
      jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    ))


  }




  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>

    )
  }
  return (
    <div className="JokeList">
      <button
        className="JokeList-getmore"
        onClick={handleClick}
      >
        Get New Jokes
      </button>



      {jokes.sort((a, b) => b.votes - a.votes)
        .map(j => (
          <JokeHooks
            joke={j}
            text={j.joke}
            key={j.id}
            id={j.id}
            votes={j.votes}
            vote={vote}
            addToMyJokes={addToMyJokes}
          />
        ))}
    </div>
  );

}

export default JokeListHooks