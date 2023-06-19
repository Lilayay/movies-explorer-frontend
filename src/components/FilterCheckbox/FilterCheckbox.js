import React from 'react';
import './FilterCheckbox.css';

function Checkbox()  {
    return (
      <form className="checkbox">
        <input className="checkbox__input" type="checkbox"></input>
        <span className="checkbox__text">Короткометражки</span>
      </form>
    );
  }
  
export default Checkbox;
