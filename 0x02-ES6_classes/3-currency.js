export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  //getter
  get code() {
    return this._name;
  }

  //setter
  set code(value) {
    this._code = value;
  }

  //getter
  get name() {
    return this._name;
  }

 //setter
  set name(value) {
    this._name = name;
  }

  displayFullCurrency() {
   return `${this._name} (${this._code})`;
  }
}
