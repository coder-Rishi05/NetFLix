import React from "react";
import MovieList from "../pages/MovieList";
import Movies_Data from "../lib/data/mockdata.json";

const Movies = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 py-10 lg:px-20 px-16   ">
      <h3 className="text-2xl text-white font-bold my-8 ">Trending Now</h3>
      {Movies_Data.results.length > 0 ? (
        <MovieList movies={Movies_Data.results} />
      ) : (
        <div>No movies are found</div>
      )}
    </div>
  );
};

export default Movies;
