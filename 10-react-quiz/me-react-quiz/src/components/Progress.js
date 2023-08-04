import React from "react";

const Progress = ({ index, questionLength, points, maxPoint, answer }) => {
  return (
    <header className='progress'>
      <progress max={questionLength} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / <strong>{questionLength}</strong>
      </p>
      <p>
        Point <strong>{points}</strong> / <strong>{maxPoint}</strong>
      </p>
      <p></p>
    </header>
  );
};

export default Progress;
