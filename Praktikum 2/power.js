const assert = require("assert")

function power(b, n) {
  assert(Number.isInteger(n), "exponent must be an integer")
  assert(Number.isInteger(b), "base must be an integer")
  if (n == 0) {
    return 1
  } else if (n % 2 == 0) {
    return power(b * b, n / 2)
  } else {
    return b * power(b, n - 1)
  }
}

module.exports = { power }
