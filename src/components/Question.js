import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Question = ({ question, handleAnswer, handleNext }) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  useEffect(() => {
    setSelectedOption('');
  }, [question.id]);

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
            id={`question-${question.id}-option-${index}`}
            name={`question-${question.id}`}
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
