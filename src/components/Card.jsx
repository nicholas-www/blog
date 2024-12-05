import React, { useContext, useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import GameContext, { GameContextProvider } from "../context/GameContext";

const Card = ({ card, id, handleCardClick, isflipped, isMatched }) => {
  const [flipped, setFlipped] = useState(isflipped);
  const [cardId, setCardId] = useState(card.uuid);

  return (
    <>
      {
        isMatched ? <div className="matched"></div> :
        <div
          className={`card ${isflipped ? "back-show" : "front-show"}`}
          onClick={() => {
            handleCardClick(card.uuid);
          }}
        >
          {isflipped ? (
            <div className={`card-back`}>
              <img src={card.img} alt="" />
            </div>
          ) : (
            <div className={`card-front`}>
              <FontAwesomeIcon className="card-icon" icon={faEye} />
            </div>
          )}
        </div>
      }
    </>
  );
};

export default Card;
