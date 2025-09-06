/**
 * QuizMaster Pro - Professional Question Bank
 * Enterprise-grade quiz questions across multiple categories
 * 
 * @author Yassir Rzigui
 * @version 2.0.0
 */

export const categories = {
  javascript: {
    name: 'JavaScript & Web Development',
    color: '#F7DF1E',
    icon: '🟨'
  },
  react: {
    name: 'React & Frontend Frameworks',
    color: '#61DAFB',
    icon: '⚛️'
  },
  algorithms: {
    name: 'Algorithms & Data Structures',
    color: '#FF6B6B',
    icon: '🧮'
  },
  webdev: {
    name: 'Web Development Fundamentals',
    color: '#4ECDC4',
    icon: '🌐'
  },
  programming: {
    name: 'Programming Concepts',
    color: '#45B7D1',
    icon: '💻'
  }
};

export const difficultyLevels = {
  beginner: { name: 'Beginner', color: '#28a745', points: 5 },
  intermediate: { name: 'Intermediate', color: '#ffc107', points: 10 },
  advanced: { name: 'Advanced', color: '#dc3545', points: 15 },
  expert: { name: 'Expert', color: '#6f42c1', points: 20 }
};

export const questions = [
  // JavaScript Fundamentals
  {
    id: 1,
    type: 'multiple-choice',
    category: 'javascript',
    difficulty: 'beginner',
    question: 'What is the correct way to declare a variable in modern JavaScript?',
    options: ['var myVar = 5;', 'let myVar = 5;', 'const myVar = 5;', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'All three are valid ways to declare variables, but let and const are preferred in modern JavaScript for block scoping.',
    points: 5,
    timeLimit: 30,
    tags: ['variables', 'es6', 'fundamentals']
  },
  
  {
    id: 2,
    type: 'multiple-choice',
    category: 'javascript',
    difficulty: 'intermediate',
    question: 'What is the output of: console.log(typeof null)?',
    options: ['null', 'undefined', 'object', 'boolean'],
    correctAnswer: 'object',
    explanation: 'This is a well-known JavaScript quirk. typeof null returns "object" due to a historical bug in the language.',
    points: 10,
    timeLimit: 45,
    tags: ['typeof', 'null', 'quirks']
  },

  {
    id: 3,
    type: 'true-false',
    category: 'javascript',
    difficulty: 'beginner',
    question: 'JavaScript is a statically typed language.',
    correctAnswer: false,
    explanation: 'JavaScript is dynamically typed, meaning variable types are determined at runtime, not compile time.',
    points: 5,
    timeLimit: 20,
    tags: ['typing', 'fundamentals']
  },

  {
    id: 4,
    type: 'fill-blank',
    category: 'javascript',
    difficulty: 'intermediate',
    question: 'The _______ method adds one or more elements to the end of an array and returns the new length.',
    correctAnswers: ['push', 'push()', '.push()'],
    acceptableAnswers: ['push', 'push()', '.push()'],
    caseSensitive: false,
    explanation: 'The push() method modifies the original array and returns the new length after adding elements.',
    points: 10,
    timeLimit: 30,
    tags: ['arrays', 'methods']
  },

  // React Questions
  {
    id: 5,
    type: 'multiple-choice',
    category: 'react',
    difficulty: 'intermediate',
    question: 'Which hook is used to manage state in functional React components?',
    options: ['useEffect', 'useState', 'useContext', 'useReducer'],
    correctAnswer: 'useState',
    explanation: 'useState is the primary hook for managing local state in functional components.',
    points: 10,
    timeLimit: 30,
    tags: ['hooks', 'state', 'functional-components']
  },

  {
    id: 6,
    type: 'multiple-choice',
    category: 'react',
    difficulty: 'advanced',
    question: 'What is the purpose of React.memo()?',
    options: [
      'To memoize expensive calculations',
      'To prevent unnecessary re-renders of components',
      'To cache API responses',
      'To store component state'
    ],
    correctAnswer: 'To prevent unnecessary re-renders of components',
    explanation: 'React.memo is a higher-order component that memoizes the result and skips re-rendering if props haven\'t changed.',
    points: 15,
    timeLimit: 45,
    tags: ['optimization', 'memoization', 'performance']
  },

  {
    id: 7,
    type: 'true-false',
    category: 'react',
    difficulty: 'beginner',
    question: 'JSX is required to use React.',
    correctAnswer: false,
    explanation: 'JSX is not required but is commonly used. React can work with plain JavaScript using React.createElement().',
    points: 5,
    timeLimit: 25,
    tags: ['jsx', 'fundamentals']
  },

  // Algorithms & Data Structures
  {
    id: 8,
    type: 'multiple-choice',
    category: 'algorithms',
    difficulty: 'intermediate',
    question: 'What is the time complexity of binary search?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 'O(log n)',
    explanation: 'Binary search divides the search space in half with each iteration, resulting in logarithmic time complexity.',
    points: 10,
    timeLimit: 60,
    tags: ['time-complexity', 'search-algorithms', 'big-o']
  },

  {
    id: 9,
    type: 'multiple-choice',
    category: 'algorithms',
    difficulty: 'advanced',
    question: 'Which sorting algorithm has the best average-case time complexity?',
    options: ['Bubble Sort', 'Quick Sort', 'Insertion Sort', 'Selection Sort'],
    correctAnswer: 'Quick Sort',
    explanation: 'Quick Sort has an average-case time complexity of O(n log n), making it one of the most efficient sorting algorithms.',
    points: 15,
    timeLimit: 90,
    tags: ['sorting', 'time-complexity', 'algorithms']
  },

  {
    id: 10,
    type: 'fill-blank',
    category: 'algorithms',
    difficulty: 'intermediate',
    question: 'A _______ is a linear data structure that follows the Last In, First Out (LIFO) principle.',
    correctAnswers: ['stack', 'Stack'],
    acceptableAnswers: ['stack', 'Stack', 'LIFO stack'],
    caseSensitive: false,
    explanation: 'A stack is a fundamental data structure where elements are added and removed from the same end (top).',
    points: 10,
    timeLimit: 30,
    tags: ['data-structures', 'stack', 'lifo']
  },

  // Web Development
  {
    id: 11,
    type: 'multiple-choice',
    category: 'webdev',
    difficulty: 'beginner',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlink and Text Markup Language'
    ],
    correctAnswer: 'Hyper Text Markup Language',
    explanation: 'HTML (Hyper Text Markup Language) is the standard markup language for creating web pages.',
    points: 5,
    timeLimit: 20,
    tags: ['html', 'fundamentals', 'web-basics']
  },

  {
    id: 12,
    type: 'multiple-choice',
    category: 'webdev',
    difficulty: 'intermediate',
    question: 'Which CSS property is used to create flexible layouts?',
    options: ['display: block', 'display: flex', 'display: inline', 'display: table'],
    correctAnswer: 'display: flex',
    explanation: 'Flexbox (display: flex) provides a flexible way to arrange elements in a container with powerful alignment options.',
    points: 10,
    timeLimit: 30,
    tags: ['css', 'flexbox', 'layout']
  },

  {
    id: 13,
    type: 'true-false',
    category: 'webdev',
    difficulty: 'intermediate',
    question: 'CSS Grid is better than Flexbox for all layout scenarios.',
    correctAnswer: false,
    explanation: 'Both CSS Grid and Flexbox have their strengths. Grid is better for 2D layouts, while Flexbox excels at 1D layouts.',
    points: 10,
    timeLimit: 30,
    tags: ['css', 'grid', 'flexbox', 'layout']
  },

  // Programming Concepts
  {
    id: 14,
    type: 'multiple-choice',
    category: 'programming',
    difficulty: 'intermediate',
    question: 'What is the main principle of Object-Oriented Programming?',
    options: ['Inheritance', 'Encapsulation', 'Polymorphism', 'All of the above'],
    correctAnswer: 'All of the above',
    explanation: 'OOP is built on four main principles: Encapsulation, Inheritance, Polymorphism, and Abstraction.',
    points: 10,
    timeLimit: 45,
    tags: ['oop', 'programming-paradigms', 'concepts']
  },

  {
    id: 15,
    type: 'fill-blank',
    category: 'programming',
    difficulty: 'advanced',
    question: 'The _______ pattern ensures a class has only one instance and provides global access to it.',
    correctAnswers: ['Singleton', 'singleton', 'Singleton pattern'],
    acceptableAnswers: ['Singleton', 'singleton', 'Singleton pattern', 'singleton pattern'],
    caseSensitive: false,
    explanation: 'The Singleton pattern restricts instantiation of a class to one object and provides global access to that instance.',
    points: 15,
    timeLimit: 60,
    tags: ['design-patterns', 'singleton', 'oop']
  },

  // Advanced Questions
  {
    id: 16,
    type: 'essay',
    category: 'javascript',
    difficulty: 'expert',
    question: 'Explain the concept of closures in JavaScript with a practical example. Discuss their benefits and potential memory implications.',
    maxWords: 300,
    rubric: {
      'Understanding of Closures': 25,
      'Practical Example': 25,
      'Benefits Explanation': 25,
      'Memory Implications': 25
    },
    points: 20,
    timeLimit: 600,
    tags: ['closures', 'advanced', 'memory-management']
  },

  {
    id: 17,
    type: 'multiple-choice',
    category: 'react',
    difficulty: 'expert',
    question: 'What is the purpose of the useCallback hook?',
    options: [
      'To cache component instances',
      'To memoize function references between re-renders',
      'To handle side effects',
      'To manage component state'
    ],
    correctAnswer: 'To memoize function references between re-renders',
    explanation: 'useCallback returns a memoized version of a function that only changes if its dependencies change, preventing unnecessary re-renders of child components.',
    points: 20,
    timeLimit: 60,
    tags: ['hooks', 'optimization', 'memoization', 'performance']
  },

  {
    id: 18,
    type: 'multiple-choice',
    category: 'algorithms',
    difficulty: 'expert',
    question: 'Which algorithm is most suitable for finding the shortest path in a weighted graph?',
    options: ['Breadth-First Search', 'Depth-First Search', 'Dijkstra\'s Algorithm', 'Binary Search'],
    correctAnswer: 'Dijkstra\'s Algorithm',
    explanation: 'Dijkstra\'s Algorithm is specifically designed to find the shortest path between nodes in a weighted graph with non-negative edge weights.',
    points: 20,
    timeLimit: 90,
    tags: ['graph-algorithms', 'shortest-path', 'dijkstra', 'weighted-graphs']
  }
];

// Quiz configurations
export const quizConfigurations = {
  beginner: {
    name: 'Beginner Assessment',
    description: 'Fundamental concepts for new developers',
    questions: questions.filter(q => q.difficulty === 'beginner'),
    timeLimit: 600, // 10 minutes
    passingScore: 70,
    maxAttempts: 3
  },
  
  intermediate: {
    name: 'Intermediate Challenge',
    description: 'For developers with some experience',
    questions: questions.filter(q => ['beginner', 'intermediate'].includes(q.difficulty)),
    timeLimit: 1200, // 20 minutes
    passingScore: 75,
    maxAttempts: 2
  },
  
  advanced: {
    name: 'Advanced Certification',
    description: 'Expert-level assessment for senior developers',
    questions: questions.filter(q => ['intermediate', 'advanced', 'expert'].includes(q.difficulty)),
    timeLimit: 1800, // 30 minutes
    passingScore: 80,
    maxAttempts: 1
  },
  
  javascript_specialist: {
    name: 'JavaScript Specialist',
    description: 'Comprehensive JavaScript knowledge test',
    questions: questions.filter(q => q.category === 'javascript'),
    timeLimit: 900, // 15 minutes
    passingScore: 85,
    maxAttempts: 2
  },
  
  react_developer: {
    name: 'React Developer Certification',
    description: 'React ecosystem mastery assessment',
    questions: questions.filter(q => q.category === 'react'),
    timeLimit: 900, // 15 minutes
    passingScore: 85,
    maxAttempts: 2
  }
};

// Analytics and insights
export const analyticsData = {
  popularQuestions: [1, 5, 8, 11, 14],
  difficultQuestions: [2, 6, 9, 16, 17, 18],
  categoryPerformance: {
    javascript: { averageScore: 78, completionRate: 92 },
    react: { averageScore: 74, completionRate: 89 },
    algorithms: { averageScore: 68, completionRate: 85 },
    webdev: { averageScore: 82, completionRate: 95 },
    programming: { averageScore: 71, completionRate: 87 }
  }
};

export default {
  questions,
  categories,
  difficultyLevels,
  quizConfigurations,
  analyticsData
};