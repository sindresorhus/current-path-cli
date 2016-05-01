#!/usr/bin/env node
'use strict';
const meow = require('meow');
const currentPath = require('current-path');

meow(`
	Example
	  $ current-path
	  /Users/sindresorhus/dev/current-path
`);

currentPath().then(console.log);
