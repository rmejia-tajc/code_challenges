// https://www.hackerrank.com/challenges/grading

function gradingStudents(grades) {
  // Write your code here
  let newGrades = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      newGrades.push(grades[i]);
    } else {
      let tempNum = 5 + 5 * Math.floor(grades[i] / 5);
      if (tempNum - grades[i] < 3) {
        newGrades.push(tempNum);
      } else {
        newGrades.push(grades[i]);
      }
    }
  }
  return newGrades;
}
