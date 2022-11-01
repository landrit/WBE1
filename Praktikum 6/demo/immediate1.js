// timeout_vs_immediate.js
setTimeout(() => {
  console.log("timeout")
}, 0)

setImmediate(() => {
  console.log("immediate")
})

// Es kommt drauf an, wann der Event Loop die Callbacks abarbeitet.
