import React, { useState } from "react";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import { Container, Row, Col, ProgressBar, Button, Card } from 'react-bootstrap';
const I = () => {
  const [studentName, setStudentName] = useState("Johnny");
  const [lettersLearned, setLettersLearned] = useState(5);

  return (
    <Container fluid className="front-page p-5">
      <header className="text-center mb-5">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-3d-icon-download-in-png-blend-fbx-gltf-file-formats--ai-technology-machine-bot-activity-pack-science-icons-7746758.png" alt="AI Learning Buddy" className="mb-3" width={150} />
        <h1 className="mb-3">Welcome to Your Learning Buddy!</h1>
        <h2 className="text-muted">Learning is Fun with Your AI Friend!</h2>
      </header>

      <Row className="align-items-center text-center mb-5">
        <Col xs={12} md={6} className="ai-mascot">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cute-robot-say-hello-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--hi-bot-pack-science-technology-illustrations-4721951.png?f=webp  " alt="AI Mascot" className="img-fluid" />
        </Col>
        <Col xs={12} md={6}>
          <h3 className="mb-4">Hi {studentName}! Ready to learn and play?</h3>
          <Button variant="primary" className="talk-btn">Talk to Your AI Buddy!</Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Alphabet Adventure</Card.Title>
              <Card.Text>
                Click on letters to learn!
              </Card.Text>
              <Button variant="info">Start Learning</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Number Fun</Card.Title>
              <Card.Text>
                Count objects to learn numbers!
              </Card.Text>
              <Button variant="info">Start Counting</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Story Time</Card.Title>
              <Card.Text>
                Listen to fun stories!
              </Card.Text>
              <Button variant="info">Start Reading</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mx-auto text-center">
          <h3>Your Learning Progress</h3>
          <p>You’ve learned {lettersLearned} new letters today!</p>
          <ProgressBar now={(lettersLearned / 26) * 100} label={`${lettersLearned}/26`} />
        </Col>
      </Row>
            
      <Row className="text-center">
        <Col md={4}>
          <Card className="fun-fact-card">
            <Card.Body>
              <Card.Title>Today's Word</Card.Title>
              <Card.Text>Cat: A small, furry animal.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="fun-fact-card">
            <Card.Body>
              <Card.Title>Today's Number</Card.Title>
              <Card.Text>5: The number of fingers on one hand!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="fun-fact-card">
            <Card.Body>
              <Card.Title>Daily Challenge</Card.Title>
              <Card.Text>Can you spell the word "cat"?</Card.Text>
              <Button variant="success">Take Challenge</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default I;
