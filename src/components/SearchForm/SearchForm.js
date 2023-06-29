import React, { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

import { useLocation } from "react-router-dom";

function SearchForm({ onSearchMovies, onFilter, isShortFilm }) {
    const location = useLocation();
    const [isSearchError, setIsSearchError] = useState(false);
    const [keyword, setKeyword] = useState("");

    function handleChangeKeyword(e) {
        setKeyword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (keyword.trim().length === 0) {
            setIsSearchError(true);
        } else {
            setIsSearchError(false);
            onSearchMovies(keyword);
        }
    }

    useEffect(() => {
        if (
            location.pathname === "/movies" &&
            localStorage.getItem("movieSearch")
        ) {
            const localkeyword = localStorage.getItem("movieSearch");
            setKeyword(localkeyword);
        }
    }, [location]);

    return (
        <section className="search">
            <form className="search__form" id="form" onSubmit={handleSubmit}>
                <div className="search__label" htmlFor="search-label"></div>
                <input
                    name="keyword"
                    className="search__input"
                    id="search-input"
                    type="text"
                    placeholder="Фильм"
                    onChange={handleChangeKeyword}
                    value={keyword || ""}
                ></input>
                <button className="search__button" type="submit"></button>
            </form>
            <FilterCheckbox onFilter={onFilter} isShortFilm={isShortFilm} />
            {isSearchError && (
                <span className="search__form-error">Нужно ввести ключевое слово</span>
            )}
        </section>
    );
}

export default SearchForm;
