import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from "axios";
const AlphabetAdventure = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const objectsForLetters = {
    A: { object: "Apple", image: "https://example.com/apple.png" },
    B: { object: "Ball", image: "https://example.com/ball.png" },
    C: { object: "Cat", image: "https://example.com/cat.png" },
    D: { object: "Dog", image: "https://example.com/dog.png" },
    E: { object: "Elephant", image: "https://example.com/elephant.png" },
    F: { object: "Fish", image: "https://example.com/fish.png" },
    G: { object: "Giraffe", image: "https://example.com/giraffe.png" },
    H: { object: "Hat", image: "https://example.com/hat.png" },
    I: { object: "Ice Cream", image: "https://example.com/icecream.png" },
    J: { object: "Juice", image: "https://example.com/juice.png" },
    K: { object: "Kite", image: "https://example.com/kite.png" },
    L: { object: "Lion", image: "https://example.com/lion.png" },
    M: { object: "Monkey", image: "https://example.com/monkey.png" },
    N: { object: "Nest", image: "https://example.com/nest.png" },
    O: { object: "Orange", image: "https://example.com/orange.png" },
    P: { object: "Penguin", image: "https://example.com/penguin.png" },
    Q: { object: "Queen", image: "https://example.com/queen.png" },
    R: { object: "Rabbit", image: "https://example.com/rabbit.png" },
    S: { object: "Sun", image: "https://example.com/sun.png" },
    T: { object: "Tiger", image: "https://example.com/tiger.png" },
    U: { object: "Umbrella", image: "https://example.com/umbrella.png" },
    V: { object: "Violin", image: "https://example.com/violin.png" },
    W: { object: "Whale", image: "https://example.com/whale.png" },
    X: { object: "Xylophone", image: "https://example.com/xylophone.png" },
    Y: { object: "Yak", image: "https://example.com/yak.png" },
    Z: { object: "Zebra", image: "https://example.com/zebra.png" },
  };

  const [currentLetter, setCurrentLetter] = useState(null);
  const [options, setOptions] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const getRandomWrongOptions = (correctLetter) => {
    const wrongOptions = [];
    const lettersArray = alphabet.filter(letter => letter !== correctLetter);

    while (wrongOptions.length < 3) {
      const randomLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
      if (!wrongOptions.includes(randomLetter)) {
        wrongOptions.push(randomLetter);
      }
    }

    return wrongOptions.map(letter => objectsForLetters[letter]);
  };

  const getRandomLetter = () => {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    setCurrentLetter(randomLetter);
  };

  const setupNewQuestion = () => {
    getRandomLetter();
    setFeedback(null);
  };

  useEffect(() => {
    if (currentLetter) {
      const correctOption = objectsForLetters[currentLetter];
      const wrongOptions = getRandomWrongOptions(currentLetter);

      const allOptions = [...wrongOptions, correctOption].sort(() => Math.random() - 0.5);
      setOptions(allOptions);
    }
  }, [currentLetter]);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption.object === objectsForLetters[currentLetter].object) {
      setFeedback("Correct! Great Job!");
    } else {
      setFeedback("Oops! Try Again.");
    }
  };

  return (
    <Container className="alphabet-adventure-page p-5">
      <h1 className="text-center mb-4">Alphabet Adventure</h1>
      
      {currentLetter ? (
        <>
          <h2 className="text-center">What starts with "{currentLetter}"?</h2>

          <Row className="mb-4 text-center">
            {options.map((option, index) => (
              <Col key={index} xs={6} md={3} className="mb-3">
                <Card onClick={() => handleOptionClick(option)} className="h-100">
                  <Card.Img variant="top" src={option.image} />
                  <Card.Body>
                    <Card.Title>{option.object}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {feedback && (
            <div className="text-center">
              <h4>{feedback}</h4>
              <Button variant="success" onClick={setupNewQuestion}>
                Next Question
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <Button variant="primary" onClick={setupNewQuestion}>
            Start Alphabet Adventure
          </Button>
        </div>
      )}
    </Container>
  );
};

export default AlphabetAdventure;
