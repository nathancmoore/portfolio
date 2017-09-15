'use strict';

function hamburgerClick () {
  $('#nav img').fadeIn();
  $('#hamburger').hide();
}

$('#hamburger').on('click', hamburgerClick)

var rawHtml = $('#handlebars').html();
var templateFunction  = Handlebars.compile(rawHtml);

function Project (obj) {
  this.name = obj.projName;
  this.location = obj.projLink;
}

Project.prototype.toHtml = function() {
  var htmlToAppend = templateFunction(this);
  $('#listOfProjects').append(htmlToAppend);
};

allProjects.forEach(function(oneProject){
  var proj = new Project(oneProject);
  proj.toHtml();
});
