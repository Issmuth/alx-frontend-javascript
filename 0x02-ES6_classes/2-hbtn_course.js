export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }

    if (!(Array.isArray(students)) || typeof (students[0]) !== 'string') {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  get students() {
    return this._length;
  }

  set students(students) {
    this._students = students;
  }
}
