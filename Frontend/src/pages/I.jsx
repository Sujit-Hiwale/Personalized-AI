import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Container, Row, Col, ProgressBar, Button, Card } from 'react-bootstrap';
const I = () => {
  const [studentName, setStudentName] = useState("Johnny");
  const [lettersLearned, setLettersLearned] = useState(5);

  const words = [
    { word: "Cat",
      image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-cat-animal-png-image_10149335.png",
      description: "A small, furry animal." },
    { word: "Dog",
      image: "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-puppy-labrador-retriever-cute-dog-animal-png-image_9993729.png",
      description: "A loyal, friendly animal." },
    { word: "Apple",
      image: "https://i0.wp.com/myfreedrawings.com/wp-content/uploads/2022/07/Red-Apple-Healthy-Cute-Simple-Red-Apple-Clipart-PNG.png?resize=640%2C734&ssl=1", description: "A sweet, crunchy fruit." }
    // Add more words and descriptions here
  ];

  const numbers = [
    { number: 5,
      image: "https://cdn.pixabay.com/photo/2013/07/12/12/37/number-146025_1280.png",
      description: "The number of fingers on one hand!" },
    { number: 3,
      image: "https://cdn.pixabay.com/photo/2013/07/12/12/37/number-146023_1280.png",
      description: "The number of primary colors." },
    { number: 7,
      image: "https://cdn.pixabay.com/photo/2013/07/12/12/37/number-146027_1280.png",
      description: "The number of days in a week." }
    // Add more numbers and descriptions here
  ];

  // State for the selected word and number
  const [todaysWord, setTodaysWord] = useState(words[0]);
  const [todaysNumber, setTodaysNumber] = useState(numbers[0]);

  // Function to randomize today's word and number
  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    setTodaysWord(randomWord);
    setTodaysNumber(randomNumber);
  }, []);

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
              <img src="https://m.media-amazon.com/images/I/61ExoVrvHpL._AC_UF1000,1000_QL80_.jpg" style={{width: '200px'}} />
              <Card.Text>
                Click on letters to learn!
              </Card.Text>
              <Button variant="info" as={Link} to="/alphabets">Start Learning</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Number Fun</Card.Title>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJ84ezqnl1Ia70flf-4Mi0gjnCvJ1_Mkr7Q&s" style={{height:'260px'}}/>
              <Card.Text>
                Count objects to learn numbers!
              </Card.Text>
              <Button variant="info" as={Link} to="/numbers">Start Counting</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Story Time</Card.Title>
              <img src="https://img.freepik.com/premium-vector/listen-kids-stories-isolated-cartoon-vector-illustration_107173-23611.jpg" style={{height:'260px'}} />
              <Card.Text>
                Listen to fun stories!
              </Card.Text>
              <Button variant="info" as={Link} to="/story">Start Reading</Button>
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
              <img src={todaysWord.image} alt={todaysWord.word} style={{ width: '100px', height: '100px' }} />
              <Card.Text>{todaysWord.word}: {todaysWord.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="fun-fact-card">
          <Card.Body>
              <Card.Title>Today's Number</Card.Title>
              <img src={todaysNumber.image} alt={todaysNumber.word} style={{ width: '70px', height: '100px' }} />
              <Card.Text>{todaysNumber.number}: {todaysNumber.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="fun-fact-card">
            <Card.Body>
              <Card.Title>Daily Challenge</Card.Title>
              <img src="https://cdn-icons-png.freepik.com/512/5112/5112632.png" alt="Daily Challenge" style={{height:'100px'}} />
              <Card.Text>Can you spell the word "cat"?</Card.Text>
              <Button variant="success" as={Link} to="/daily">Take Challenge</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default I;
