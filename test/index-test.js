import test from 'ava';
import reactEasy from '../src/index.js';

test.cb('Should have methods and constructor defined', t => {
  const o = reactEasy({
    file: 'dummy.txt'
  });

  t.truthy(o);
  t.truthy(typeof o.to === 'function');
  t.end();
});

test.cb('Should throw exception if "file" or "files" parameter unspecified', t => {
  const err = 'Missing incoming "file" or "files" parameter!';
  const arr = [{}, {dummy: 123}, undefined];

  for (let options of arr) {
    t.throws(() => { reactEasy(options); }, err);
  }

  t.end();
});

test.cb('Should throw exception if both "file" and "files" parameters specified', t => {
  const err = 'Only one "file" or "files" parameter is expected!';

  t.throws(() => {
    reactEasy({file: 'one', files: 'two'});
  }, err);

  t.end();
});

test.cb('Should set opts.entries to either "file" or "files"', t => {
  const o1 = reactEasy({
    file: 'dummy1.txt'
  });

  const o2 = reactEasy({
    files: 'dummy2.txt'
  });

  t.truthy(o1.opts.entries === 'dummy1.txt');
  t.truthy(o2.opts.entries === 'dummy2.txt');
  t.end();
});

test.cb('Should have .jsx extension by default', t => {
  const o = reactEasy({
    file: 'dummy.txt'
  });

  t.truthy(o.opts.extensions[0] === '.jsx');
  t.end();
});

test.cb('Should throw exception if "extensions" is specified, but it\'s not array', t => {
  const err = '"extensions" parameter provided, but array is expected!';

  t.throws(() => {
    reactEasy({file: 'dummy.txt', extensions: 123});
  }, err);

  t.end();
});

test.cb('Should set opts.extensions to specified value', t => {
  const o = reactEasy({
    file: 'dummy.txt',
    extensions: ['.js']
  });

  t.truthy(o.opts.extensions.length === 1);
  t.truthy(o.opts.extensions[0] === '.js');
  t.end();
});

test.cb('Should set opts.extensions to default value', t => {
  const o = reactEasy({
    file: 'dummy.txt'
  });

  t.truthy(o.opts.extensions.length === 1);
  t.truthy(o.opts.extensions[0] === '.jsx');
  t.is(o.opts.debug, false);
  t.end();
});

test.cb('Should throw exception if "presets" is specified, but it\'s not array', t => {
  const err = '"presets" parameter provided, but array is expected!';

  t.throws(() => {
    reactEasy({file: 'dummy.txt', presets: 123});
  }, err);

  t.end();
});

test.cb('Should set opts.presets to specified value', t => {
  const o = reactEasy({
    file: 'dummy.txt',
    presets: ['something-new']
  });

  t.truthy(o.opts.presets.length === 1);
  t.truthy(o.opts.presets[0] === 'something-new');
  t.end();
});

test.cb('Should set opts.presets to default value', t => {
  const o = reactEasy({
    file: 'dummy.txt'
  });

  t.truthy(o.opts.presets.length === 2);
  t.truthy(o.opts.presets[0] === 'es2015');
  t.truthy(o.opts.presets[1] === 'react');
  t.end();
});
