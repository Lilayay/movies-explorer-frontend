import React from "react";
import "../AuthorizationForm/AuthorizationForm.css";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";

import useAuthorizationForm from "../../hooks/useAuthorizationForm";
function Register({ onRegister, isLoading, message }) {
  const { formValue, errors, handleChange, isValid } = useAuthorizationForm();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
    });
  }

  return (
    <>
      <AuthorizationForm
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        question="Уже зарегистрированы?"
        text=" Войти"
        link="/signin"
        isLoading={isLoading}
        onSubmit={handleSubmit}
        isDisabled={!isValid}
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
            onChange={handleChange}
            value={formValue.name || ""}
            autoComplete="on"
            disabled={isLoading}
          />
          <span className="authorization__input-error">{errors.name}</span>
        </label>
        <label className="authorization__label">
          E-mail
          <input
            name="email"
            className="authorization__input"
            id="email-input"
            type="email"
            required
            onChange={handleChange}
            value={formValue.email || ""}
            autoComplete="on"
            disabled={isLoading}
          />
          <span className="authorization__input-error">{errors.email}</span>
        </label>
        <label className="authorization__label">
          Пароль
          <input
            className="authorization__input"
            name="password"
            id="password-input"
            type="password"
            required
            onChange={handleChange}
            value={formValue.password || ""}
            autoComplete="on"
            disabled={isLoading}
          />
          <span className="authorization__input-error">{errors.password}</span>
        </label>
        <span className="authorization__message">{message}</span>
      </AuthorizationForm>
    </>
  );
}

export default Register;
