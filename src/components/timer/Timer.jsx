import React, { useEffect, useState } from "react";

const Timer = ({ setTimeLeft, duration, pause, timeLeft }) => {
  const [count, setCount] = useState(timeLeft);

  useEffect(() => {
      if (pause) {
        return
      } else 

      if (timeLeft > 0) {
        const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
      }

  }, [timeLeft, pause]);

  return <>{timeLeft}s</>;
};

export default Timer;
