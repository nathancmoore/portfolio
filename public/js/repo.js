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
  module.repos = repos;
})(app);
