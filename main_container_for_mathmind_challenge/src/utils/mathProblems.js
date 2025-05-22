/**
 * Utility functions for generating math problems of varying difficulty
 */

// Generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Difficulty ranges for different operations
const difficultyRanges = {
  easy: {
    addition: { min: 1, max: 20 },
    subtraction: { min: 1, max: 20 },
    multiplication: { min: 1, max: 10 },
    division: { min: 1, max: 10 }
  },
  medium: {
    addition: { min: 10, max: 50 },
    subtraction: { min: 10, max: 50 },
    multiplication: { min: 2, max: 15 },
    division: { min: 2, max: 15 }
  },
  hard: {
    addition: { min: 20, max: 100 },
    subtraction: { min: 20, max: 100 },
    multiplication: { min: 5, max: 20 },
    division: { min: 5, max: 20 }
  }
};

// Generate addition problem
export function generateAddition(difficulty) {
  const range = difficultyRanges[difficulty].addition;
  const a = getRandomInt(range.min, range.max);
  const b = getRandomInt(range.min, range.max);
  
  return {
    expression: `${a} + ${b} = ?`,
    answer: a + b,
    type: 'addition'
  };
}

// Generate subtraction problem
export function generateSubtraction(difficulty) {
  const range = difficultyRanges[difficulty].subtraction;
  const b = getRandomInt(range.min, range.max);
  const answer = getRandomInt(range.min, range.max);
  const a = answer + b; // Ensure positive answer
  
  return {
    expression: `${a} - ${b} = ?`,
    answer: answer,
    type: 'subtraction'
  };
}

// Generate multiplication problem
export function generateMultiplication(difficulty) {
  const range = difficultyRanges[difficulty].multiplication;
  const a = getRandomInt(range.min, range.max);
  const b = getRandomInt(range.min, range.max);
  
  return {
    expression: `${a} × ${b} = ?`,
    answer: a * b,
    type: 'multiplication'
  };
}

// Generate division problem
export function generateDivision(difficulty) {
  const range = difficultyRanges[difficulty].division;
  const b = getRandomInt(range.min, range.max);
  const answer = getRandomInt(range.min, range.max);
  const a = answer * b; // Ensure integer division
  
  return {
    expression: `${a} ÷ ${b} = ?`,
    answer: answer,
    type: 'division'
  };
}

// Generate a random math problem
export function generateRandomProblem(difficulty = 'easy') {
  const operationTypes = ['addition', 'subtraction', 'multiplication', 'division'];
  const randomType = operationTypes[getRandomInt(0, operationTypes.length - 1)];
  
  switch (randomType) {
    case 'addition':
      return generateAddition(difficulty);
    case 'subtraction':
      return generateSubtraction(difficulty);
    case 'multiplication':
      return generateMultiplication(difficulty);
    case 'division':
      return generateDivision(difficulty);
    default:
      return generateAddition(difficulty);
  }
}
