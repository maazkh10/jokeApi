import React, { useEffect, useState } from 'react';
import './api.css';

function APi() {
  const [joke, setJoke] = useState('');
  const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    fetch(url)
      .then(data => data.json())
      .then(item => {
        setJoke(item.joke);
      })
      .catch(error => {
        console.log("Error fetching joke", error);
      });
  };

  const handleGetJokeClick = () => {
    setTimeout(getJoke,); // Introduce a delay before making the next request
  };

  return (
    <>
      <div className='wrapper'>
        <span>&#128514;</span>
        <p id='joke'>{joke}</p>
        <button id='btn' onClick={handleGetJokeClick}>Get Random Joke</button>
      </div>
    </>
  );
}

export default APi;
