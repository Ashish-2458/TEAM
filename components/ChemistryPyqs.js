import React, { useState } from "react";

const ChemistryPyqs = () => {
  const questions = [
    {
      id: 1,
      subject: "Chemistry",
      question: "Which of the following elements has the highest electronegativity?",
      options: ["Sodium", "Chlorine", "Fluorine", "Oxygen"],
      answer: "Fluorine",
    },
    {
      id: 2,
      subject: "Chemistry",
      question: "What is the hybridization of carbon in methane (CH4)?",
      options: ["sp", "sp2", "sp3", "sp3d"],
      answer: "sp3",
    },
    {
      id: 3,
      subject: "Chemistry",
      question: "Which of the following is a Lewis acid?",
      options: ["NH3", "H2O", "BF3", "CH4"],
      answer: "BF3",
    },
    {
      id: 4,
      subject: "Chemistry",
      question: "What is the oxidation state of oxygen in H2O2?",
      options: ["-1", "-2", "+1", "0"],
      answer: "-1",
    },
    {
      id: 5,
      subject: "Chemistry",
      question: "Which gas is evolved during the reaction of an acid with a metal carbonate?",
      options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"],
      answer: "Carbon dioxide",
    },
    {
      id: 6,
      subject: "Chemistry",
      question: "What is the pH of a neutral solution at 25°C?",
      options: ["0", "7", "14", "10"],
      answer: "7",
    },
    {
      id: 7,
      subject: "Chemistry",
      question: "Which type of bond is present in NaCl?",
      options: ["Covalent", "Ionic", "Hydrogen", "Metallic"],
      answer: "Ionic",
    },
    {
      id: 8,
      subject: "Chemistry",
      question: "What is the chemical formula of baking soda?",
      options: ["Na2CO3", "NaHCO3", "NaCl", "NaOH"],
      answer: "NaHCO3",
    },
    {
      id: 9,
      subject: "Chemistry",
      question: "Which element is the most abundant in the Earth's crust?",
      options: ["Iron", "Aluminum", "Oxygen", "Silicon"],
      answer: "Oxygen",
    },
    {
      id: 10,
      subject: "Chemistry",
      question: "Which of the following is an example of a noble gas?",
      options: ["Hydrogen", "Nitrogen", "Helium", "Chlorine"],
      answer: "Helium",
    },
    {
      id: 11,
      subject: "Chemistry",
      question: "Which acid is known as the king of chemicals?",
      options: ["HCl", "HNO3", "H2SO4", "H3PO4"],
      answer: "H2SO4",
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedAnswer,
    });
  };

  return (
    <div>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Chemical Bonding and Structure</h2>
      <p style={{ lineHeight: "1.6", fontSize: "1rem", marginBottom: "30px" }}>
        In this section, we will explore key concepts in chemistry such as chemical bonding, molecular structure, and the properties of elements. You will learn about different types of bonds, periodic trends, and the significance of electronegativity in chemical interactions.
      </p>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "20px" }}>
          <h4 style={{ fontSize: "1rem" }}>{q.question}</h4>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            {q.options.map((option, index) => (
              <li key={index} style={{ fontSize: "0.9rem", margin: "5px 0" }}>
                <span
                  onClick={() => handleAnswerSelect(q.id, option)}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: selectedAnswers[q.id] === option ? "#007bff" : "#f8f9fa",
                    color: selectedAnswers[q.id] === option ? "#fff" : "#000",
                    display: "inline-block",
                    width: "85%",
                    textAlign: "left",
                    border: "1px solid #ccc",
                  }}
                >
                  {option}
                </span>
              </li>
            ))}
          </ul>
          {selectedAnswers[q.id] && (
            <p style={{ fontSize: "0.9rem" }}>
              <strong>Correct Answer:</strong> {q.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChemistryPyqs;
