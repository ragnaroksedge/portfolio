'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    $('section').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(app);
