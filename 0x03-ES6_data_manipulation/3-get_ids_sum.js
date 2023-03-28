export default function getStudentIdsSum (stud_list) {
  const id_list = stud_list.map((stud) => stud.id);
  return id_list.reduce((presentTotal, currentVal) => presentTotal + currentVal);
}
