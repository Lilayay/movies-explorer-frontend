import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__links">
        <a
          href="https://github.com/Lilayay/how-to-learn"
          className="portfolio__link portfolio__link_underlined"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__type">Статичный сайт</p>
          <span className="portfolio__image">↗</span>
        </a>
        <a
          href="https://github.com/Lilayay/russian-travel"
          className="portfolio__link portfolio__link_underlined"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__type ">Адаптивный сайт</p>
          <span className="portfolio__image">↗</span>
        </a>
        <a
          href="https://github.com/Lilayay/react-mesto-api-full-gha"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__type">Одностраничное приложение</p>
          <span className="portfolio__image">↗</span>
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
