import React from "react";
import "./MoviesCard.css";

function MoviesCard({ card, isSavedMovies }) {
    const movieSaveButton = `${card.isSaved ? "movies__save-button movies__save-button_active" : "movies__save-button"
        }`;

    return (
        <li className="movies-card">
            <div className="movies__container">
                <div className="movies__info">
                    {isSavedMovies ? (
                        <h2 className="movies__name movies__name_saved">{card.nameRu}</h2>
                    ) : (
                        <h2 className="movies__name">{card.nameRu}</h2>
                    )}


                    <span className="movies__duration">{card.duration}</span>
                </div>
                <img className="movies__image" alt={card.nameRu} src={card.image} />
                {isSavedMovies ? (
                    <button className="movies__delete-button"></button>
                ) : (
                    <button className={movieSaveButton}>Сохранить</button>
                )}
            </div>
        </li>
    );
}

export default MoviesCard;
