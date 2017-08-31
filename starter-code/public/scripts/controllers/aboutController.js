'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (This function is hiding all sections except #about and sending a request to the proxyGitHub function on server.js. This is being called in routes.js. It calls the apps.repos.requestRepos function from repo.js with an arguement of the repoView.index function from repoview.js)
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
