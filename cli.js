#!/usr/bin/env node
import meow from 'meow';
import currentPath from 'current-path';

meow(`
	Example
	  $ current-path
	  /Users/sindresorhus/dev/current-path
`, {
	importMeta: import.meta,
});

(async () => {
	console.log(await currentPath());
})();
