'use strict';

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== 'number')
      throw new TypeError('"from" property must be a number!');
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== 'number')
      throw new TypeError('"to" property must be a number!');
    if (this.from > to)
      throw new RangeError('"to" must be greter then "from"!');
    this._to = to;
  }
}
