// MovieDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from './data';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <di> Film non trouvé </di> ;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe
          width="560"
          height="315"
          src={movie.trailerLink}
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Retour à l'Accueil </Link>
    </div>
  );
};

export default MovieDetail;
