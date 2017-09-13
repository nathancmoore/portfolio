'use strict';

function hamburgerClick () {
  $('.social').attr('display', 'inline')
}

$('#hamburger').on('click', hamburgerClick())

function Project (name, location) {
  this.name = name;
  this.location = location;
}

Project.prototype.toHtml = function() {
  var $newProject = $('div.template').clone()
  $newProject.removeClass('template')
  // $newProject.find('p') *this is the spot where the content gets put in*
  return $newProject;
};

new Project ('Salmon Cookies', 'https://nathancmoore.github.io/cookie-stand/');
new Project ('BusMall', 'https://nathancmoore.github.io/bus-mall/');
new Project ('Minesweeper', 'https://nathancmoore.github.io/minesweeper/');
new Project ('Scramble', 'https://mshinners.github.io/Scramble/');
