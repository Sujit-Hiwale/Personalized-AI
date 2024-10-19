exports.calculateNumberFun = (req, res) => {
    const { number } = req.body;
    const result = number * 2; 
    res.json({ result });
  };
  