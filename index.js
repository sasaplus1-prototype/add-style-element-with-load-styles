/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var loadStyles = __webpack_require__(1);

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


/***/ },
/* 1 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */

	module.exports = loadStyles;

	/**
	 * Injects the CSS into the <head> DOM node.
	 *
	 * @param {String} css CSS string to add to the <style> tag.
	 * @param {Document} doc document instance to use.
	 */

	function loadStyles(css, doc) {
	  // default to the global `document` object
	  if (!doc) doc = document;

	  var head = doc.head || doc.getElementsByTagName('head')[0];

	  // no <head> node? create one...
	  if (!head) {
	    head = doc.createElement('head');
	    var body = doc.body || doc.getElementsByTagName('body')[0];
	    if (body) {
	      body.parentNode.insertBefore(head, body);
	    } else {
	      doc.documentElement.appendChild(head);
	    }
	  }

	  var style = doc.createElement('style');
	  style.type = 'text/css';
	  if (style.styleSheet) {  // IE
	    style.styleSheet.cssText = css;
	  } else {                 // the world
	    style.appendChild(doc.createTextNode(css));
	  }
	  head.appendChild(style);

	  return style;
	}


/***/ }
/******/ ]);