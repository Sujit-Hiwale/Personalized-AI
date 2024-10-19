import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const NumberFun = () => {
  const objects = [
    { name: "Apple", image: "https://example.com/apple.png" },
    { name: "Ball", image: "https://example.com/ball.png" },
    { name: "Cat", image: "https://example.com/cat.png" },
    { name: "Dog", image: "https://example.com/dog.png" },
    { name: "Fish", image: "https://example.com/fish.png" },
    { name: "Hat", image: "https://example.com/hat.png" },
  ];

  const [objectSet, setObjectSet] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [userCount, setUserCount] = useState("");
  const [feedback, setFeedback] = useState(null);

  const generateObjects = () => {
    const randomObject = objects[Math.floor(Math.random() * objects.length)];
    const randomCount = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    const newObjectSet = Array(randomCount).fill(randomObject);
    
    setObjectSet(newObjectSet);
    setCorrectCount(randomCount);
    setFeedback(null);
    setUserCount("");
  };

  useEffect(() => {
    generateObjects();
  }, []);

  const handleCountSubmit = () => {
    if (parseInt(userCount) === correctCount) {
      setFeedback("Correct! Well done!");
    } else {
      setFeedback(`Oops! The correct answer was ${correctCount}.`);
    }
  };

  return (
    <Container className="counting-game p-5">
      <h1 className="text-center mb-4">Start Counting!</h1>
      
      <Row className="mb-4">
        {objectSet.map((obj, index) => (
          <Col key={index} xs={4} md={2} className="text-center mb-3">
            <Card className="h-100">
              <Card.Img variant="top" src={obj.image} />
              <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="text-center mb-4">
        <Col md={6} className="mx-auto">
          <Form.Group>
            <Form.Label>How many {objectSet.length > 0 ? objectSet[0].name : ""}s do you see?</Form.Label>
            <Form.Control
              type="number"
              value={userCount}
              onChange={(e) => setUserCount(e.target.value)}
              placeholder="Enter your answer"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleCountSubmit} className="mt-3">
            Submit Answer
          </Button>
        </Col>
      </Row>

      {feedback && (
        <div className="text-center">
          <h4>{feedback}</h4>
          <Button variant="success" onClick={generateObjects} className="mt-3">
            Next Round
          </Button>
        </div>
      )}
    </Container>
  );
};

export default NumberFun;