import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useParams, useNavigate} from 'react-router-dom'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTA1ZGRhNDhjNWViZjE2YWExZWMzMjdlNDJjYmZiYiIsIm5iZiI6MTc1NjA4NTU4NS41MjcsInN1YiI6IjY4YWJiZDUxNmZhN2JjM2FkYmE5YTM1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gBRshb9-rBTztd4Vz0SJjZq5gOph38CGM21RpWJTf4I'
    }
  };
  useEffect(
    () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        setApiData(res.results[0])
      })
      .catch(err => console.error(err));
    },
    []
  );



  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back arrow icon" onClick={() => navigate("/")}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player