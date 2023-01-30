export default function getStudentIdsSum(studs) {
  return studs.reduce((students, counts) => students + counts.id, 0);
}
