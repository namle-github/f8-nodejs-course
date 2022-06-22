const express = require('express')
const app = express()
const port = 3000

app.get('/my-url', function (req, res) {
    var a = 2
    var b = 3
    var c = a + b
    res.send('Hello World')
})

app.listen(port, () => console.log(`Listening at localhost:${port}`))