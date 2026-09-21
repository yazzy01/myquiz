import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('requires an answer before advancing to the next question', async () => {
  render(<App />);

  expect(screen.getByText(/correct way to declare a variable/i)).toBeInTheDocument();

  const nextButton = screen.getByRole('button', { name: /next/i });
  expect(nextButton).toBeDisabled();

  await userEvent.click(screen.getByRole('radio', { name: 'All of the above' }));
  expect(nextButton).toBeEnabled();

  await userEvent.click(nextButton);

  expect(screen.getByText(/output of: console\.log\(typeof null\)/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
});

test('allows an answer to be changed without enabling multiple selections', async () => {
  render(<App />);

  const firstAnswer = screen.getByRole('radio', { name: 'var myVar = 5;' });
  const correctedAnswer = screen.getByRole('radio', { name: 'All of the above' });

  await userEvent.click(firstAnswer);
  expect(firstAnswer).toBeChecked();

  await userEvent.click(correctedAnswer);
  expect(correctedAnswer).toBeChecked();
  expect(firstAnswer).not.toBeChecked();
});
