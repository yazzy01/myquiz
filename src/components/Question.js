import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Question = ({ question, handleAnswer, handleNext }) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const onOptionChange = (e) => {
    setSelectedOption(e.target.value);
    handleAnswer(e.target.value);
  };

  return (
    <div className="p-3">
      <h3>{question.question}</h3>
      <Form>
        {question.options.map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            label={option}
            value={option}
            checked={selectedOption === option}
            onChange={onOptionChange}
          />
        ))}
      </Form>
      <Button className="mt-3" onClick={handleNext} disabled={!selectedOption}>
        Next
      </Button>
    </div>
  );
};

export default Question;