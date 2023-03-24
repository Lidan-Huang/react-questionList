/** 
 * Get a list of questions, like:
 *  [
 *   {
 *  "id": "sign-up-form",
 *  "name": "Sign-Up Form",
 *  "category": "HTML"
 *  },...
 *  ]
 * 
 * return a list of objects, the key of each object is a category and the value 
 * is a list of questions related to this category, like:
 * [
 *  {"HTML": 
 *        [{
      "id": "sign-up-form",
      "name": "Sign-Up Form",
      "category": "HTML"},...]},
      ...
 * ]
 */

export function getCategories(questions) {
  const questionsByCategory = {};

  questions.forEach(q => {
    if (q.category in questionsByCategory) {
      questionsByCategory[q.category].push(q);
    } else {
      questionsByCategory[q.category] = [q];
    }
  });

  return questionsByCategory;
}

