import React from 'react';
import './ErrorSearch.css';

function ErrorSearch({ errorText }) {
  return <p className="error__search">{errorText}</p>;
}

export default ErrorSearch;