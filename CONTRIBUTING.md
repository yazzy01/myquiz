# Contributing to QuizMaster Pro

Thank you for your interest in contributing to QuizMaster Pro! This guide will help you get started with contributing to our enterprise-grade quiz platform.

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.0.0
- npm >= 8.0.0
- Git
- Modern browser (Chrome 90+, Firefox 88+, Safari 14+)

### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/myquiz.git
cd myquiz

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

## 🛠️ Development Guidelines

### Code Style
- **React Functional Components**: Use hooks instead of class components
- **ES6+ Features**: Modern JavaScript syntax and features
- **JSDoc Comments**: Document all functions and components
- **Consistent Naming**: camelCase for variables, PascalCase for components

### Component Structure
```javascript
/**
 * QuizQuestion Component
 * Renders a single quiz question with options
 * 
 * @param {Object} props - Component props
 * @param {Object} props.question - Question data
 * @param {Function} props.onAnswer - Answer selection handler
 * @param {number} props.timeRemaining - Time left in seconds
 */
const QuizQuestion = ({ question, onAnswer, timeRemaining }) => {
  // Component implementation
};

export default QuizQuestion;
```

### State Management
```javascript
// Use React Context for global state
import { useQuizContext } from '../contexts/QuizContext';

const MyComponent = () => {
  const { quizState, dispatch } = useQuizContext();
  
  // Component logic
};
```

## 🧪 Testing Guidelines

### Writing Tests
- Write tests for all new components
- Include edge cases and error scenarios
- Maintain test coverage above 80%

### Test Examples
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import QuizQuestion from './QuizQuestion';

describe('QuizQuestion', () => {
  const mockQuestion = {
    id: 1,
    question: 'Test question?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 'A'
  };

  it('renders question text correctly', () => {
    render(<QuizQuestion question={mockQuestion} onAnswer={jest.fn()} />);
    expect(screen.getByText('Test question?')).toBeInTheDocument();
  });

  it('calls onAnswer when option is selected', () => {
    const mockOnAnswer = jest.fn();
    render(<QuizQuestion question={mockQuestion} onAnswer={mockOnAnswer} />);
    
    fireEvent.click(screen.getByText('A'));
    expect(mockOnAnswer).toHaveBeenCalledWith('A');
  });
});
```

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- QuizQuestion.test.js
```

## 📝 Commit Guidelines

### Commit Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(quiz): add timer functionality to questions

fix(scoring): resolve calculation error for essay questions

docs(readme): update installation instructions
```

## 🎯 Feature Development

### Adding New Question Types
1. Create component in `src/components/questions/`
2. Add type to question schema
3. Update quiz engine logic
4. Write comprehensive tests
5. Update documentation

### Example: Adding Code Question Type
```javascript
// src/components/questions/CodeQuestion.js
const CodeQuestion = ({ question, onAnswer }) => {
  const [code, setCode] = useState('');
  
  return (
    <div className="code-question">
      <h3>{question.question}</h3>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />
      <button onClick={() => onAnswer(code)}>
        Submit Code
      </button>
    </div>
  );
};
```

## 🎨 UI/UX Guidelines

### Design Principles
- **Accessibility First**: WCAG 2.1 AA compliance
- **Mobile Responsive**: Mobile-first design approach
- **Consistent Theming**: Use Bootstrap variables and custom CSS properties
- **Performance**: Optimize for fast loading and smooth interactions

### Component Styling
```css
/* Use CSS custom properties */
.quiz-question {
  background: var(--bs-body-bg);
  border: 1px solid var(--bs-border-color);
  border-radius: var(--bs-border-radius);
  padding: var(--bs-spacer-3);
}

/* Responsive design */
@media (max-width: 768px) {
  .quiz-question {
    padding: var(--bs-spacer-2);
  }
}
```

### Accessibility Checklist
- [ ] Proper semantic HTML
- [ ] ARIA labels and descriptions
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Color contrast compliance
- [ ] Focus indicators

## 📊 Adding Analytics

### Tracking Events
```javascript
import { trackEvent } from '../utils/analytics';

const handleQuizComplete = (score, timeSpent) => {
  trackEvent('quiz_completed', {
    score,
    timeSpent,
    category: quiz.category,
    difficulty: quiz.difficulty
  });
};
```

### Performance Monitoring
```javascript
import { measurePerformance } from '../utils/performance';

const QuizComponent = () => {
  useEffect(() => {
    const cleanup = measurePerformance('quiz_render_time');
    return cleanup;
  }, []);
};
```

## 🔒 Security Guidelines

### Data Validation
```javascript
import { validateQuizData } from '../utils/validation';

const submitQuiz = (answers) => {
  const validatedAnswers = validateQuizData(answers);
  if (!validatedAnswers.isValid) {
    throw new Error('Invalid quiz data');
  }
  // Process answers
};
```

### Preventing Cheating
- Implement time limits strictly
- Randomize question order
- Validate answers server-side
- Monitor for suspicious behavior

## 🚀 Pull Request Process

### Before Submitting
1. **Run Tests**: Ensure all tests pass
2. **Code Quality**: Run linting and formatting
3. **Documentation**: Update relevant docs
4. **Performance**: Check for performance regressions

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added for new functionality
```

## 🐛 Bug Reports

### Bug Report Template
```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: [Chrome/Firefox/Safari]
- Version: [e.g., 1.0.0]
- Device: [Desktop/Mobile/Tablet]

## Additional Context
Screenshots, error messages, etc.
```

## 💡 Feature Requests

### Feature Request Template
```markdown
## Feature Description
Clear description of the proposed feature

## Problem Statement
What problem does this solve?

## Proposed Solution
How should this feature work?

## Alternatives Considered
Other solutions you've thought about

## Additional Context
Mockups, examples, references
```

## 📚 Documentation

### Component Documentation
```javascript
/**
 * Timer Component
 * Displays countdown timer for quiz questions
 * 
 * @component
 * @param {number} duration - Timer duration in seconds
 * @param {Function} onTimeUp - Callback when timer reaches zero
 * @param {boolean} isPaused - Whether timer is paused
 * @returns {JSX.Element} Timer component
 * 
 * @example
 * <Timer 
 *   duration={60} 
 *   onTimeUp={() => console.log('Time up!')}
 *   isPaused={false}
 * />
 */
```

### README Updates
- Keep installation instructions current
- Update feature lists when adding functionality
- Include screenshots for major UI changes
- Maintain accurate performance metrics

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow project guidelines

### Getting Help
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and general discussion
- **Email**: rziguiyassir@gmail.com for direct contact

## 📄 License

By contributing to QuizMaster Pro, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to QuizMaster Pro! 🚀
