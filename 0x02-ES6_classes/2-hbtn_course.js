export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // length getter
  get length() {
    return this._length;
  }

  // length setter
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // students getter
  get students() {
    return this._students;
  }

  // students setter
  set students(value) {
    value.forEach((element) => {
      if (typeof element !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
    this._students = value;
  }
}
