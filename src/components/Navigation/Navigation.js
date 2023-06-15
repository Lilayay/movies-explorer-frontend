import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import profile from "../../images/profile-icon.svg";

function Navigation({ handleClose }) {
    return (
        <div className="menu__overlay">
            <div onClick={handleClose} className="menu__container-hidden"></div>
            <div className="menu__container">
                <button className="menu__close-btn" onClick={handleClose}></button>
                <nav className="menu__content">
                    <Link to="/" onClick={handleClose} className="menu__link">
                        Главная
                    </Link>
                    <Link to="/movies" onClick={handleClose} className="menu__link">
                        Фильмы
                    </Link>
                    <Link to="/saved-movies" onClick={handleClose} className="menu__link">
                        Сохранённые фильмы
                    </Link>
                </nav>
                <Link to="/profile" className="menu__profile" onClick={handleClose}>
                    Аккаунт
                    <div className="menu__profile-logo-wrap">
                        <img
                            className="menu__profile-logo"
                            src={profile}
                            alt="Мой аккаунт"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;
