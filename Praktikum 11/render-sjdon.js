function renderSJDON(element, container) {
  render(element, container)
}

function render(obj, container) {
  var element = createElement(obj[0])
  forEach(1, obj, (item) => {
    if (isObject(item)) {
      setKeys(element, item)
    } else if (isString(item)) {
      setText(element, item)
    } else {
      render(item, element)
    }
  })
  container.appendChild(element)
}

function forEach(startIndex, array, callback) {
  for (var i = startIndex; i < array.length; i++) {
    callback(array[i])
  }
}

function createElement(type) {
  return document.createElement(type)
}

function setText(element, text) {
  element.innerHTML = text
}

function setKeys(element, keys) {
  for (var key in keys) {
    element[key] = keys[key]
  }
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]"
}
