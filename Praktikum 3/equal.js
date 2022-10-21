function equal(a, b) {
  if (a !== b) {
    if (typeof a == "object" && typeof b == "object") {
      if (Object.keys(a).length != Object.keys(b).length) {
        return false
      }
      for (var prop in a) {
        if (b.hasOwnProperty(prop)) {
          if (!equal(a[prop], b[prop])) {
            return false
          }
          if (a[prop] !== b[prop]) {
            return false
          }
        }
      }
    } else if (a !== b) {
      return false
    }
  }
  return true
}

console.log(equal(16, 16))
console.log(equal("hi", "hi"))
console.log(equal({}, {}))
console.log(equal({ a: 1, b: 2 }, { b: 2, a: 1 }))
console.log(equal({ a: 1, b: 2 }, { c: 3, b: 2, a: 1 }))
console.log(equal({ a: {} }, { a: {} }))

let emptyObj = {}
console.log(equal({ a: emptyObj }, { a: emptyObj }))

module.exports = { equal }
