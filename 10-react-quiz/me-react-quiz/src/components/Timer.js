import React, { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  const minute = Math.floor(secondsRemaining / 60);
  const second = secondsRemaining % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
  return (
    <div className='timer'>
      {minute < 10 && "0"}
      {minute}:{second < 10 && "0"}
      {second}
    </div>
  );
};

export default Timer;
