export default function getListStudentIds(studs) {
  if (Array.isArrray(studs)) {
    return studs.map((item) => item.id);
  }
  return [];
}
