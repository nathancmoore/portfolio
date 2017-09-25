'use strict';

(function () {

  function hamburgerClick() {
    $('#nav img').fadeIn();
    $('#hamburger').hide();
  }

  function aboutClick() {
    $('#listOfProjects').hide();
    $('#aboutMeContent').fadeIn();
  }

  $('#hamburger').on('click', hamburgerClick);

  $('#aboutMeButton').on('click', aboutClick);

  var rawHtml = $('#handlebars').html();
  var templateFunction  = Handlebars.compile(rawHtml);

  function Project (obj) {
    this.name = obj.projName;
    this.location = obj.projLink;
  }

  Project.prototype.toHtml = () => {
    var htmlToAppend = templateFunction(this);
    $('#listOfProjects').append(htmlToAppend);
  };

  allProjects.map(function(oneProject){
    let proj = new Project(oneProject);
    return proj.toHtml();
  });
  //I don't see a worthwhile use of the .reduce() here. My output is what I want.
})();
