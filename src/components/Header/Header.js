import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import logo from "../../images/logo.svg";
import profile from "../../images/profile-icon.svg";
import burger from "../../images/burger-menu.svg";

const isLoggedIn = true;

function Header() {
    const [isOpen, setisOpen] = useState(false);

    function handleOpen() {
        setisOpen(true);
    }

    function handleClose() {
        setisOpen(false);
    }

    return (
        <>
            {!isLoggedIn ? (
                <header className="header_unauthorized">
                    <Link to="/" className="authorization__logo">
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <div className="header__container">
                        <Link to="/signup" className="header__btn">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="header__btn header__btn-black">
                            Войти
                        </Link>
                    </div>
                </header>
            ) : (
                <header className="header">
                    <Link to="/" className="authorization__logo">
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <div className="header__container">
                        <div className="header__films">
                            <Link to="/movies" className="header__btn">
                                Фильмы
                            </Link>
                            <Link to="/saved-movies" className="header__btn">
                                Сохранённые фильмы
                            </Link>
                        </div>
                        <Link to="/profile" className="header__profile">
                            Аккаунт
                            <div className="header__profile-logo-wrap"><img className="header__profile-logo" src={profile} alt="Мой аккаунт" /></div>
                        </Link>
                        <button className="header__menu-btn" onClick={handleOpen} >
                            <img src={burger} alt="Меню" />
                        </button>
                    </div>
                    {isOpen ? <Navigation handleClose={handleClose} /> : ""}
                </header>
            )}
        </>
    );
}

export default Header;
