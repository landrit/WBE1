function parseToProto(json, proto) {
  var obj = JSON.parse(json)
  data = Object.assign(Object.create(proto), obj)
  return data
}

let proto = { category: "animal" }
let obj = parseToProto('{"type" : "cat", "name": "Mimi", "age": 3}', proto)
console.log(obj.age)
console.log(obj.category)

module.exports = { parseToProto }
