import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { sortMovies, sortByDuration } from "../../utils/utils";

function SavedMovies({ isLoggedIn, savedMovies, handleDeleteMovie }) {
    const [sortedMovies, setSortedMovies] = useState(savedMovies);
    const [isShortFilm, setIsShortFilm] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isNotFound, setIsNotFound] = useState(false);

    function onSearchMovies(keyword) {
        setSearchKeyword(keyword);
    }

    function handleShortFilms() {
        setIsShortFilm(!isShortFilm);
    }

    useEffect(() => {
        const moviesList = sortMovies(savedMovies, searchKeyword);
        setSortedMovies(isShortFilm ? sortByDuration(moviesList) : moviesList);
    }, [savedMovies, isShortFilm, searchKeyword]);

    useEffect(() => {
        if (sortedMovies.length === 0) {
            setIsNotFound(true);
        } else {
            setIsNotFound(false);
        }
    }, [sortedMovies]);

    return (
        <section className="movies">
            <Header isLoggedIn={isLoggedIn} />
            <SearchForm onSearchMovies={onSearchMovies} onFilter={handleShortFilms} />
            <MoviesCardList
                cards={sortedMovies}
                isSavedMovies={true}
                isNotFound={isNotFound}
                savedMovies={savedMovies}
                handleDeleteMovie={handleDeleteMovie}
            />
            <Footer />
        </section>
    );
}

export default SavedMovies;
