import React, { useState } from "react";
const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const previousBtnHandler = () => {
    if (step > 1) setStep(step - 1);
  };
  const NextBtnHandler = () => {
    if (step < messages.length) setStep(step + 1);
  };
  const closeBtnHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className='close' onClick={closeBtnHandler}>
        &times;
      </button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className='message'>
            step{step}: {messages[step - 1]}
          </p>

          <div className='buttons'>
            <button className='btn' onClick={previousBtnHandler}>
              Previous
            </button>
            <button className='btn' onClick={NextBtnHandler}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
