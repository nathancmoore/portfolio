'use strict';

var app = app || {};

(function (module) {

  function hamburgerClick() {
    $('#nav img').fadeIn();
    $('#hamburger').hide();
  }

  $('#hamburger').on('click', hamburgerClick);

  function Project (obj) {
    this.name = obj.projName;
    this.location = obj.projLink;
  }

  Project.aboutClick = () => {
    $('#listOfProjects').hide();
    $('#aboutMeContent').fadeIn();
  }

  Project.homeClick = () => {
    $('#aboutMeContent').hide();
    $('#listOfProjects').fadeIn();
  }

  Project.prototype.toHtml = () => {
    var rawHtml = $('#handlebars').html();
    var templateFunction = Handlebars.compile(rawHtml);
    var htmlToAppend = templateFunction(this);
    $('#listOfProjects').append(htmlToAppend);
  };

  $.get('projects.json', function(data){
    data.map(function(oneProject){
      let proj = new Project(oneProject);
      return proj.toHtml();
    })
  });
  module.Project = Project;
})(app);
