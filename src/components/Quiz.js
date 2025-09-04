import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Question from './Question';
import Score from './Score';
import { questions } from '../data/questions';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
  };

  return (
    <Container className="mt-5">
      {showScore ? (
        <Score score={score} total={questions.length} restartQuiz={restartQuiz} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
          handleNext={handleNext}
        />
      )}
    </Container>
  );
};

export default Quiz;