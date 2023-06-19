import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <section className="not-found">
            <h2 className="not-found__error">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <Link to="/" className="not-found__back">
                Назад
            </Link>
        </section>
    );
}

export default NotFound;
