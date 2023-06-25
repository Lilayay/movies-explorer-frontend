import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <section className="not-found">
            <h2 className="not-found__error">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <Link to="/">
                <button className="not-found__back" type="button" aria-label="назад">
                    Назад
                </button>
            </Link>
        </section>
    );
}

export default NotFound;
