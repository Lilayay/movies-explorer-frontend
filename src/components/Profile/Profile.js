import React, { useEffect, useContext, useState } from "react";
import "./Profile.css";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import useAuthorizationForm from "../../hooks/useAuthorizationForm";
import Header from "../Header/Header";

function Profile({ isLoggedIn, isLoading, signOut, onChangeUser, message }) {
    const currentUser = useContext(CurrentUserContext);
    const { formValue, errors, isValid, handleChange, resetForm } =
        useAuthorizationForm();
    const [isPreviousValue, setIsPreviousValue] = useState(false);

    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [currentUser, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        onChangeUser({
            name: formValue.name,
            email: formValue.email,
        });
    }

    useEffect(() => {
        if (
            currentUser.name === formValue.name &&
            currentUser.email === formValue.email
        ) {
            setIsPreviousValue(true);
        } else {
            setIsPreviousValue(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValue]);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <section className="profile">
                <h3 className="profile__title">Привет, {currentUser.name}!</h3>
                <form
                    className="profile__info"
                    id="form"
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <label className="profile__label">
                        Имя
                        <input
                            className="profile__input"
                            name="name"
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
                        <span className="profile__input-error">{errors.name}</span>
                    </label>

                    <div className="profile__line"></div>

                    <label className="profile__label">
                        E&#8209;mail
                        <input
                            className="profile__input"
                            name="email"
                            id="email-input"
                            type="email"
                            required
                            onChange={handleChange}
                            value={formValue.email || ""}
                            autoComplete="on"
                            disabled={isLoading}
                        />
                        <span className="profile__input-error">{errors.email}</span>
                    </label>

                    <span className="profile__message">{message}</span>
                    <button
                        className={
                            !isValid || isLoading || isPreviousValue
                                ? "profile__button profile__button_inactive"
                                : "profile__button"
                        }
                        type="submit"
                        disabled={!isValid ? true : false}
                    >
                        Редактировать
                    </button>
                    <button className="profile__exit" type="button" onClick={signOut}>
                        Выйти из аккаунта
                    </button>
                </form>
            </section>
        </>
    );
}

export default Profile;
