import React, { useState, useEffect } from "react";
import { Card, Button, Form } from 'react-bootstrap';

const challengeTypes = [
  { type: "spelling", question: "Can you spell the word 'apple'?", answer: "apple" },
  { type: "math", question: "What is 3 + 2?", answer: "5" },
  { type: "gk", question: "What is the color of the sky?", answer: "blue" },
  { type: "spelling", question: "Can you spell the word 'banana'?", answer: "banana" },
  { type: "math", question: "What is 7 - 4?", answer: "3" },
  { type: "gk", question: "Which animal is known as the king of the jungle?", answer: "lion" }
];

const getDailyChallengeIndex = () => {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start + (start.getTimezoneOffset() - today.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear % challengeTypes.length;
};

const DailyChallenge = () => {
  const [challenge, setChallenge] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const index = getDailyChallengeIndex();
    setChallenge(challengeTypes[index]);
  }, []);

  const handleAnswerSubmit = () => {
    if (userAnswer.trim().toLowerCase() === challenge.answer.toLowerCase()) {
      setResult("Correct! Well done!");
    } else {
      setResult("Oops! That's not the correct answer.");
    }
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Daily Challenge</Card.Title>
        <Card.Text>{challenge.question}</Card.Text>

        <Form.Group controlId="userAnswer">
          <Form.Control
            type="text"
            placeholder="Enter your answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
          />
        </Form.Group>

        {result && <Card.Text><strong>{result}</strong></Card.Text>}

        <Button variant="primary" onClick={handleAnswerSubmit} className="mt-2">
          Submit Answer
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DailyChallenge;
