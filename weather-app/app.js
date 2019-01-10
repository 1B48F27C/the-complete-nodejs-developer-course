var request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=03Mos3RVDi8iZAk8xhzlE0QkcGE0QCA6&location=1301%20lombard%20street%20philadelphia', 
    json: true
}, (error, response, body) => {
    console.log(body)
})