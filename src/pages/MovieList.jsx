import React, { useRef } from "react";

function MovieList({ movies }) {
  const baseImgUrl = "https://image.tmdb.org/t/p/w500"; // or /original for HD
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group mb-8">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2  -translate-y-1/2 z-10 hidden group-hover:block bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
      >
        &#8249;
      </button>

      {/* Movie Row */}
      <div
        ref={rowRef}
        className="flex overflow-x-scroll  gap-8 scrollbar-hide space-x-4 p-2 scroll-smooth"
      >
        {movies.map((movie, index) => (
          <li
            className="list-none relative min-w-[150px]  sm:min-w-[200px]"
            key={movie.id}
          >
            <h2 className="text-black z-20 text-8xl font-extrabold font-sans  number-outline  absolute bottom-10 -left-5  mb-2">
              {index + 1}
            </h2>
            <img
              src={`${baseImgUrl}${movie.poster_path || movie.backdrop_path}`}
              alt={movie.title}
              className="w-full  h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </li>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden group-hover:block bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
}

export default MovieList;
