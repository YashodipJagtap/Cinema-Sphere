import React from 'react';
import { useNavigate } from 'react-router-dom';

const Movie = ({ image, youtubeLink }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (youtubeLink) {
      window.open(youtubeLink, '_blank'); // Opens the YouTube link in a new tab
    } else {
      navigate('/movie-details'); // Example navigation if no YouTube link is provided
    }
  };

  return (
    <div onClick={handleClick} className="card w-[200px] h-[300px] rounded-lg cursor-pointer">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={image}
        alt="Movie Poster"
      />
    </div>
  );
};

export default Movie;
