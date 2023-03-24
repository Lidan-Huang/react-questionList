/** Show each question with submission status of this question
 * props:
 *  - question
 *  - submissionsByQuestions
 * 
 * status: none
 * Category -> Question
 */


function Question({ question, submissionsByQuestions}) {
  const status = submissionsByQuestions[question.id] === undefined 
    ? 'unattemped' : submissionsByQuestions[question.id];

  return (
    <div className="question">
      <div className={`status ${status}`}></div>
      <h3>{question.name}</h3>
    </div>
  );
}

export default Question;