function factorial(num) {
  if (typeof num === "bigint") {
    if (num < 0n) {
      return -1n
    } else if (num == 0n) {
      return 1n
    } else {
      return num * factorial(num - 1n)
    }
  } else {
    if (num < 0) {
      return -1
    } else if (num == 0) {
      return 1
    } else {
      return num * factorial(num - 1)
    }
  }
}

module.exports = { factorial }
console.log(factorial(0))
console.log(factorial(10))
console.log(factorial(50n))
