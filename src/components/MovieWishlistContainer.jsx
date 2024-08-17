/* eslint-disable no-constant-binary-expression */
import axios from "axios";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";
import AddToWishlist from "./AddToWishlist";
import MovieWishlist from "./MovieWishlist";

const API_URL = "https://www.omdbapi.com/?apikey=348755fb&type=movie&t=";

const MovieWishlistContainer = () => {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [wishlist, setWishlist] = useState([]);

  // Function to search the movie
  const searchMovie = async (movieTitle) => {
    try {
      // set isLoading to true
      const response = await axios.get(API_URL + movieTitle);
      // if response.data set isLoading to false
      setSearchedMovie(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to add movies to wishlist
  const addMovieToWishlist = (movie) => {
    setWishlist([...wishlist, movie]);
  };
  // Function to remove from wishlist
  const removeMovieFromWishlist = (movieId) => {
    const updatedWishlist = wishlist.filter((item) => item.imdbID != movieId);

    setWishlist(updatedWishlist);
  };

  // useEffect(()=>{}, [dependency array])

  useEffect(() => {
    searchMovie("Iron");
  }, []);

  return (
    <>
      {/* Search Bar */}
      <SearchBar searchMovie={searchMovie} />
      {/* Conditional Rendering */}
      {/* {2===3 ? <p>I am the truth</p> : <p>I am the false</p>} */}
      {2 === 3 && <p>I am the truth 1</p>}
      {2 !== 3 && <p>I am the truth 2</p>}

      {/* Search Result */}
      <Stack direction="horizontal" gap={4} className="my-4">
        <MovieCard movie={searchedMovie} />

        <AddToWishlist
          movie={searchedMovie}
          addMovieToWishlist={addMovieToWishlist}
          wishlist={wishlist}
        />
      </Stack>
      {/* Add to wishlist */}

      {/* wishlist section */}

      <MovieWishlist
        wishlist={wishlist}
        removeMovieFromWishlist={removeMovieFromWishlist}
      />
    </>
  );
};

export default MovieWishlistContainer;
