import React, { useState } from "react";

const MathematicsPyqs = () => {
  const questions = [
    {
      id: 1,
      subject: "Mathematics",
      question: "What is the integral of cos(x) with respect to x?",
      options: ["sin(x) + C", "-cos(x) + C", "-sin(x) + C", "tan(x) + C"],
      answer: "sin(x) + C",
    },
    {
      id: 2,
      subject: "Mathematics",
      question: "If the determinant of a matrix is 0, what type of matrix is it?",
      options: ["Singular", "Invertible", "Diagonal", "Orthogonal"],
      answer: "Singular",
    },
    {
      id: 3,
      subject: "Mathematics",
      question: "Find the value of the derivative of x^2 at x = 3.",
      options: ["6", "3", "9", "1"],
      answer: "6",
    },
    {
      id: 4,
      subject: "Mathematics",
      question: "What is the solution to the equation x^2 - 4 = 0?",
      options: ["2", "-2", "±2", "4"],
      answer: "±2",
    },
    {
      id: 5,
      subject: "Mathematics",
      question: "What is the value of sin(90°)?",
      options: ["1", "0", "-1", "0.5"],
      answer: "1",
    },
    {
      id: 6,
      subject: "Mathematics",
      question: "What is the sum of the first 10 natural numbers?",
      options: ["55", "45", "65", "50"],
      answer: "55",
    },
    {
      id: 7,
      subject: "Mathematics",
      question: "What is the value of log(1)?",
      options: ["1", "0", "-1", "10"],
      answer: "0",
    },
    {
      id: 8,
      subject: "Mathematics",
      question: "What is the value of tan(45°)?",
      options: ["1", "0", "∞", "-1"],
      answer: "1",
    },
    {
      id: 9,
      subject: "Mathematics",
      question: "What is the value of the factorial of 5 (5!)?",
      options: ["120", "60", "20", "25"],
      answer: "120",
    },
    {
      id: 10,
      subject: "Mathematics",
      question: "What is the distance between the points (1, 2) and (4, 6)?",
      options: ["5", "√25", "6", "√20"],
      answer: "5",
    },
    {
      id: 11,
      subject: "Mathematics",
      question: "What is the formula for the area of a circle?",
      options: ["πr^2", "2πr", "πr", "r^2"],
      answer: "πr^2",
    },
  ];

  // State to track the selected answer
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerSelect = (questionIndex, option) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = option; // Update selected answer
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Integral Calculus and Sequences</h2>
      <p style={{ lineHeight: "1.6", fontSize: "1rem", marginBottom: "30px" }}>
        This section focuses on the concepts of integral calculus and sequences. Understanding how to integrate functions and analyze sequences is crucial for solving many mathematical problems related to rates of change, area, and other applications in physics and engineering.
      </p>
      {questions.map((q, questionIndex) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <h4 style={{ fontSize: "1rem" }}>{q.question}</h4>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            {q.options.map((option, index) => (
              <li key={index} style={{ fontSize: "0.9rem", margin: "5px 0" }}>
                <span
                  onClick={() => handleAnswerSelect(questionIndex, option)}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: selectedAnswers[questionIndex] === option ? "#007bff" : "#f8f9fa",
                    color: selectedAnswers[questionIndex] === option ? "#fff" : "#000",
                    display: "inline-block",
                    width: "80%", // Set button width to 80%
                    textAlign: "left", // Align text to the start
                    border: "1px solid #ccc",
                  }}
                >
                  {option}
                </span>
              </li>
            ))}
          </ul>
          {selectedAnswers[questionIndex] && (
            <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>
              <strong>Correct Answer:</strong> {selectedAnswers[questionIndex] === q.answer ? q.answer : "Incorrect, the correct answer is " + q.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MathematicsPyqs;
