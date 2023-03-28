export default function getListStudentIds(value) {
  const result = [];
  if (!Array.isArray(value)) {
    return result;
  }
  value.forEach((val) => {
    result.push(val.id);
  });
  return result;
}
