import { SHORTFILM } from "./constants";

export const statusCheck = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

export function sortMovies(movies, keyword) {
    const moviesByKeyword = movies.filter((movie) => {
        const movieRu = String(movie.nameRU).toLowerCase().trim();
        const movieEn = String(movie.nameEN).toLowerCase().trim();
        const userKeyword = keyword.toLowerCase().trim();
        return (
            movieRu.indexOf(userKeyword) !== -1 || movieEn.indexOf(userKeyword) !== -1
        );
    });
    return moviesByKeyword;
}

export function sortByDuration(movies) {
    return movies.filter((movie) => movie.duration < SHORTFILM);
}

export function durationConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
}
