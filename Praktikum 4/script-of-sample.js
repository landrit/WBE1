function scriptOfSample(c, array) {
  const codePoint = c.codePointAt(0)
  const filteredScripts = array.filter((el) =>
    el.ranges.find((range) => range[1] >= codePoint && range[0] <= codePoint)
  )
  if (filteredScripts == undefined || filteredScripts.length == 0) {
    return "unknown"
  } else {
    return filteredScripts[0].name
  }
}

module.exports = { scriptOfSample }
