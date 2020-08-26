
const getTemp = require('./util')

const address = process.argv[2]
const weatherUrl = "http://api.weatherstack.com/current?access_key=108fe864921471410c42ffa7cff3e3e8&query="+address

const printer = (data) => {
    console.log("the current temperature is: "+data)
}

getTemp(weatherUrl,printer)
