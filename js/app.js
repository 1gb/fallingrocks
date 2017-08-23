'use strict';

AFRAME.registerComponent('rock', {
  init: function () {
    var rock = this.el; 
    rock.addEventListener('mouseenter', function () {
      rock.setAttribute('dynamic-body', '');  
    });
  } 
});

