import React, { useEffect, useState } from "react";

const TriviaApp = () => {
  const [questions, setQuestions] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch();
      const data = await response.json();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  return (
    <>
      <h1>Trivia App</h1>
        {questions && questions.map((question, index) => (
          <p key={index}>{question.question.text}</p>
        ))}
    </>
  );
};

export default TriviaApp;
