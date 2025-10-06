import React from "react";

function MovieList({ movies }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl outline-blue-200 p-0 border-0 w-[7rem] h-[9.8rem] rounded-sm   ">
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title}
          <img src={movie.image} alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-10"
          />
        </li>
      ))}
    </div>
  );
}

export default MovieList;
