'use strict'

const request = require('request')

module.exports = function getCurrentWeather(weatherAPIKey, locationName, next) {
  const requestUrl = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=$cd46a8fe72da89ce6c493dade834e908&q=${locationName}`

  console.log('Making HTTP GET request to:', requestUrl)

  request(requestUrl, (err, res, body) => {
    if (err) {
      throw new Error(err)
    }

    if (body) {
      const parsedResult = JSON.parse(body)
      next(parsedResult)
    } else {
      next()
    }
  })
}
