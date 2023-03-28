import getListStudents from "./0-get_list_students"

const getStudentsByLocation = (stud_list, city) => {

  if (typeof city !== "string") {
    throw Error("City must be a string");
  }
  return stud_list.filter((student) => student.location === city);
}

export default getStudentsByLocation;
