export default function getListStudentIds(studs) {
  if (Array.isArray(studs)) {
    return studs.map((item) => item.id);
  }
  return [];
}
