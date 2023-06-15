import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList({ cards, isSavedMovies }) {
    const isLoading = false;

    return (
        <section className="cards">
            {isLoading ? (
                <Preloader />
            ) : (
                <>
                    <ul className="cards__list">
                        {cards.map((card) => (
                            <MoviesCard
                                key={card.movieId}
                                card={card}
                                isSavedMovies={isSavedMovies}
                            />
                        ))}
                    </ul>
                    <div className="cards__btn-container">
                        {isSavedMovies ? "" : <button className="cards__btn">Ещё</button>}
                    </div>
                </>
            )}
        </section>
    );
}

export default MoviesCardList;
