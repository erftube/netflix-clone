import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'

import {Link} from 'react-router-dom'

const TitleCard = ({category = "now_playing", title = "Popular On Netflix"}) => {
  
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += 3*event.deltaY;
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTA1ZGRhNDhjNWViZjE2YWExZWMzMjdlNDJjYmZiYiIsIm5iZiI6MTc1NjA4NTU4NS41MjcsInN1YiI6IjY4YWJiZDUxNmZhN2JjM2FkYmE5YTM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gBRshb9-rBTztd4Vz0SJjZq5gOph38CGM21RpWJTf4I'
    }
  };



  useEffect(
    () => {
      fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
      cardsRef.current.addEventListener("wheel", handleWheel);
    },
    []
  );

  return (
    <div className='titlecards'>
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map(
          (data, index) => {
            return <Link to={`/player/${data.id}`} className="card" key={index}>
              <img src={"https://image.tmdb.org/t/p/w500"+data.backdrop_path} alt={data.original_title} />
              <p>{data.original_title}</p>
            </Link>
          }
        )}
      </div>
    </div>
  )
}

export default TitleCard