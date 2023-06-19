import React from 'react';
import "./AboutMe.css";
import photo from "../../images/photo.jpg";

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <h2 className="about-me__title">Студентка</h2>
            <div className="about-me__container">
                <div className="about-me__text">
                    <h3 className="about-me__name">Лилия</h3>
                    <p className="about-me__job">Фронтенд-разработчица, 29 лет</p>
                    <p className="about-me__info">
                        Я живу в Бишкеке, закончила факультет архитектурного проектирования.
                        Люблю работать над интерьерами и ландшафтом. Недавно начала изучать
                        веб-разработку, которая нравится мне тем же, что и моя первая
                        специальность, - возможностью создавать интересные и удобные проекты под разные
                        запросы.
                    </p>
                    <a
                        className="about-me__link"
                        href="https://github.com/Lilayay?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
                <img className="about-me__photo" src={photo} alt="Фото автора" />
            </div>
        </section>
    );
}

export default AboutMe;
