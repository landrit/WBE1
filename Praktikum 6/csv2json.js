const fs = require("fs")

let fileInformations = (path) => {
  let size = fs.statSync(path).size
  let time = Date.now()
  let content = fs.readFileSync(path, "utf8")
  time = Date.now() - time
  let lines = content.split("\n").length
  let date = fs.statSync(path).mtime
  fs.writeFileSync(
    "./code/csv/population.json",
    JSON.stringify({
      size: size,
      lastChange: date,
      amountLines: lines,
      timeToRead: time,
    })
  )
}

console.log(fileInformations("./code/csv/population.csv"))
