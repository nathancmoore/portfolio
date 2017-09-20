'use strict';

var projects = [];

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

Project.prototype.toHtml = function() {
  var htmlToAppend = templateFunction(this);
  $('#listOfProjects').append(htmlToAppend);
};

$.get('projects.json', function(stuff){
  stuff.forEach(function(oneProject){
    projects.push(new Project(oneProject));
  })
  projects.forEach(function(post){
    post.toHtml();
  })
});
