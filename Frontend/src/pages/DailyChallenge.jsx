import React, { useState, useEffect } from "react";
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const resources = {
  easy: {
    addition: [
      { title: "Khan Academy - Addition", url: "https://www.khanacademy.org/math/arithmetic-home/addition-subtraction" },
      { title: "Math is Fun - Addition", url: "https://www.mathsisfun.com/addition.html" }
    ],
    subtraction: [
      { title: "Khan Academy - Subtraction", url: "https://www.khanacademy.org/math/arithmetic-home/addition-subtraction" },
      { title: "Math is Fun - Subtraction", url: "https://www.mathsisfun.com/subtraction.html" }
    ]
  },
  medium: {
    multiplication: [
      { title: "Khan Academy - Multiplication", url: "https://www.khanacademy.org/math/arithmetic-home/multiplication-division" },
      { title: "Math is Fun - Multiplication", url: "https://www.mathsisfun.com/multiplication.html" }
    ],
    division: [
      { title: "Khan Academy - Division", url: "https://www.khanacademy.org/math/arithmetic-home/multiplication-division" },
      { title: "Math is Fun - Division", url: "https://www.mathsisfun.com/division.html" }
    ]
  }
};

const generateMathChallenge = (difficulty) => {
  const randomNum1 = Math.floor(Math.random() * 10) + 1;
  const randomNum2 = Math.floor(Math.random() * 10) + 1;
  const randomNum3 = Math.floor(Math.random() * 10) + 1;

  if (difficulty === "easy") {
    const operator = Math.random() < 0.5 ? '+' : '-';
    const answer = operator === '+' ? randomNum1 + randomNum2 : randomNum1 - randomNum2;
    return { question: `${randomNum1} ${operator} ${randomNum2}`, answer: answer.toString(), difficulty: "easy" };
  } else if (difficulty === "medium") {
    const operator = Math.random() < 0.5 ? '*' : '/';
    let answer;
    let adjustedNum1 = randomNum1;

    if (operator === '*') {
      answer = randomNum1 * randomNum2;
    } else {
      answer = randomNum1; 
      adjustedNum1 = randomNum1 * randomNum2;
    }

    return { question: `${adjustedNum1} ${operator} ${randomNum2}`, answer: answer.toString(), difficulty: "medium" };
  } else if (difficulty === "hard") {
    const operators = ['+', '-', '*', '/'];
    const op1 = operators[Math.floor(Math.random() * operators.length)];
    const op2 = operators[Math.floor(Math.random() * operators.length)];

    const expression = `${randomNum1} ${op1} ${randomNum2} ${op2} ${randomNum3}`;
    let answer;

    try {
      answer = eval(expression);
      if (answer % 1 !== 0) {
        const decimalPart = answer.toString().split('.')[1];
        if (decimalPart && decimalPart.length > 2) {
          answer = parseFloat(answer).toFixed(2);
        }
      }
    } catch (error) {
      answer = "Error";
    }

    return { question: expression, answer: answer.toString(), difficulty: "hard" };
  }

  return null;
};

const challengeTypes = {
  math: Array.from({ length: 10 }).map((_, index) => {
    if (index < 5) return generateMathChallenge("easy");
    if (index < 8) return generateMathChallenge("medium");
    return generateMathChallenge("hard");
  })
};

const DailyChallenge = () => {
  const [challengeType] = useState("math");
  const [difficulty, setDifficulty] = useState("easy");
  const [challenge, setChallenge] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [points, setPoints] = useState(0);
  const [showResources, setShowResources] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [suggestSimpler, setSuggestSimpler] = useState(false);

  useEffect(() => {
    generateNewChallenge();
  }, [difficulty]);

  const generateNewChallenge = () => {
    const challenge = generateMathChallenge(difficulty);
    setChallenge(challenge);
    setIncorrectAnswer(false);
    setShowResources(false);
    setShowCorrectAnswer(false);
    setSuggestSimpler(false); 
  };

  const handleAnswerSubmit = () => {
    const correct = userAnswer.trim() === challenge.answer.trim();
    
    if (correct) {
      alert("Correct! Well done!");
      setPoints(points + (difficulty === "easy" ? 1 : difficulty === "medium" ? 3 : 5));
      generateNewChallenge();
      setUserAnswer("");
    } else {
      alert(`Oops! That's not the correct answer.`);
      setIncorrectAnswer(true);
      setShowResources(true);
      setShowCorrectAnswer(false);
      if (difficulty === "hard" || difficulty === "medium") {
        setSuggestSimpler(true);
      }
    }
  };

  const handleTryAgain = () => {
    setUserAnswer("");
    setShowCorrectAnswer(false);
    if(difficulty === "easy"){

    }
    else{
      setSuggestSimpler(true);
    }
  };

  const handleShowAnswer = () => {
    setShowCorrectAnswer(true);
  };

  const handleSimplerDifficulty = () => {
    if(difficulty === "hard")
      setDifficulty("medium");
    else if(difficulty === "easy")
      setDifficulty("easy");
    generateNewChallenge();
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Daily Challenge - {challengeType.toUpperCase()} ({difficulty.charAt(0).toUpperCase() + difficulty.slice(1)})</Card.Title>
        <Card.Text>{challenge.question}</Card.Text>

        <Form.Group controlId="userAnswer">
          <Form.Control
            type="text"
            placeholder="Enter your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleAnswerSubmit} className="mt-2">
          Submit Answer
        </Button>

        {incorrectAnswer && (
          <div className="mt-3">
            <h5>Try Again or Learn:</h5>
            <Button variant="secondary" onClick={handleTryAgain} className="mr-2">Try Again</Button>
            <Button variant="link" onClick={handleShowAnswer}>Show Answer</Button>
            {difficulty === "easy" && (
              <div>
                <h6>Learning Resources for Addition/Subtraction:</h6>
                {resources.easy.addition.map((resource, index) => (
                  <div key={index}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                  </div>
                ))}
                {resources.easy.subtraction.map((resource, index) => (
                  <div key={index}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                  </div>
                ))}
              </div>
            )}
            {difficulty === "medium" && (
              <div>
                <h6>Learning Resources for Multiplication/Division:</h6>
                {resources.medium.multiplication.map((resource, index) => (
                  <div key={index}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                  </div>
                ))}
                {resources.medium.division.map((resource, index) => (
                  <div key={index}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                  </div>
                ))}
              </div>
            )}
            {(difficulty === "hard"||difficulty=="medium") && suggestSimpler && (
              <div className="mt-2">
                <p>Would you like to try a simpler question?</p>
                <Button variant="info" onClick={handleSimplerDifficulty}>Yes, switch to {difficulty==="hard"? "Medium": "Easy"}</Button>
              </div>
            )}
            {showCorrectAnswer && (
              <div className="mt-2">
                <strong>The correct answer is: {challenge.answer}</strong>
              </div>
            )}
          </div>
        )}

        <Row className="mt-4">
          <Col>
            <Button variant="info" onClick={() => setDifficulty("easy")}>Easy</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => setDifficulty("medium")}>Medium</Button>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => setDifficulty("hard")}>Hard</Button>
          </Col>
        </Row>

        <Card.Text className="mt-4">
          <strong>Total Points: {points}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DailyChallenge;
