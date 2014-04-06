'use strict';

var fs = require('fs');
var file = fs.readFileSync('./thousandprimes.txt').toString();

module.exports = file.split(/\s/gi).filter(filter).map(toInt);

/**
 *	Filter out empty strings
 */
function filter (val) {
	return !!val;
};

/**
 *	Parse out integers
 */
function toInt (val) {
	return parseInt(val, 10);
};
