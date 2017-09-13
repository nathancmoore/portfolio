'use strict';

function Project (name, location) {
  this.name = name;
  this.location = location;
  this.append = function append() {
    //stuff happens here
  };
}

function hamburgerClick () {
  $('.social').attr('display', 'inline')
}

$('#hamburger').on('click', hamburgerClick())

new Project ('Salmon Cookies', 'https://nathancmoore.github.io/cookie-stand/');
new Project ('BusMall', 'https://nathancmoore.github.io/bus-mall/');
new Project ('Minesweeper', 'https://nathancmoore.github.io/minesweeper/');
new Project ('Scramble', 'https://mshinners.github.io/Scramble/');
