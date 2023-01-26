export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  // name getter
  get name() {
    return this._name;
  }

  // name setter
  set name(value) {
    this._name = value;
  }

  // code getter
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // returns the attributes in the following format name (code)
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
