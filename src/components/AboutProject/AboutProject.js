import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
        <section className="about-project">
            <div className="about-project__container">
                <h2 className="about-project__title">О проекте</h2>
                <div className="about-project__info">
                    <div className="about-project__text">
                        <h3 className="about-project__subtitle">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="about-project__details">
                            Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="about-project__text">
                        <h3 className="about-project__subtitle">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="about-project__details">
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                            соблюдать, чтобы успешно защититься.
                        </p>
                    </div>
                </div>
                <div className="about-project__timeline">
                    <h3 className="about-project__timeline-duration about-project__timeline-duration_black">
                        1&nbsp;неделя
                    </h3>
                    <h3 className="about-project__timeline-duration"> 4&nbsp;недели</h3>
                    <p className="about-project__timeline-name">Back-end</p>
                    <p className="about-project__timeline-name">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
