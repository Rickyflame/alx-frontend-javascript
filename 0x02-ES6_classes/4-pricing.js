// eslint-disable-next-line
import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // amount getter
  get amount() {
    return this._amount;
  }

  // amount setter
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
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
