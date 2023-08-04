import React from "react";

const NextButton = ({ dispatch, answer, index, questonLength }) => {
  if (answer === null) return;
  if (index < questonLength - 1)
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: "nextQuestion" })}>
        Next
      </button>
    );
  if (index === questonLength - 1)
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
};

export default NextButton;
