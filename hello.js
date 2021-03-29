console.log('Node works!');

var express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening() {
    console.log("listening. . .")
}

app.use(express.static('website'));

app.get('/flower', sendFlower);
function sendFlower(request, response) {
    response.send("I love flowers too");
}
