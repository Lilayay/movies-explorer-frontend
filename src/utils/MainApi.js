import { statusCheck } from "./utils";

export const BASE_URL =
    "https://api.moviexplorer.lilayay.nomoredomains.monster";

export const signup = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    }).then((res) => statusCheck(res));
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => statusCheck(res));
};

export const getContext = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
    }).then((res) => statusCheck(res));
};

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
    }).then((res) => statusCheck(res));
};

export const changeUserInfo = (data) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
        }),
    }).then((res) => statusCheck(res));
};

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
    }).then((res) => statusCheck(res));
};

export const postMovie = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameEN: movie.nameEN,
            nameRU: movie.nameRU,
        }),
    }).then((res) => statusCheck(res));
};

export const deleteMovie = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
    }).then((res) => statusCheck(res));
};
