// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

import "./Timer.css";

export const Timer = ({ initialMinutes, initialSeconds }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };
  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };
  const handleDigitClick = (digit) => {
    if (minutes === 0 && seconds === 0) {
      setSeconds(seconds + digit);
    } else if (seconds < 10) {
      setSeconds(seconds * 10 + digit);
    } else if (minutes < 10) {
      setMinutes(minutes * 10 + digit);
    }
  };

  const clearLastDigit = () => {
    if (minutes > 0) {
      setMinutes(Math.floor(minutes / 10));
    } else if (seconds > 0) {
      setSeconds(Math.floor(seconds / 10));
    }
  };
  return (
    <div>
      <div className="timer">
        <h1>
          {String(minutes).padStart(2, "0")}
          <span>:</span>
          {String(seconds).padStart(2, "0")}
        </h1>
      </div>

      <div className="controls">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>reset</button>
      </div>

      <div className="numpad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
          <button key={digit} onClick={() => handleDigitClick(digit)}>
            {digit}
          </button>
        ))}
        <button onClick={clearLastDigit}>Clear</button>
      </div>
    </div>
  );
};

Timer.propTypes = {
  initialMinutes: PropTypes.number.isRequired,
  initialSeconds: PropTypes.number.isRequired,
};
