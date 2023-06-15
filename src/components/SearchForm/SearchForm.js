import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search">
            <form className="search__form">
                <label className="search__label" htmlFor="search-label"></label>
                <input className="search__input" id="search-input" type="text" placeholder="Фильм"></input>
                <button className="search__btn"></button>
            </form>
            <FilterCheckbox />
        </section>
    );
}

export default SearchForm;