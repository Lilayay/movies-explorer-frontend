import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <section className="profile">
            <h3 className="profile__title">Привет, Виталий!</h3>
            <form className="profile__info">
                <label className="profile__label" htmlFor="name-input">
                    Имя
                    <input
                        className="profile__input"
                        name="name"
                        id="name-input"
                        type="text"
                        minLength="2"
                        maxLength="30"
                        required
                    />
                </label>

                <div className="profile__line"></div>

                <label className="profile__label">
                    E&#8209;mail
                    <input
                        className="profile__input"
                        name="email"
                        id="email-input"
                        type="text"
                        required
                    />
                </label>
                <button className="profile__btn-change" type="submit">
                    Редактировать
                </button>
                <button className="profile__exit">Выйти из аккаунта</button>
            </form>
        </section>
    );
}

export default Profile;
