import React, { useState, useEffect } from "react";
import { getCategories, getSubmissionsByQuestions } from "./utils";
/**
 * Show questions and their status on user interface.
 * 
 * params: none
 * status: 
 *  - questions
 *  - submissions
 * 
 * App -> Category / Question
 */

// const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
// const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

const questions = [
  {
    "id": "sign-up-form",
    "name": "Sign-Up Form",
    "category": "HTML"
  },
  {
    "id": "item-cart",
    "name": "Item Cart",
    "category": "HTML"
  },
  {
    "id": "spaghetti-recipe",
    "name": "Spaghetti Recipe",
    "category": "HTML"
  },
  {
    "id": "blog-post",
    "name": "Blog Post",
    "category": "HTML"
  },
  {
    "id": "rainbow-circles",
    "name": "Rainbow Circles",
    "category": "CSS"
  },
  {
    "id": "navbar",
    "name": "Navbar",
    "category": "CSS"
  },
  {
    "id": "pig-emoji",
    "name": "Pig Emoji",
    "category": "CSS"
  },
  {
    "id": "purchase-form",
    "name": "Purchase Form",
    "category": "CSS"
  },
  {
    "id": "algoexpert-products",
    "name": "AlgoExpert Products",
    "category": "CSS"
  },
  {
    "id": "testing-framework",
    "name": "Testing Framework",
    "category": "JavaScript"
  },
  {
    "id": "array-methods",
    "name": "Array Methods",
    "category": "JavaScript"
  },
  {
    "id": "event-target",
    "name": "Event Target",
    "category": "JavaScript"
  },
  {
    "id": "debounce",
    "name": "Debounce",
    "category": "JavaScript"
  },
  {
    "id": "this-binding",
    "name": "This Binding",
    "category": "JavaScript"
  },
  {
    "id": "promisify",
    "name": "Promisify",
    "category": "JavaScript"
  },
  {
    "id": "throttle",
    "name": "Throttle",
    "category": "JavaScript"
  },
  {
    "id": "curry",
    "name": "Curry",
    "category": "JavaScript"
  },
  {
    "id": "infinite-scroll",
    "name": "Infinite Scroll",
    "category": "DOM Manipulation"
  },
  {
    "id": "stopwatch",
    "name": "Stopwatch",
    "category": "DOM Manipulation"
  },
  {
    "id": "tic-tac-toe",
    "name": "Tic Tac Toe",
    "category": "DOM Manipulation"
  },
  {
    "id": "todo-list",
    "name": "Todo List",
    "category": "DOM Manipulation"
  },
  {
    "id": "typeahead",
    "name": "Typeahead",
    "category": "DOM Manipulation"
  },
  {
    "id": "tier-list",
    "name": "Tier List",
    "category": "DOM Manipulation"
  },
  {
    "id": "toasts",
    "name": "Toasts",
    "category": "DOM Manipulation"
  },
  {
    "id": "sudoku",
    "name": "Sudoku",
    "category": "DOM Manipulation"
  },
  {
    "id": "questions-list",
    "name": "Questions List",
    "category": "DOM Manipulation"
  }
];
const submissions = [
  {
    "questionId": "blog-post",
    "status": "CORRECT"
  },
  {
    "questionId": "throttle",
    "status": "INCORRECT"
  },
  {
    "questionId": "stopwatch",
    "status": "PARTIALLY_CORRECT"
  },
  {
    "questionId": "pig-emoji",
    "status": "CORRECT"
  },
  {
    "questionId": "todo-list",
    "status": "CORRECT"
  },
  {
    "questionId": "testing-framework",
    "status": "CORRECT"
  },
  {
    "questionId": "array-methods",
    "status": "INCORRECT"
  },
  {
    "questionId": "spaghetti-recipe",
    "status": "PARTIALLY_CORRECT"
  },
  {
    "questionId": "algoexpert-products",
    "status": "PARTIALLY_CORRECT"
  },
  {
    "questionId": "curry",
    "status": "CORRECT"
  },
  {
    "questionId": "toasts",
    "status": "INCORRECT"
  },
  {
    "questionId": "tic-tac-toe",
    "status": "CORRECT"
  },
  {
    "questionId": "event-target",
    "status": "CORRECT"
  },
  {
    "questionId": "debounce",
    "status": "PARTIALLY_CORRECT"
  },
  {
    "questionId": "item-cart",
    "status": "CORRECT"
  },
  {
    "questionId": "typeahead",
    "status": "CORRECT"
  },
  {
    "questionId": "tier-list",
    "status": "PARTIALLY_CORRECT"
  },
  {
    "questionId": "sudoku",
    "status": "CORRECT"
  },
  {
    "questionId": "rainbow-circles",
    "status": "INCORRECT"
  },
  {
    "questionId": "infinite-scroll",
    "status": "CORRECT"
  },
  {
    "questionId": "navbar",
    "status": "PARTIALLY_CORRECT"
  }
];



function App() {
  //as for CORs problem, we couldn't get data from calling the APIs, so we use
  //dummy data here.

  // const [questions, setQuestions] = useState([]);
  // const [submissions, setSubmissions] = useState([]);
  
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const questionsResponse = await fetch(QUESTIONS_API_BASE_URL);
  //     const questionsData = await questionsResponse.json();

  //     const submissionsResponse = await fetch(SUBMISSIONS_API_BASE_URL);
  //     const submissionsData = await submissionsResponse.json();
  
  //     setSubmissions(submissionsData);
  //     setQuestions(questionsData);
  //   };

  //   fetchData();
  // }, []);


  const questionsByCategory = getCategories(questions);
  const categories = Object.keys(questionsByCategory);
  const submissionsByQuestions = getSubmissionsByQuestions(submissions);

  
  return (
    <h1>Hello World!</h1>
  );
}

export default App;
