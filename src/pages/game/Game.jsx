import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Timer from "../../components/timer/Timer";
import ConfettiExplosion from "react-confetti-explosion";
import Card from "../../components/Card";

import "./Game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftRotate,
  faArrowsAltH,
  faDoorOpen,
  faHomeAlt,
  faPause,
  faStar,
  faVolumeHigh,
  faVolumeMute,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import bgSoundPath from "../../assets/assets/bg-music.wav";
import clickSoundPath from "../../assets/assets/click.wav";
import sparkleSoundPath from "../../assets/assets/sparkle.mp3";
import cheerSoundPath from "../../assets/assets/cheer.wav";
import sadSoundPath from "../../assets/assets/sad.wav";

import apple from "../../assets/assets/apple.png";
import watermelon from "../../assets/assets/watermelon.png";
import banana from "../../assets/assets/banana.png";
import orange from "../../assets/assets/orange.png";
import grape from "../../assets/assets/grape.jpg";
import mango from "../../assets/assets/mango.png";
import pear from "../../assets/assets/pear.jpeg";
import strawberry from "../../assets/assets/strawberry.jpeg";
import pineapple from "../../assets/assets/pineapple.png";
import mulberry from "../../assets/assets/mulberry.jpeg";
import carrot from "../../assets/assets/carrot.png";
import tomato from "../../assets/assets/tomato.png";
import pawpaw from "../../assets/assets/pawpaw.png";
import mango2 from "../../assets/assets/mango-2.jpeg";
import dog from "../../assets/assets/dog.jpeg";

const Game = () => {
  const time = 180;

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [timeLeft, setTimeLeft] = useState(time);
  const [ready, setReady] = useState(false);
  const [pause, setPause] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(true);
  const [moves, setMoves] = useState(80);

  const bgSound = useRef(null);
  const clickSound = useRef(null);
  const sparkleSound = useRef(null);
  const cheerSound = useRef(null);
  const sadSound = useRef(null);
  const flipSound = useRef(null);

  const [gameEnded, setGameEnded] = useState({ ended: false, status: 1 }); // 0 -> Game Over, 1 -> Game Completed

  const [cards, setCards] = useState([
    {
      id: 0,
      img: apple,
    },
    {
      id: 1,
      img: watermelon,
      indexOne: undefined,
      indexTwo: undefined,
    },
    {
      id: 2,
      img: banana,
      indexOne: undefined,
      indexTwo: undefined,
    },
    {
      id: 3,
      img: orange,
      indexOne: undefined,
      indexTwo: undefined,
    },
    {
      id: 4,
      img: grape,
      indexOne: undefined,
      indexTwo: undefined,
    },
    {
      id: 5,
      img: mango,
      indexOne: undefined,
      indexTwo: undefined,
    },
    {
      id: 6,
      img: pear,
      indexOne: undefined,
      indexTwo: undefined,
    },
    {
      id: 7,
      img: strawberry,
      indexOne: undefined,
      indexTwo: undefined,
    },
    {
      id: 8,
      img: pawpaw,
    },
    {
      id: 9,
      img: tomato,
    },
    {
      id: 10,
      img: pineapple,
    },
    {
      id: 11,
      img: dog,
    },
    {
      id: 12,
      img: mango2,
    },
    {
      id: 13,
      img: mulberry,
    },
    {
      id: 14,
      img: carrot,
    },
  ]);

  // This function is executed when a card is clicked
  function handleCardClick(id) {
    soundPlaying && clickSound.current.play();

    if (moves === 0) {
      return;
    }

    if (timeLeft === 0) {
      return;
    }

    setMoves(moves - 1); //Move is valid; descrease no. of moves

    // Snippet to flip selected card
    if (flippedCards.includes(id)) {
      setFlippedCards([]);
    } else {
      setFlippedCards((prev) => [...prev, id]);
    }
  }

  // Amount of time left is monitored by this useEffect
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeout(() => {
        setGameEnded({ ended: true, status: 0 });
        sadSound.current.play();
      }, 1000);
    }
  }, [timeLeft]);

  // Number of moves is monitored by this useEffect
  useEffect(() => {
    if (moves === 0 && matchedCards.length === cards.length) {
      setTimeout(() => {
        setGameEnded({ ended: true, status: 1 });
        sadSound.current.play();
      }, 1000);
    } else if (moves === 0 && matchedCards.length !== cards.length) {
      setTimeout(() => {
        setGameEnded({ ended: true, status: 0 });
        sadSound.current.play();
      }, 1000);
    }
  }, [moves]);

  // Total number of matched cards is monitored by this useEffect
  useEffect(() => {
    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        setGameEnded({ ended: true, status: 1 });
        cheerSound.current.play();
      }, 1000);
    }
  }, [matchedCards]);

  // This useEffect handles the matching of selected cards
  useEffect(() => {
    // if (matchedCards.length === cards.length) {
    //   return;
    // }

    if (flippedCards.length === 2) {
      let [card1, card2] = flippedCards;

      for (const card of cards) {
        if (card.uuid === flippedCards[0]) {
          card1 = card.id;
        }

        if (card.uuid === flippedCards[1]) {
          card2 = card.id;
        }
      }

      if (card1 === card2) {
        sparkleSound.current.play();
        setTimeout(() => {
          setMatchedCards([...matchedCards, ...flippedCards]);
          setFlippedCards([]);
        }, 1000);
      } else {
        setTimeout(() => {
          // TODO: play audio for unmatching cards
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  // Cards are generated and shuffled in this useEffect
  useEffect(() => {
    const tempArr = [];

    for (const card of cards) {
      tempArr.push({ ...card, uuid: uuidv4() }, { ...card, uuid: uuidv4() }); // This snippet generates random IDs for cards
    }

    // This snippet shuffles the tempArr array, generated by Gemini AI
    for (let i = tempArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }

    setCards([...tempArr]);
  }, []);

  return (
    <>
      {/* Background Audio */}
      <audio ref={bgSound} loop autoPlay>
        <source src={bgSoundPath} type="audio/wav" />
      </audio>

      {/* Click Audio */}
      <audio ref={clickSound}>
        <source src={clickSoundPath} type="audio/wav" />
      </audio>

      {/* Sparkle Audio */}
      <audio ref={sparkleSound}>
        <source src={sparkleSoundPath} type="audio/mp3" />
      </audio>

      {/* Cheer Audio */}
      <audio ref={cheerSound}>
        <source src={cheerSoundPath} type="audio/wav" />
      </audio>

      {/* Sad voices audio */}
      <audio ref={sadSound}>
        <source src={sadSoundPath} type="audio/wav" />
      </audio>

      {!gameEnded.ended ? (
        <div className="container game">
          {!ready && (
            <div className="info overlay">
              <h1>Ready?</h1>
              <button
                className="btn-primary btn"
                onClick={() => {
                  setReady(true);
                  bgSound.current.play();
                }}
              >
                let's go
              </button>
            </div>
          )}

          {pause && (
            <div className="pause overlay">
              <h1>Game Paused</h1>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setPause(false);
                }}
              >
                resume <FontAwesomeIcon className="icon" icon={faArrowLeft} />
              </button>

              <a className="btn btn-primary" href="/game">
                restart{" "}
                <FontAwesomeIcon className="icon" icon={faArrowLeftRotate} />
              </a>

              <button
                className="btn btn-primary"
                onClick={() => {
                  if (soundPlaying) {
                    bgSound.current.pause();
                    setSoundPlaying(false);
                  } else {
                    bgSound.current.play();
                    setSoundPlaying(true);
                  }
                }}
              >
                sound{" "}
                {soundPlaying ? (
                  <FontAwesomeIcon className="icon" icon={faVolumeMute} />
                ) : (
                  <FontAwesomeIcon className="icon" icon={faVolumeHigh} />
                )}
              </button>
              <a className="btn" href="/">
                exit <FontAwesomeIcon className="icon" icon={faDoorOpen} />
              </a>
            </div>
          )}

          {ready && (
            <header>
              <div
                className="pause"
                onClick={() => {
                  setPause(true);
                }}
              >
                <FontAwesomeIcon icon={faPause} />
              </div>
              <div className="moves">
                <FontAwesomeIcon className="icon" icon={faArrowsAltH} />
                <h3>{moves}</h3>
              </div>

              <div className="timer">
                <Timer
                  setTimeLeft={setTimeLeft}
                  duration={time}
                  timeLeft={timeLeft}
                  pause={pause}
                />
              </div>
            </header>
          )}
          <main>
            {ready &&
              cards.map((card, index) => (
                <Card
                  card={card}
                  id={uuidv4()}
                  key={`${card.img + index}`}
                  isflipped={flippedCards.includes(card.uuid)}
                  isMatched={matchedCards.includes(card.uuid)}
                  handleCardClick={handleCardClick}
                />
              ))}
          </main>
        </div>
      ) : (
        <div className="container game-ended">
          {gameEnded.status === 1 && (
            <ConfettiExplosion particleCount={400} force={5} duration={5000} />
          )}
          <h1>{gameEnded.status ? "Well Done!" : "Game Over!"}</h1>
          <div className="stars">
            <FontAwesomeIcon
              icon={faStar}
              className={`star ${gameEnded.status ? "filled" : "unfilled"}`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`star ${gameEnded.status ? "filled" : "unfilled"}`}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={`star ${gameEnded.status ? "filled" : "unfilled"}`}
            />
          </div>

          <div className="buttons">
            <a href="/game" className="btn btn-primary">
              play again{" "}
              <FontAwesomeIcon icon={faArrowLeftRotate} className="icon" />
            </a>
            <a href="/" className="btn">
              main menu <FontAwesomeIcon icon={faHomeAlt} className="icon" />{" "}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Game;
