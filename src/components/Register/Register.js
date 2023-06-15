import React from "react";
import "../AuthorizationForm/AuthorizationForm.css";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";

function Register() {
    return (
        <AuthorizationForm
            title="Добро пожаловать!"
            button="Зарегистрироваться"
            question="Уже зарегистрированы?"
            text=" Войти"
            link="/signin"
        >
            <label className="authorization__label">
                Имя
                <input
                    name="name"
                    className="authorization__input"
                    id="name-input"
                    type="text"
                    minLength="2"
                    maxLength="30"
                    required
                />
                <span className="authorization__input-error">
                    Что-то пошло не так...
                </span>
            </label>
            <label className="authorization__label">
                E-mail
                <input
                    name="email"
                    className="authorization__input"
                    id="email-input"
                    type="text"
                    required
                />
                <span className="authorization__input-error">
                    Что-то пошло не так...
                </span>
            </label>
            <label className="authorization__label">
                Пароль
                <input
                    className="authorization__input"
                    name="password"
                    id="password-input"
                    type="password"
                />
                <span className="authorization__input-error">
                    Что-то пошло не так...
                </span>
            </label>
        </AuthorizationForm>
    );
}

export default Register;
