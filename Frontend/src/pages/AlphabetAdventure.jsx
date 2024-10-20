import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from "axios";
const AlphabetAdventure = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const objectsForLetters = {
    A: { object: "Apple", image: "https://w7.pngwing.com/pngs/402/346/png-transparent-apple-apple-apple-fruit-illustration-natural-foods-food-fruit-thumbnail.png" },
    B: { object: "Ball", image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-cat-animal-png-image_10149335.png" },
    C: { object: "Cat", image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-cat-animal-png-image_10149335.png" },
    D: { object: "Dog", image: "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-puppy-labrador-retriever-cute-dog-animal-png-image_9993729.png" },
    E: { object: "Elephant", image: "https://pngfile.net/public/uploads/preview/colorful-kite-png-image-11701765602mr61ltx3ci.png" },
    F: { object: "Fish", image: "https://w7.pngwing.com/pngs/807/315/png-transparent-red-fish-illustration-fish-fin-saltwater-fish-fish-food-animals-seafood-thumbnail.png" },
    G: { object: "Giraffe", image: "https://w7.pngwing.com/pngs/665/903/png-transparent-brown-giraffe-northern-giraffe-giraffe-mammal-animals-giraffe-thumbnail.png" },
    H: { object: "Hat", image: "https://pngfile.net/public/uploads/preview/santa-claus-hat-png-free-download-11573377194jyiqxdvsx9.png" },
    I: { object: "Ice Cream", image: "https://pngfile.net/public/uploads/preview/png-cone-ice-cream-free-download-31566759084q5nhjvkgmb.png" },
    J: { object: "Joker", image: "https://w7.pngwing.com/pngs/1011/378/png-transparent-joker-circus-clown-circus-clown-joker-heroes-photography-baby-toys-thumbnail.png" },
    K: { object: "Kite", image: "https://freepng.com/uploads/images/202302/ree-vector-blue-and-yellow-kite-png_600x.jpg" },
    L: { object: "Lion", image: "https://w7.pngwing.com/pngs/152/1021/png-transparent-lion-cartoon-animation-lion-lion-mammal-animals-cat-like-mammal-thumbnail.png" },
    M: { object: "Monkey", image: "https://w7.pngwing.com/pngs/182/894/png-transparent-monkey-cartoon-monkey-mammal-animals-photography-thumbnail.png" },
    N: { object: "Nest", image: "https://w7.pngwing.com/pngs/297/242/png-transparent-bird-nest-bird-s-nest-saving-image-file-formats-animals-thumbnail.png" },
    O: { object: "Orange", image: "https://w7.pngwing.com/pngs/575/378/png-transparent-easter-bunny-hare-cottontail-rabbit-domestic-rabbit-european-rabbit-rabbit-mammal-image-file-formats-animals-thumbnail.png" },
    P: { object: "Parrot", image: "https://pngfile.net/public/uploads/preview/parrot-illustration-png-free-download-81567800696mhrtij6mwk.png" },
    Q: { object: "Queen", image: "https://w7.pngwing.com/pngs/575/378/png-transparent-easter-bunny-hare-cottontail-rabbit-domestic-rabbit-european-rabbit-rabbit-mammal-image-file-formats-animals-thumbnail.png" },
    R: { object: "Rabbit", image: "https://w7.pngwing.com/pngs/575/378/png-transparent-easter-bunny-hare-cottontail-rabbit-domestic-rabbit-european-rabbit-rabbit-mammal-image-file-formats-animals-thumbnail.png" },
    S: { object: "Star", image: "https://w7.pngwing.com/pngs/427/480/png-transparent-gold-star-star-star-angle-orange-symmetry-thumbnail.png" },
    T: { object: "Tiger", image: "https://w7.pngwing.com/pngs/337/666/png-transparent-brown-tiger-tiger-tiger-mammal-animals-cat-like-mammal-thumbnail.png" },
    U: { object: "Umbrella", image: "https://w7.pngwing.com/pngs/95/1001/png-transparent-umbrella-graphy-a-colorful-umbrella-beach-color-splash-photography-thumbnail.png" },
    V: { object: "Violin", image: "https://pngfile.net/public/uploads/preview/parrot-illustration-png-free-download-81567800696mhrtij6mwk.png" },
    W: { object: "Whale", image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-cat-animal-png-image_10149335.png" },
    X: { object: "Xylophone", image: "https://w7.pngwing.com/pngs/402/346/png-transparent-apple-apple-apple-fruit-illustration-natural-foods-food-fruit-thumbnail.png" },
    Y: { object: "Yak", image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-cat-animal-png-image_10149335.png" },
    Z: { object: "Zebra", image: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-cute-cat-animal-png-image_10149335.png" },
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
