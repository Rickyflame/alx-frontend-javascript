export default function getStudentsByLocation(studs, city) {
  return studs.filter((item) => item.location === city);
}
