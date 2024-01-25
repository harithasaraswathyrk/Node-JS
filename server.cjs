//import in js -> require
//export in js -> module.exports in cjs
const express = require('express')
const app = express()
app.use(express.static(__dirname))

//capturing the request
app.get('/get-data',function(request, response)
{
    //console.log(request)
    //status code -> response status
    const respData = {
        "name": "HARI",
        "password":"123456789"
    }
    //sending the response
    response.status(200).json(respData)
})
app.listen(8000)
