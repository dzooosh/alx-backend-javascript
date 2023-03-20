export default function getListStudentIds(params) {
  if (Array.isArray(params)) {
    return params;
  }
  return [];
}
