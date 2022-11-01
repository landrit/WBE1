// timeout_vs_immediate.js
const fs = require("fs")

fs.readFile("immediate2.js", () => {
  setTimeout(() => {
    console.log("timeout")
  }, 0)
  setImmediate(() => {
    console.log("immediate")
  })
})

// Hier ist es klar, dass der Immediate zuerst ausgeführt wird, weil Immediate im Event-Loop nach Pending I/O Operationen ausgeführt werden.
// Hier wird offensichtlich, ein File ausgelesen.
