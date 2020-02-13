export const formatTimeLeft = time => {
  // The largest round integer less than or equal to the result of time divided being by 60.
  const minutes = Math.floor(time / 60);

  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;

  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // The output in MM:SS format
  return `${minutes}:${seconds}`;
};

// Start with an initial value of 20 seconds
export const TIME_LIMIT = 20;
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

export const COLOR_CODES = {
  info: {
    color: 'green'
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD
  }
};

// Divides time left by the defined time limit.
export const calculateTimeFraction = timeLeft => {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
};

// Update the dasharray value as time passes, starting with 283
export const setCircleDasharray = timeLeft => {
  const circleDasharray = `${(
    calculateTimeFraction(timeLeft) * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  return circleDasharray;
};

export const setRemainingPathColor = timeLeft => {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    return alert.color;
  } else if (timeLeft <= warning.threshold) {
    return warning.color;
  }
  return info.color;
};
