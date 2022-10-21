require("./scripts.js")

const sampler = require("./script-of-sample.js")
//console.log(sampler.scriptOfSample(SCRIPTS))
//console.log(sampler.numberOfCodes(SCRIPTS[3]))

console.log(sampler.scriptOfSample("A", SCRIPTS))
console.log(sampler.scriptOfSample("英", SCRIPTS))
console.log(sampler.scriptOfSample("я", SCRIPTS))
console.log(sampler.scriptOfSample("👍🏻", SCRIPTS))
