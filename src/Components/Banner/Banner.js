import React,{useEffect, useState} from 'react'
import { imageUrl } from '../../constants/constants';
import axios from '../../axios'
import "./Banner.css"
const n=Math.floor(Math.random() * (20 - 1)) + 1;

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get('/trending/movie/day?language=en-US').then((response) => {
      setMovie(response.data.results[n])
    }
    )
    
  }, []);
  return (
    <div 
      style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path :""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}


export default Banner