import React from "react";

const StartScreen = ({ questionsLentgh, dispatch }) => {
  return (
    <div className='start'>
      <h2>Welcome to the react quiz!</h2>
      <h3>{questionsLentgh} question to test your react mastery</h3>
      <button className='btn btn-ui' onClick={() => dispatch({ type: "start" })}>
        let's start
      </button>
    </div>
  );
};

export default StartScreen;
