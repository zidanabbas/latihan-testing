const { averageExams, isStudentPassExam } = require("../gradeCalculations");

// test("it should return exact average", () => {
//   const listValueOfExams = [80, 100, 100, 80];
//   expect(averageExams(listValueOfExams)).toEqual(90);
// });

describe("grade calculations", () => {
  test("it should exact average", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams).toEqual(90));
  });

  test("it should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Abbas").toEqual(true));
  });

  test("it should return exam failed status", () => {
    const listValueOfExam = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExam, "Abbas").toEqual(false));
  });
});
