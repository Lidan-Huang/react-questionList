import Question from "./Question";

/**
 * 
 */


function Category({ category, questionsByCategory, submissionsByQuestions}) {
  const numOfQuestions = questionsByCategory[category].length;
  const questionsOfCurrent = questionsByCategory[category];
  let numOfCorrect = 0;

  questionsOfCurrent.forEach(q => {
    if (submissionsByQuestions[q.id] === 'correct') numOfCorrect++;
  });
  
  return (
    <div className='category'>
      <h2>{category} - {numOfCorrect} / {numOfQuestions}</h2>
      { questionsOfCurrent.map(question => (
        <Question
          key={question.id}
          question={question}
          submissionsByQuestions={submissionsByQuestions}
        />
      ))}
    </div>
  );
}

export default Category;