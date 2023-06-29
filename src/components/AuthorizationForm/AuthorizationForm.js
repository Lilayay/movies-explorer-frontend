import React from "react";
import { Link } from "react-router-dom";
import "./AuthorizationForm.css";
import logo from "../../images/logo.svg";

function Form({
    title,
    button,
    question,
    text,
    link,
    children,
    onSubmit,
    isDisabled,
    isLoading,
}) {
    return (
        <div className="authorization__container">
            <Link to="/" className="authorization__logo">
                <img src={logo} alt="Логотип" />
            </Link>
            <h3 className="authorization__title">{title}</h3>
            <form className="form" id="form" onSubmit={onSubmit} noValidate>
                {children}

                <button
                    type="submit"
                    disabled={isDisabled ? true : false}
                    className={
                        isDisabled || isLoading
                            ? "authorization__button authorization__button_inactive"
                            : "authorization__button"
                    }
                >
                    {button}
                </button>
            </form>
            <p className="authorization__text">
                {question}
                <Link to={link} className="authorization__link">
                    {text}
                </Link>
            </p>
        </div>
    );
}

export default Form;
