export default function getListStudentIds(value) {
  const result = [];
  if (!Array.isArray(value)) {
    return result;
  }
  return value.map((val)=>val.id)
  // return result;
}
