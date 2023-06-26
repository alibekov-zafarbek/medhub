import { Radio, RadioGroup } from "@adobe/react-spectrum";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setAnswers] = useState([]);
  const [questions, setQuestion] = useState([
    {
      id: 1,
      question: "What is the capital city of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      selected: "",
    },
    {
      id: 2,
      question: "What is the capital city of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      selected: "",
    },
    {
      id: 3,
      question: "What is the capital city of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      selected: "",
    },
    {
      id: 4,
      question: "What is the highest mountain in the world?",
      options: [
        "Mount Everest",
        "Mount Kilimanjaro",
        "Mount Fuji",
        "Mount Rainier",
      ],
      answer: "Mount Everest",
      selected: "",
    },
    {
      id: 5,
      question: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro", "Pound"],
      answer: "Yen",
      selected: "",
    },
  ]);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 100px 50px;
  `;

  const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const QuestionHeader = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 32px;
  `;

  const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `;

  const Option = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 24px;
    &:hover {
      color: #1976d2;
    }
  `;

  const SubmitButton = styled.button`
    font-size: 24px;
    margin-top: 32px;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: #1976d2;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #1976d2;
      border: 1px solid #1976d2;
    }
  `;

  const handleChange = (e, id) => {
    // console.log(e, id);

    let question = questions.filter((item) => item.id === id)[0];
    setQuestion([...questions, { ...question, selected: e }]);

    
  };

 

  // const handleAnswer = (answer) => {
  //   if (answer === questions[currentQuestion].answer) {
  //     setScore(score + 1);
  //   }
  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     alert(`Your final score is ${score} out of ${questions.length}.`);
  //   }
  // };

  return (
    <>
      <Wrapper>
        {questions.map((item, index) => (
          <QuestionWrapper key={index}>
            <QuestionHeader>{item.question}</QuestionHeader>
            <OptionsWrapper>
              <RadioGroup
                label={item.question}
                onChange={(e) => handleChange(e, item.id)}
                value={
                  questions.filter((itemm) => itemm.id === item.id)[0].selected
                }
              >
                {}
                {item.options.map((option, indexx) => (
                  <Radio className="w-25 h-25" value={option}>
                    {option}
                  </Radio>
                  // <Option key={indexx}>
                  //   <input
                  //     type="radio"
                  //     id={`option${option}`}
                  //     name={`quiz${item.id}`}
                  //     value={option}

                  //   />
                  //   {option}
                  // </Option>
                ))}
              </RadioGroup>
            </OptionsWrapper>
          </QuestionWrapper>
        ))}
        <SubmitButton
        // onClick={() =>
        //   handleAnswer(
        //     document.querySelector('input[name="quiz"]:checked')?.value
        //   )
        // }
        >
          Submit
        </SubmitButton>
      </Wrapper>
    </>
  );
};

export default QuizApp;
