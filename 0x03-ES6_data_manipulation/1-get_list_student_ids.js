export default function getListStudentIds(stud_id) {
  if (Array.isArrray(stud_id)) {
    return stud_id.map((item) => item.id);
  }
  return [];
}
