import React, { useEffect, useState } from "react";
import "../App.css"; // Import CSS file

const TriviaApp = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch("https://the-trivia-api.com/v2/questions");
      const data = await response.json();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  const handleOptionClick = (questionIndex, selectedOption, isCorrect) => {
    if (isCorrect) {
      setSelectedOptions(prevState => {
        const updatedSelectedOptions = [...prevState];
        updatedSelectedOptions[questionIndex] = 'correct';
        return updatedSelectedOptions;
      });
    }
  };

  return (
    <>
      <h1>Trivia App</h1>
      {questions && questions.map((question, index) => (
        <div key={index}>
          <p>{question.question.text}</p>
          <div>
            {question.incorrectAnswers.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleOptionClick(index, option, false)}
                className={`button`}
              >
                {option}
              </button>
            ))}
            <button
              onClick={() => handleOptionClick(index, question.correctAnswer, true)}
              className={`button ${selectedOptions[index] === 'correct' ? 'correct' : ''}`}
            >
              {question.correctAnswer}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TriviaApp;
