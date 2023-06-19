import React from "react";
import "./MoviesCard.css";

function MoviesCard({ card, isSavedMovies }) {
    const movieSaveButton = `${card.isSaved ? "movies-card__save-button movies-card__save-button_active" : "movies-card__save-button"
        }`;

    return (
        <li className="movies-card">
            <div className="movies-card__container">
                <div className="movies-card__info">
                    {isSavedMovies ? (
                        <h2 className="movies-card__name movies-card__name_saved">{card.nameRu}</h2>
                    ) : (
                        <h2 className="movies-card__name">{card.nameRu}</h2>
                    )}


                    <span className="movies-card__duration">{card.duration}</span>
                </div>
                <img className="movies-card__image" alt={card.nameRu} src={card.image} />
                {isSavedMovies ? (
                    <button className="movies-card__delete-button"></button>
                ) : (
                    <button className={movieSaveButton}>Сохранить</button>
                )}
            </div>
        </li>
    );
}

export default MoviesCard;
