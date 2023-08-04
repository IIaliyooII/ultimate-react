import React from "react";

const FinishedScreen = ({ points, maxPoint, highscore }) => {
  const percentage = (points / maxPoint) * 100;
  return (
    <>
      <p className='result'>
        You scored <strong>{points}</strong> out of {maxPoint}({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
    </>
  );
};

export default FinishedScreen;
