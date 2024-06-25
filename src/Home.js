// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from './data';

const Home = () => {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
