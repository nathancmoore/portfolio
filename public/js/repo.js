'use strict';

var app = app || {};

(function(module) {
  const repos = {};

  repos.requestRepos = callback => {
    $.get('/github/user/repos')
      .then(results => {
        repos.all = results;
      })
      .then(callback)
  }

  repos.renderRepos = () => {
    let compiled = Handlebars.compile($('#handlebars-repos').html());
    $('#listOfRepos').append(repos.all.sort().map(compiled))
  }
  module.repos = repos;
})(app);
