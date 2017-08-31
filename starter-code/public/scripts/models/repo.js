'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: DONE What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //(This function is making a get request for github user repos and retrieving all data in the object. It is called in the aboutController. Only a callback function is called.)
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
