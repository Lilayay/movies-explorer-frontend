import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <section className="notfound">
            <h2 className="notfound__error">404</h2>
            <p className="notfound__text">Страница не найдена</p>
            <Link to="/" className="notfound__back">
                Назад
            </Link>
        </section>
    );
}

export default NotFound;
