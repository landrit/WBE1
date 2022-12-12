const fs = require("fs")

function readFileAsync(file, success, error) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) error(err)
    else success(data)
  })
}

readFileAsync(
  "test.txt",
  (data) => {
    console.log(data)
  },
  () => {
    console.log("Error reading file")
  }
)

console.log("this is not async")
