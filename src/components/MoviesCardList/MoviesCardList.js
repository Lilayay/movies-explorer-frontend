import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import ErrorSearch from "../ErrorSearch/ErrorSearch";
import {
    DOWNLOAD_1280,
    DOWNLOAD_768,
    DOWNLOAD_320,
} from "../../utils/constants";

function MoviesCardList({
    cards,
    isLoading,
    isRequestError,
    isSavedMovies,
    handleSaveMovie,
    savedMovies,
    handleDeleteMovie,
    isNotFound,
}) {
    const [moviesDisplay, setMoviesDisplay] = useState(0);
    const { pathname } = useLocation();

    function displayedNumber() {
        const display = window.innerWidth;
        if (display > 1080) {
            setMoviesDisplay(12);
        } else if (display > 620) {
            setMoviesDisplay(8);
        } else if (display < 620) {
            setMoviesDisplay(5);
        }
    }

    useEffect(() => {
        displayedNumber();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("resize", displayedNumber);
        }, 1000);
    });

    function showMore() {
        const display = window.innerWidth;
        if (display > 1080) {
            setMoviesDisplay(moviesDisplay + DOWNLOAD_1280);
        } else if (display > 620) {
            setMoviesDisplay(moviesDisplay + DOWNLOAD_768);
        } else if (display < 620) {
            setMoviesDisplay(moviesDisplay + DOWNLOAD_320);
        }
    }

    function getSavedMovieCard(savedMovies, card) {
        return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
    }

    return (
        <section className="cards">
            {isLoading && <Preloader />}
            {isNotFound && !isLoading && (
                <ErrorSearch errorText={"Ничего не найдено"} />
            )}
            {isRequestError && !isLoading && (
                <ErrorSearch
                    errorText={
                        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
                    }
                />
            )}
            {!isLoading && !isRequestError && !isNotFound && (
                <>
                    {pathname === "/saved-movies" ? (
                        <>
                            <ul className="cards__list">
                                {cards.map((card) => (
                                    <MoviesCard
                                        key={card._id || card.id}
                                        saved={getSavedMovieCard(savedMovies, card)}
                                        cards={cards}
                                        card={card}
                                        isSavedMovies={isSavedMovies}
                                        handleSaveMovie={handleSaveMovie}
                                        handleDeleteMovie={handleDeleteMovie}
                                        savedMovies={savedMovies}
                                    />
                                ))}
                            </ul>
                            <div className="cards__button-container"></div>
                        </>
                    ) : (
                        <>
                            <ul className="cards__list">
                                {cards.slice(0, moviesDisplay).map((card) => (
                                    <MoviesCard
                                        key={card._id || card.id}
                                        saved={getSavedMovieCard(savedMovies, card)}
                                        card={card}
                                        isSavedMovies={isSavedMovies}
                                        handleSaveMovie={handleSaveMovie}
                                        handleDeleteMovie={handleDeleteMovie}
                                        savedMovies={savedMovies}
                                    />
                                ))}
                            </ul>
                            <div className="cards__button-container">
                                {cards.length > moviesDisplay ? (
                                    <button className="cards__button" onClick={showMore}>
                                        Ещё
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        </>
                    )}
                </>
            )}
        </section>
    );
}

export default MoviesCardList;
