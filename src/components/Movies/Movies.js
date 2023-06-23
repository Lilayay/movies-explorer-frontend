import React, { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

import { sortMovies, sortByDuration } from "../../utils/utils";
import moviesApi from '../../utils/MoviesApi.js';

function Movies({
  isLoggedIn,
  savedMovies,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);

  //сортировка фильмов
  function handleFilterMovies(movies, keyword, isShortFilm) {
    const movieList = sortMovies(movies, keyword, isShortFilm);
    setInitialMovies(movieList);
    setSortedMovies(isShortFilm ? sortByDuration(movieList) : movieList);
    localStorage.setItem("allMovies", JSON.stringify(movies));
    localStorage.setItem("movies", JSON.stringify(movieList));
  }

  function handleShortFilm() {
    setIsShortFilm(!isShortFilm);
    if (!isShortFilm) {
      if (sortByDuration(initialMovies).length === 0) {
        setSortedMovies(sortByDuration(initialMovies));
      } else {
        setSortedMovies(sortByDuration(initialMovies));
      }
    } else {
      setSortedMovies(initialMovies);
    }
    localStorage.setItem("shortFilm", !isShortFilm);
  }

  //поиск
  function handleSearchMovies(keyword) {
    localStorage.setItem("movieSearch", keyword);
    localStorage.setItem("shortFilm", isShortFilm);
    if (localStorage.getItem("allMovies")) {
      const movies = JSON.parse(localStorage.getItem("allMovies"));
      handleFilterMovies(movies, keyword, isShortFilm);
    } else {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((movies) => {
          handleFilterMovies(movies, keyword, isShortFilm);
          setIsRequestError(false);
        })
        .catch((err) => {
          setIsRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem("shortFilm") === "true") {
      setIsShortFilm(true);
    } else {
      setIsShortFilm(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movies")) {
      const movies = JSON.parse(localStorage.getItem("movies"));
      setInitialMovies(movies);
      if (localStorage.getItem("shortFilm") === "true") {
        setSortedMovies(sortByDuration(movies));
      } else {
        setSortedMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("movieSearch")) {
      if (sortedMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [sortedMovies]);

  return (
    <section className="movies">
      <Header isLoggedIn={isLoggedIn} />
      <SearchForm
        onSearchMovies={handleSearchMovies}
        onFilter={handleShortFilm}
        isShortFilm={isShortFilm}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        cards={sortedMovies}
        isSavedMovies={false}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        isLoading={isLoading}
        isNotFound={isNotFound}
        isRequestError={isRequestError}
      />
      <Footer />
    </section>
  );
}

export default Movies;
