import React from 'react';
import Ring from './Ring';
import {
  COLOR_CODES,
  formatTimeLeft,
  setRemainingPathColor,
  setCircleDasharray,
  TIME_LIMIT
} from './utils';

const App = () => {
  const [timeRemaining, setTimeRemaining] = React.useState(
    formatTimeLeft(TIME_LIMIT)
  );
  const [strokeDasharray, setStrokeDasharray] = React.useState(283);
  const [pathColor, setPathColor] = React.useState(COLOR_CODES.info.color);

  React.useEffect(() => {
    let timerInterval;
    const startTimer = () => {
      // Initially, no time has passed, but this will count up
      // and subtract from the TIME_LIMIT
      let timePassed = 0;
      let timeLeft = TIME_LIMIT;
      timerInterval = setInterval(() => {
        // The amount of time passed increments by one
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;

        // The time left label is updated
        setTimeRemaining(formatTimeLeft(timeLeft));
        setStrokeDasharray(setCircleDasharray(timeLeft));
        setPathColor(setRemainingPathColor(timeLeft));
        if (timeLeft === 0) {
          clearInterval(timerInterval);
        }
      }, 1000);
    };
    startTimer();
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className="base-timer">
      <Ring remainingPathColor={pathColor} strokeDasharray={strokeDasharray} />
      <span className="base-timer__label">{timeRemaining}</span>
    </div>
  );
};

export default App;
