'use strict';

const EXPRESS = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const app = EXPRESS();

app.use(EXPRESS.static('public'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: '.public'});
})

app.listen(PORT, function() {
  console.log(`The server is on ${PORT}`);
});
