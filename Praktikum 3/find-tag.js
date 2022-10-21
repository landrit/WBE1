function findTag(text) {
  let start = text.indexOf("<")
  if (
    text.indexOf("<", start + 1) > -1 &&
    text.indexOf("</", start + 1) === -1
  ) {
    start = text.indexOf("<", start + 1)
  }

  let end = text.indexOf(">")
  let tag = text.substring(start + 1, end)
  if (tag.indexOf(" ") > -1) {
    return undefined
  }

  return tag
}

console.log(findTag("<header>Text</header"))
console.log(findTag("blabla <br> blabla"))
console.log(findTag("123245 </header> bla"))
console.log(findTag("123245 <hea der> bla"))
console.log(findTag("123245 <hea<der> bla"))
console.log(findTag("123245 <hea<der bla"))
module.exports = { findTag }
