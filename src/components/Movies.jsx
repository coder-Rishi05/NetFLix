import React from "react";
import MovieList from "../pages/MovieList";

const moviesData = [
  {
    id: 1,
    title: "Extraction 2",
    year: 2023,
    genre: ["Action", "Thriller"],
    rating: 7.1,
    duration: "2h 3m",
    description:
      "After barely surviving his previous mission, Tyler Rake returns as an Australian black ops mercenary to rescue a ruthless gangster’s imprisoned family.",
    cast: ["Chris Hemsworth", "Golshifteh Farahani", "Adam Bessa"],
    image: "https://image.tmdb.org/t/p/w500/Extraction2Poster.jpg",
    banner: "https://image.tmdb.org/t/p/original/Extraction2Banner.jpg",
    trailer: "https://www.youtube.com/watch?v=mO0OuR26IZM",
    category: "Trending Now",
  },
  {
    id: 2,
    title: "The Gray Man",
    year: 2022,
    genre: ["Action", "Spy", "Thriller"],
    rating: 6.7,
    duration: "2h 2m",
    description:
      "When a shadowy CIA agent uncovers agency secrets, a sociopathic operative is sent to hunt him down across the globe.",
    cast: ["Ryan Gosling", "Chris Evans", "Ana de Armas"],
    image: "https://image.tmdb.org/t/p/w500/TheGrayManPoster.jpg",
    banner: "https://image.tmdb.org/t/p/original/TheGrayManBanner.jpg",
    trailer: "https://www.youtube.com/watch?v=BmllggGO4pM",
    category: "Trending Now",
  },
  {
    id: 3,
    title: "Money Heist: Korea",
    year: 2022,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 7.0,
    duration: "1 Season",
    description:
      "Thieves take over the mint of a unified Korea, with hostages inside and police outside. Will the Professor’s plan succeed?",
    cast: ["Yoo Ji-tae", "Jeon Jong-seo", "Park Hae-soo"],
    image: "https://image.tmdb.org/t/p/w500/MoneyHeistKoreaPoster.jpg",
    banner: "https://image.tmdb.org/t/p/original/MoneyHeistKoreaBanner.jpg",
    trailer: "https://www.youtube.com/watch?v=U_z9g7WGNxg",
    category: "Trending Now",
  },
  {
    id: 4,
    title: "Wednesday",
    year: 2022,
    genre: ["Mystery", "Fantasy", "Comedy"],
    rating: 8.1,
    duration: "1 Season",
    description:
      "Smart, sarcastic and slightly dead inside, Wednesday Addams investigates a murder spree while navigating relationships at Nevermore Academy.",
    cast: ["Jenna Ortega", "Emma Myers", "Catherine Zeta-Jones"],
    image: "https://image.tmdb.org/t/p/w500/WednesdayPoster.jpg",
    banner: "https://image.tmdb.org/t/p/original/WednesdayBanner.jpg",
    trailer: "https://www.youtube.com/watch?v=Di310WS8zLk",
    category: "Trending Now",
  },
  {
    id: 5,
    title: "Damsel",
    year: 2024,
    genre: ["Fantasy", "Adventure", "Drama"],
    rating: 7.4,
    duration: "1h 50m",
    description:
      "A young woman agrees to marry a handsome prince, only to discover that she is to be sacrificed to a dragon.",
    cast: ["Millie Bobby Brown", "Nick Robinson", "Angela Bassett"],
    image: "https://image.tmdb.org/t/p/w500/DamselPoster.jpg",
    banner: "https://image.tmdb.org/t/p/original/DamselBanner.jpg",
    trailer: "https://www.youtube.com/watch?v=jzYxbnHHhY4",
    category: "Trending Now",
  },
];

const Movies = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 py-10 px-20 ">
      <h3 className="text-2xl text-white font-bold ">Trending Now</h3>
      {moviesData.length > 0 ? (
        <MovieList  movies={moviesData} />
      ) : (
        <div>No movies are found</div>
      )}
    </div>
  );
};

export default Movies;
