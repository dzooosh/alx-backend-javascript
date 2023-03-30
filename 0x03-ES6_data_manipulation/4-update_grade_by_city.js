const updateStudentGradeByCity = (stud_list, city, newGrades) => {
  if (!Array.isArray(stud_list) || !Array.isArray(newGrades)) {
    return [];
  }
  return stud_list.filter((stud) => stud.location === city).map((val) => {
    for (const ng of newGrades) {
      if (val.id !== ng.studentId) {
        continue;
      } else {
        val['grade'] = ng.grade;
        return val;
      }
    }
    val['grade'] = 'N/A';
    return val;
  })
}

export default updateStudentGradeByCity;
