'use strict';

const EXPRESS = require('express');
const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const app = EXPRESS();
const conString = 'postgres://postgres:postgresPASSWORD123@localhost:5432/portfolio';
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(EXPRESS.static('public'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: '.public'});
})

app.get('/github/*', proxyGitHub);

function proxyGitHub(req, res){
  console.log('Routing a GitHub AJAX request for ', req.params[0]);
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

app.listen(PORT, function() {
  console.log(`The server is on ${PORT}`);
});
