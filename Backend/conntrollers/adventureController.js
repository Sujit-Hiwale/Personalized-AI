exports.getAlphabetAdventure = (req, res) => {
    const adventureData = {
      title: 'Alphabet Adventure',
      description: 'An exciting journey through the alphabet!',
    };
    res.json(adventureData);
  };
  
  exports.getDailyChallenge = (req, res) => {
    const challengeData = {
      title: 'Daily Challenge',
      task: 'Complete the puzzle of the day!',
    };
    res.json(challengeData);
  };
  
  