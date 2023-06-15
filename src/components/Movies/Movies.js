import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import imageMovie from '../../images/movie.jpg';

const movies = [
  { movieId: 1, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: true },
  { movieId: 2, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: true },
  { movieId: 3, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: false },
  { movieId: 4, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: false },
  { movieId: 5, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: false },
  { movieId: 6, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: true },
  { movieId: 7, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: true },
  { movieId: 8, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: false },
  { movieId: 9, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: false },
  { movieId: 10, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: false },
  { movieId: 11, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: true },
  { movieId: 12, image: imageMovie, nameRu: 'В погоне за Бенкси', duration: '27 минут', isSaved: false },
];

function Movies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList cards={movies} isSavedMovies={false} />
      <Footer />
    </section>
  );
}

export default Movies;