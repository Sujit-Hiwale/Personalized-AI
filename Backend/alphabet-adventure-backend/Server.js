const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Alphabet data
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
  Z: { object: "Zebra", image: "https://example.com/zebra.png" }
};

app.get('/api/letter/:letter', (req, res) => {
    const letter = req.params.letter.toUpperCase();
    if (objectsForLetters[letter]) {
      res.json(objectsForLetters[letter]);
    } else {
      res.status(404).json({ msg: 'Letter not found' });
    }
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });
