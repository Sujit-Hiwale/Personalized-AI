import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

const StoryTime = () => {
  const stories = [
    {
      title: "The Hungry Caterpillar",
      text: "Once upon a time, there was a hungry caterpillar. He ate through one apple, two pears, three plums, four strawberries, and five oranges. But he was still hungry! Finally, he turned into a beautiful butterfly.",
      image: "https://m.media-amazon.com/images/I/91gihQh4OCS._AC_UF1000,1000_QL80_.jpg",
      source: "Eric Carle's 'The Very Hungry Caterpillar'",
    },
    {
      title: "The Tortoise and the Hare",
      text: "There was once a speedy hare who bragged about how fast he could run. Tired of hearing him boast, slow and steady tortoise challenged him to a race. To the hare’s surprise, the tortoise won, showing that slow and steady wins the race.",
      image: "https://bedtimestorieskd.com/wp-content/uploads/2024/01/the-tortoise-and-the-hare.webp",

      source: "Aesop's Fables",
    },
    {
      title: "The Little Red Hen",
      text: "A little red hen lived on a farm. She found some grains of wheat and asked her friends to help plant them. But no one wanted to help. So she did all the work herself, and when the bread was baked, she ate it all alone.",
      image: "https://m.media-amazon.com/images/I/81MqGbOFrnL._AC_UF1000,1000_QL80_.jpg",
      source: "Traditional Folk Tale",
    },
  ];

  const [selectedStory, setSelectedStory] = useState(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  const handleStorySelect = (story) => {
    setSelectedStory(story);
    // Use the Web Speech API to read the story text if audio is enabled
    if (isAudioEnabled) {
      const utterance = new SpeechSynthesisUtterance(story.text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleClose = () => {
    setSelectedStory(null);
    // Stop speaking when the modal closes
    window.speechSynthesis.cancel();
  };

  const toggleAudio = () => {
    setIsAudioEnabled((prev) => !prev);
  };

  return (
    <Container className="story-time p-5">
      <h1 className="text-center mb-4">Story Time!</h1>
      <Row>
        {stories.map((story, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{story.title}</Card.Title>
                <img src={story.image} alt={story.title} className="img-fluid mb-2" style={{height:"200px"}}/><br/>
                <Button variant="info" onClick={() => handleStorySelect(story)}>
                  Read Story
                </Button>
                <p className="mt-2">Source: {story.source}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Story Modal */}
      {selectedStory && (
        <Modal show={!!selectedStory} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedStory.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Display the story text here */}
            {/* Audio Toggle */}
            <Form.Group className="mb-4">
              <Form.Check
                type="switch"
                id="custom-switch"
                label={isAudioEnabled ? "Audio: On" : "Audio: Off"}
                checked={isAudioEnabled}
                onChange={toggleAudio}
              />
            </Form.Group>
            <p style={{color:'black'}}>{selectedStory.text}</p> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default StoryTime;
