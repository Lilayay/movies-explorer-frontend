import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onFilter, isShortFilm }) {
  return (
    <form className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        onChange={onFilter}
        checked={isShortFilm} 
      ></input>
      <span className="checkbox__text">Короткометражки</span>
    </form>
  );
}

export default FilterCheckbox;
