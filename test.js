import test from 'ava';
import execa from 'execa';

test(async t => {
	t.truthy(await execa('./cli.js', {cwd: __dirname}));
});
