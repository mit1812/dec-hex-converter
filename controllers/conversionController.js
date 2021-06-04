import { hexCalculator } from '../utils/hexCalculator.js';

const decimalToHexConverter = (req, res) => {
  const { value } = req.params;

  const convertedResult = hexCalculator(parseInt(value));
  if (!convertedResult) {
    res.status(400).end();
  }
  res.status(200).json({ result: convertedResult });
};

export default decimalToHexConverter;
