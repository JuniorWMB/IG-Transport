import React from "react";

import "../App.css";

import Carousel from "./Carousel";

function SousHeader() {
  return (
    <div>
      <div className="header__sousHeader">
        <div className="sousHeader__text">
          <h4>Votre spécialiste du transport</h4>
          <h3>
            Déménagement pour particuliers, solutions logistiques pour les
            professionels et vente de carton et fourniture de déménagement.
          </h3>
          <button className="sousHeader__button">
            <p>Vente de carton </p>
            {/* <ArrowForwardIosIcon size="medium" /> */}
          </button>
        </div>
        <div className="sousHeader__carouselpric">{/* <Carousel /> */}</div>
      </div>
    </div>
  );
}

export default SousHeader;
