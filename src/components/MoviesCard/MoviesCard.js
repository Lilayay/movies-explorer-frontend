import React from "react";
import "./MoviesCard.css";
import { durationConverter } from "../../utils/utils";

function MoviesCard({
    card,
    isSavedMovies,
    handleSaveMovie,
    handleDeleteMovie,
    saved,
    savedMovies
}) {
    function onSaveMovie() {
        if (saved) {
            handleDeleteMovie(savedMovies.filter((m) => m.movieId === card.id)[0]);
        } else {
            handleSaveMovie(card);
        }
    }

    function onDelete() {
        handleDeleteMovie(card);
    }

    const movieSaveButton = `${saved
        ? "movies-card__save-button movies-card__save-button_active"
        : "movies-card__save-button"
        }`;

    return (
        <li className="movies-card">
            <div className="movies-card__container">
                <div className="movies-card__info">
                    {isSavedMovies ? (
                        <h2 className="movies-card__name movies-card__name_saved">
                            {card.nameRU}
                        </h2>
                    ) : (
                        <h2 className="movies-card__name">{card.nameRU}</h2>
                    )}

                    <span className="movies-card__duration">{durationConverter(card.duration)}</span>
                </div>
                <a href={card.trailerLink} target="_blank" rel="noreferrer">
                    <img
                        className="movies-card__image"
                        alt={card.nameRU}
                        src={
                            isSavedMovies
                                ? card.image
                                : `https://api.nomoreparties.co/${card.image.url}`
                        }
                    />
                </a>

                {isSavedMovies ? (
                    <button className="movies-card__delete-button" onClick={onDelete}></button>
                ) : (
                    <button className={movieSaveButton} onClick={onSaveMovie}>Сохранить</button>
                )}
            </div>
        </li>
    );
}

export default MoviesCard;
