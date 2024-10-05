import React, { useState } from "react";

const PhysicsPyqs = () => {
  const questions = [
    {
      id: 1,
      subject: "Physics",
      question: "A car of mass m moves in a circular track of radius R with speed v. What is the centripetal force acting on the car?",
      options: ["mv/R", "mv^2/R", "mv^2/2R", "m/R"],
      answer: "mv^2/R",
    },
    {
      id: 2,
      subject: "Physics",
      question: "What is the work done by the force F in moving an object a distance d in the direction of the force?",
      options: ["F + d", "F - d", "F/d", "F * d"],
      answer: "F * d",
    },
    {
      id: 3,
      subject: "Physics",
      question: "What is the escape velocity of an object from the Earth?",
      options: ["11.2 km/s", "9.8 m/s²", "15 km/s", "22.5 km/s"],
      answer: "11.2 km/s",
    },
    {
      id: 4,
      subject: "Physics",
      question: "What is the acceleration of a body moving with uniform velocity?",
      options: ["0", "9.8 m/s²", "v^2/r", "F/m"],
      answer: "0",
    },
    {
      id: 5,
      subject: "Physics",
      question: "What is the unit of electrical resistance?",
      options: ["Ohm", "Coulomb", "Volt", "Watt"],
      answer: "Ohm",
    },
    {
      id: 6,
      subject: "Physics",
      question: "Which of the following is a scalar quantity?",
      options: ["Velocity", "Acceleration", "Force", "Speed"],
      answer: "Speed",
    },
    {
      id: 7,
      subject: "Physics",
      question: "The frequency of a wave is 50 Hz. What is its time period?",
      options: ["0.02 s", "0.2 s", "2 s", "50 s"],
      answer: "0.02 s",
    },
    {
      id: 8,
      subject: "Physics",
      question: "What is the dimensional formula for power?",
      options: ["ML^2T^(-3)", "MLT^(-2)", "ML^2T^(-2)", "MLT^(-1)"],
      answer: "ML^2T^(-3)",
    },
    {
      id: 9,
      subject: "Physics",
      question: "The unit of electric current is:",
      options: ["Volt", "Coulomb", "Ampere", "Ohm"],
      answer: "Ampere",
    },
    {
      id: 10,
      subject: "Physics",
      question: "What is the gravitational potential energy of a mass m at a height h?",
      options: ["mgh", "1/2 mgh", "2mgh", "m/h"],
      answer: "mgh",
    },
    {
      id: 11,
      subject: "Physics",
      question: "What is the S.I. unit of work?",
      options: ["Joule", "Newton", "Watt", "Erg"],
      answer: "Joule",
    },
  ];

  // State to track selected answers
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerSelect = (questionIndex, selectedOption) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = selectedOption; // Update selected answer
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Laws of Motion</h2>
      <p style={{ lineHeight: "1.6", fontSize: "1rem", marginBottom: "30px" }}>
        This article will go through Sir Isaac Newton's Laws of Motion, which revolutionized our understanding of the physical world centuries ago. This article explores Newton's three laws and provides a deep understanding of their implications...
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
                    width: "85%", // Set button width to 85%
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

export default PhysicsPyqs;
