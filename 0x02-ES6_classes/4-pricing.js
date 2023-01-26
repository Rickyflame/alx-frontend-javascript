import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // setter amount
  set amount(value) {
    this._amount = value;
  }

  // currency getter
  get currency() {
    return this._currency;
  }

  // currency setter
  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullPrice()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
