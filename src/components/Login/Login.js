import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import "../AuthorizationForm/AuthorizationForm.css";

import useAuthorizationForm from "../../hooks/useAuthorizationForm";

function Login({ onLogin, isLoading, message }) {
    const { formValue, errors, isValid, handleChange } = useAuthorizationForm();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin({
            email: formValue.email,
            password: formValue.password,
        });
    }

    return (
        <AuthorizationForm
            title="Рады видеть!"
            button="Войти"
            question="Ещё не зарегистрированы?"
            text=" Регистрация"
            link="/signup"
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isDisabled={!isValid}
        >
            <label className="authorization__label">
                E-mail
                <input
                    name="email"
                    className="authorization__input"
                    id="email-input"
                    type="email"
                    required
                    value={formValue.email || ""}
                    onChange={handleChange}
                    autoComplete="on"
                    disabled={isLoading}
                />
                <span className="authorization__input-error authorization__input-error_active">
                    {errors.email}
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
                    value={formValue.password || ""}
                    onChange={handleChange}
                    autoComplete="on"
                    disabled={isLoading}
                />
                <span className="authorization__input-error authorization__input-error_active">
                    {errors.password}
                </span>
            </label>

            <span className="authorization__message">{message}</span>
        </AuthorizationForm>
    );
}

export default Login;
