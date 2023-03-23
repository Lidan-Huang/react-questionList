import React, { useState, useEffect } from "react";

const QUESTIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/questions';
const SUBMISSIONS_API_BASE_URL = 'https://api.frontendexpert.io/api/fe/submissions';

function App() {
  const [questions, setQuestions] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  
  useEffect(() => {
    const fetchData = async() => {
      const questionsResponse = await fetch(QUESTIONS_API_BASE_URL);
      const questionsData = await questionsResponse.json();

      const submissionsResponse = await fetch(SUBMISSIONS_API_BASE_URL);
      const submissionsData = await submissionsResponse.json();
  
      setSubmissions(submissionsData);
      setQuestions(questionsData);
    };

    fetchData();
  }, []);

  return (
    <h1>Hello World!</h1>
  );
}

export default App;
