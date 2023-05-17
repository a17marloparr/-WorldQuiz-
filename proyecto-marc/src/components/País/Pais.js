import React, { useState, useEffect } from "react";
import { useFetchCountries } from "../../hooks/useFetchCountries";

import './Pais.css';

export default function Pais() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);


  const { paises } = useFetchCountries();
  const [paisSelected, setPaisSelected] = useState();
  const [arrayPaises, setArrayPaises] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const questions = ["What is the capital of this country?", "What languages are spoken in this country?",
    "What is the approximate size of the country?", "Approximate population of the country?",
    "On which continent is this country located?"]
  const [questionNum, setQuestionNum] = useState(0);


  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };


  function busquedaPais() {
    for (let i = 4; i > 0; i--) {
      arrayPaises.push(paises[Math.floor(Math.random() * paises.length)]);
    }

    startAndStop()
    setPaisSelected(arrayPaises[Math.floor(Math.random() * arrayPaises.length)]);
  }

  function correctAnswer(text) {
    if (answerSelected(paisSelected) === text) {
      setAnswer(1)
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setAnswer(2)
    }

    setQuestionNum(questionNum + 1)
    setArrayPaises(arrayPaises.sort(() => Math.random() - 0.5))
  }

  function answerSelected(country) {
    if (questionNum === 0) {
      return country.capital
    } else if (questionNum === 1) {
      return country.languages
    } else if (questionNum === 2) {
      return numberFormat(country.area) + " km2"
    } else if (questionNum === 3) {
      return numberFormat(country.population)
    } else if (questionNum === 4) {
      return country.continents
    }
  }

  useEffect(() => {
    if (questionNum === 5) {
      startAndStop()
    }
  }, [questionNum === 5])

  const numberFormat = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp, rep);
  }

  return (
    <div>
      {arrayPaises.length !== 4 ? <div className="divPlayButton"><button onClick={busquedaPais} className="playButton">PLAY</button></div> : <div></div>}
      {paisSelected === undefined ? <div></div> :
        <div className="cardBodyPlay">
          <div className="namePlay">{paisSelected["common"]}</div>
          <div><img src={paisSelected["flags"]} className="playImg"></img></div>
          {questionNum === 5 ? <div></div> :
            <><div className="questionPlay">{questions[questionNum]}</div><div className="optionsPlay">
              <div className={answer === 1 ? "succes" : "default" && answer === 2 ? "failure" : "default"} onClick={() => correctAnswer(answerSelected(arrayPaises[0]))}>{answerSelected(arrayPaises[0])}</div>
              <div className={answer === 1 ? "succes" : "default" && answer === 2 ? "failure" : "default"} onClick={() => correctAnswer(answerSelected(arrayPaises[1]))}>{answerSelected(arrayPaises[1])}</div>
              <div className={answer === 1 ? "succes" : "default" && answer === 2 ? "failure" : "default"} onClick={() => correctAnswer(answerSelected(arrayPaises[2]))}>{answerSelected(arrayPaises[2])}</div>
              <div className={answer === 1 ? "succes" : "default" && answer === 2 ? "failure" : "default"} onClick={() => correctAnswer(answerSelected(arrayPaises[3]))}>{answerSelected(arrayPaises[3])}</div>
            </div></>
          }
          <div className="correctAnswers">Correct Answers: {correctAnswers}</div>
          <div className="crono">{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</div>
          {isRunning ? <div></div> : <div className="correctAnswers"><br/>Score: {Math.round((correctAnswers * 1000) / ((minutes * 60) + seconds))}</div>}
        </div>
      }
    </div>
  );
}