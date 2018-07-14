'use strict';

require('aframe');
require('aframe-physics-system');

AFRAME.registerComponent(
  'rock',
  {
    init: function () {
      var trigger = this.el;
      var rock = document.getElementById('rock');
      trigger.addEventListener('mouseenter', function () {
        rock.setAttribute('dynamic-body', '');
      });
    }
  }
);

