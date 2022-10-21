function iterate(n, init, fn) {
  let result = [],
    next = init
  for (let i = 0; i < n; i++) {
    result.push(next)
    next = fn(next)
  }
  return result
}

console.log(iterate(5, 1, (n) => n * (n + 1))[4])
