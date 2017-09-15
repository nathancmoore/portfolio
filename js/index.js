'use strict';

$('#hamburger').on('click', hamburgerClick)

function Project (name, location) {
  this.name = name;
  this.location = location;
}

Project.prototype.toHtml = function() {
  var $newProject = $('div.template').clone()
  $newProject.removeClass('template')
  return $newProject;
};

new Project ('Salmon Cookies', 'https://nathancmoore.github.io/cookie-stand/');
new Project ('BusMall', 'https://nathancmoore.github.io/bus-mall/');
new Project ('Minesweeper', 'https://nathancmoore.github.io/minesweeper/');
new Project ('Scramble', 'https://mshinners.github.io/Scramble/');

function hamburgerClick () {
  $('#nav img').fadeIn();
  $('#hamburger').hide();
}
