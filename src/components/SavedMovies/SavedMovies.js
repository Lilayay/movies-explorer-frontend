import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import imageMovie from '../../images/movie.jpg';

const movies = [
    { movieId: 1, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: true },
    { movieId: 2, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: true },
    { movieId: 3, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: true },
];

function SavedMovies() {
    return (
        <section className="movies">
            <Header />
            <SearchForm />
            <MoviesCardList cards={movies} isSavedMovies={true} />
            <Footer />
        </section>
    );
}

export default SavedMovies;