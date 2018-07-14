'use strict';
const aframe = require('aframe');
require('aframe-physics-system');

aframe.registerComponent('rocktrigger', {
  init: function () {
    var trigger = this.el;
    var rock = document.getElementById('rock');

    trigger.addEventListener('mouseenter', function () {
      rock.setAttribute('dynamic-body', '');
    });
  }
});

