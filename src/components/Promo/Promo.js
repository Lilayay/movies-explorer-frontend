import React from "react";
import "./Promo.css";
import landingLogo from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="promo" id="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <img className="promo__image" src={landingLogo} alt="Шрифтовой декор" />
    </section>
  );
}

export default Promo;
