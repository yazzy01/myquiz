import { Card, Button } from 'react-bootstrap';

const Score = ({ score, total, restartQuiz }) => (
  <Card className="text-center p-4">
    <Card.Title>Your Score</Card.Title>
    <Card.Text>{score} out of {total}</Card.Text>
    <Button onClick={restartQuiz}>Restart Quiz</Button>
  </Card>
);

export default Score;