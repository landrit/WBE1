const fs = require("fs")
const process = require("process")

//fs.readFile("nexttick.js", () => {
setTimeout(() => {
  console.log("timeout")
}, 0)
setImmediate(() => {
  console.log("immediate")
})
process.nextTick(() => {
  console.log("nexttick")
})

//})

// Wenn fs.Readfile nicht auskommentiert ist, dann ist die Reihenfolge IMMER nexttick, immediate, timeout.
// sonst nexttick immer als erstes und immediate und Timeout immer unterschiedlich!
