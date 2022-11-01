var https = require("https")

const getTemperature = (place) => {
  return new Promise((resolve, reject) => {
    const url = `https://wttr.in/${place}?format=j1`
    https
      .get(url, (res) => {
        let body = ""
        res.on("data", (chunk) => {
          body += chunk
        })
        res.on("end", () => {
          try {
            let json = JSON.parse(body)
            resolve(json)
          } catch (error) {
            reject(error)
          }
        })
      })
      .on("error", (error) => {
        reject(error)
      })
  })
}

getTemperature(process.argv[2]).then((temp) => {
  console.log(`Am Morge 🌞  ${temp.weather[0].avgtempC}°C.`)
  console.log(`Am Mittag 🌗  ${temp.weather[1].avgtempC}°C.`)
  console.log(`Am Abig 🌚  ${temp.weather[2].avgtempC}°C.`)
})
