import React from "react";
import "./MoviesCard.css";

function MoviesCard({ card, isSavedMovies }) {
    const movieSaveBtn = `${card.isSaved ? "movies__save-btn_active" : "movies__save-btn"
        }`;

    return (
        <li className="movies-card">
            <div className="movies__container">
                <div className="movies__info">
                    <h2 className="movies__name">{card.nameRu}</h2>
                    <span className="movies__duration">{card.duration}</span>
                </div>
                <img className="movies__image" alt={card.nameRu} src={card.image} />
                {isSavedMovies ? (
                    <button className="movies__delete-btn"></button>
                ) : (
                    <button className={movieSaveBtn}>Сохранить</button>
                )}
            </div>
        </li>
    );
}

export default MoviesCard;
