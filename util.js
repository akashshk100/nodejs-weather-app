const request = require("request")


const getTemp = function(weatherUrl, callback){

    request.get({url: weatherUrl, json: true}, (error, response) => {
        if(error){
            console.log(error)
        }else if(response.body.error){
            console.log(response.body.error.info)
        }else{
            callback(response.body.current.temperature)
            //console.log("the current temperature is:"+response.body.current.temperature+" and it feels like: "+response.body.current.feelslike)
        }
    })
}

module.exports = getTemp