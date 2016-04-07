'use strict';

var loadStyles = require('load-styles');

loadStyles([
  '@-webkit-keyframes move {',
    'from { transform: translateX(0px); -webkit-transform: translateX(0px) }',
    'to { transform: translateX(100px); -webkit-transform: translateX(100px) }',
  '}'
].join(''));

loadStyles([
  '@keyframes move {',
    'from { transform: translateX(0px); -webkit-transform: translateX(0px) }',
    'to { transform: translateX(100px); -webkit-transform: translateX(100px) }',
  '}'
].join(''));

loadStyles([
  'div {',
    '-webkit-animation: move 3s linear 0s;',
    'animation: move 3s linear 0s;',
    'background-color: blue;',
    'border-radius: 5px;',
    'height: 100px;',
    'width: 100px;',
  '}'
].join(''));
