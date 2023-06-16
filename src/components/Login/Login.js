import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import "../AuthorizationForm/AuthorizationForm.css";

function Login() {
    return (
        <AuthorizationForm
            title="Рады видеть!"
            button="Войти"
            question="Ещё не зарегистрированы?"
            text=" Регистрация"
            link="/signup"
        >
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
                    name="password"
                    className="authorization__input"
                    id="password-input"
                    type="password"
                    required
                />
                <span className="authorization__input-error">
                    Что-то пошло не так...
                </span>
            </label>
        </AuthorizationForm>
    );
}

export default Login;
