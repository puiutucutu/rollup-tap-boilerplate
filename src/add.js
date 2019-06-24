/**
 * @param {Number} x
 * @param {Number} y
 * @return {Number}
 */
function add(x, y) {
  if (
    Object.prototype.toString.call(x) !== "[object Number]" ||
    Object.prototype.toString.call(y) !== "[object Number]"
  ) {
    throw new TypeError("Supplied arg `x` or `y` is not a valid number");
  }

  return x + y;
}

export { add };
